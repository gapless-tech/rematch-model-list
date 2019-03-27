export default (listNames, initialState) =>
  Object.assign(
    {},
    {
      byId: {},
      pagination: {}
    },
    listNames.reduce(
      (acc, listName) => Object.assign(acc, { [listName]: [] }),
      {}
    ),
    initialState
  );
