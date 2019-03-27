export default (modelName, defaultListName, selectors) =>
  Object.assign(
    {},
    {
      getById: () => (rootState, id) => rootState[modelName].byId[id],
      list: () => (rootState, listName = defaultListName) =>
        rootState[modelName][listName].map(id => rootState[modelName].byId[id])
    },
    selectors
  );
