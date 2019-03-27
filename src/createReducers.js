import { keyBy, map } from 'lodash';

export default (defaultListName, idKey, reducers) =>
  Object.assign(
    {},
    {
      write: (state, { data, listName = defaultListName }) => {
        return Object.assign({}, state, {
          byId: Object.assign({}, state.byId, keyBy(data, idKey)),
          [listName]: map(data, idKey)
        });
      },

      writeById: (state, { id, data } = {}) =>
        Object.assign({}, state, {
          byId: Object.assign({}, state.byId, { [id]: data })
        }),

      reset: (state, { listName = defaultListName } = {}) =>
        Object.assign({}, state, { [listName]: [] })
    },
    reducers
  );
