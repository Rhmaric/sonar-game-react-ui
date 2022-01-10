import { createStore, persist } from 'easy-peasy';
import { traceModel, ITraceModel } from './trace';
import { IMapModel, mapModel } from './map';

export interface IStoreModel {
  myTrace: ITraceModel;
  enemyTrace: ITraceModel;
  map: IMapModel;
}

const storeModel: IStoreModel = {
  myTrace: traceModel,
  enemyTrace: traceModel,
  map: mapModel,
};

export const appStore = createStore(storeModel);
