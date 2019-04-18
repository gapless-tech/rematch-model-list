export default (modelName, defaultListName, selectors) =>
  Object.assign(
    {},
    {
      getById: () => (rootState, id) => rootState[modelName].byId[id],
      list: (select) => (rootState, listName = defaultListName) =>
        rootState[modelName][listName].map(id => select[modelName].getById(rootState, id))
    },
    selectors
  );
