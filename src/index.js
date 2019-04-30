import createInitialState from './createInitialState';
import createReducers from './createReducers';
import createEffects from './createEffects';
import createSelectors from './createSelectors';

export default (
  modelName,
  api,
  {
    idKey = 'id',
    listNames = ['allIds'],
    initialState,
    reducers,
    effects,
    selectors
  } = {}
) => {
  if (!api) {
    throw new Error(
      '[REMATCH_MODEL_LIST] An API service is required. Pass an object with these methods: get, getById, update, create and remove.'
    );
  }

  return {
    state: createInitialState(listNames, initialState),
    reducers: createReducers(listNames[0], idKey, reducers),
    effects: createEffects(modelName, listNames[0], idKey, api, effects),
    selectors: createSelectors(modelName, listNames[0], selectors),
    name: modelName
  };
};
