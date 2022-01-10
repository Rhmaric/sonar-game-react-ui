import { ICoordinates } from './map';

export interface IStepTrace {
  currentStepNumber: number;
  potentialPositions: IPotentialPosition[];
  lastDirection?: CardinalDirection;
}

export enum CardinalDirection {
  West = 'west',
  Est = 'est',
  North = 'north',
  South = 'south',
}

export const cardinalRelativeDisplacement = {
  [CardinalDirection.West]: { x: -1, y: 0 },
  [CardinalDirection.Est]: { x: 1, y: 0 },
  [CardinalDirection.North]: { x: 0, y: -1 },
  [CardinalDirection.South]: { x: 0, y: +1 },
};

export interface IPotentialPosition {
  startingPosition: ICoordinates;
  currentPosition: ICoordinates;
  relativeDisplacement: ICoordinates;
  isPossible: boolean;
}

export const computeDisplacement = (
  position: ICoordinates,
  direction: CardinalDirection,
): ICoordinates => {
  return {
    x: position.x + cardinalRelativeDisplacement[direction].x,
    y: position.y + cardinalRelativeDisplacement[direction].y,
  };
};

export const positionIsPossible = (p: IPotentialPosition): boolean => {
  if (!p.isPossible) return false;
  if (p.currentPosition.x < 0) return false;
  if (p.currentPosition.y < 0) return false;
  return true;
};
