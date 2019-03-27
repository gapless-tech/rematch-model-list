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
) => ({
  state: createInitialState(listNames, initialState),
  reducers: createReducers(listNames[0], idKey, reducers),
  effects: createEffects(modelName, listNames[0], idKey, api, effects),
  selectors: createSelectors(modelName, listNames[0], selectors),
  name: modelName
});
