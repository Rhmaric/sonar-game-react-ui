import { Action, action } from 'easy-peasy';
import { IMapCell } from '../utils/map';
import {
  computeDisplacement,
  IPotentialPosition,
  positionIsPossible,
} from '../utils/trace';
import { CardinalDirection, IStepTrace } from '../utils/trace';

export interface ITraceModel {
  steps: IStepTrace[];
  initTrace: Action<ITraceModel, IMapCell[][]>;
  addStep: Action<ITraceModel, CardinalDirection>;
}

export const traceModel: ITraceModel = {
  steps: [],
  initTrace: action((state, payload) => {
    state.steps.push({
      currentStepNumber: 0,
      potentialPositions: convertMapIntoPotentialPositions(payload),
    });
  }),
  addStep: action((state, payload) => {
    state.steps.push({
      currentStepNumber: state.steps.length + 1,
      lastDirection: payload,
      potentialPositions: computeNewPotentialPositions(
        payload,
        state.steps[state.steps.length].potentialPositions,
      ),
    });
  }),
};

const convertMapIntoPotentialPositions = (
  map: IMapCell[][],
): IPotentialPosition[] => {
  return map
    .map(row =>
      row.map(cell => ({
        startingPosition: { x: cell.column, y: cell.row },
        currentPosition: { x: cell.column, y: cell.row },
        relativeDisplacement: { x: 0, y: 0 },
        isPossible: cell.isIsland ? false : true,
      })),
    )
    .flat();
};

const computeNewPotentialPositions = (
  direction: CardinalDirection,
  lastPotentialPositions: IPotentialPosition[],
): IPotentialPosition[] => {
  return lastPotentialPositions
    .map(p => ({
      ...p,
      currentPosition: computeDisplacement(p.currentPosition, direction),
      relativeDisplacement: computeDisplacement(
        p.relativeDisplacement,
        direction,
      ),
    }))
    .map(p => ({ ...p, isPossible: positionIsPossible(p) }));
};
