export default (modelName, defaultListName, selectors) =>
  Object.assign(
    {},
    {
      getById: () => (rootState, id) => rootState[modelName].byId[id],
      list: (select) => (rootState, listName = defaultListName) =>
        rootState[modelName][listName].map(id => select[modelName].getById(rootState, id)),
      getPagination: () => (rootState, listName = listNames[0]) =>
        rootState[modelName].pagination[listName] || { pages: {} },
      getNextPageParams: () => (rootState, listName = listNames[0]) => console.log(get(rootState[modelName], `pagination[${listName}]`)) ||
        get(rootState[modelName], `pagination[${listName}].pages.next`),
      getNextPageStatus: (select) => (rootState, listName = listNames[0]) => Boolean(
        select[modelName].getNextPageParams(rootState, listName)
      ),
    },
    selectors
  );
