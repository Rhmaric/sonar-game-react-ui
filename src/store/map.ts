import { Action, action } from 'easy-peasy';
import { IMapCell } from '../utils/map';

export interface IMapModel {
  rows: number;
  columns: number;
  map: IMapCell[][];
  initMap: Action<IMapModel>;
  convertIntoIsland: Action<IMapModel, IMapCell>;
}

export const mapModel: IMapModel = {
  rows: 10,
  columns: 10,
  map: [],
  initMap: action(state => {
    state.map = initializeMap(state.rows, state.columns);
  }),
  convertIntoIsland: action((state, payload) => {
    state.map = state.map.map(row =>
      row.map(cell => ({
        ...cell,
        isIsland:
          payload.row === cell.row && payload.column === cell.column
            ? !cell.isIsland
            : cell.isIsland,
      })),
    );
  }),
};

const initializeMap = (rows: number, columns: number): IMapCell[][] => {
  return Array.from(Array(columns).keys()).map(column =>
    Array.from(Array(rows).keys()).map(row => ({
      column,
      row,
      isIsland: false,
    })),
  );
};
