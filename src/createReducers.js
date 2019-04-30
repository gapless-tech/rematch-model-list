import { keyBy, map, get, isArray } from 'lodash';

const DEFAULT_SORT_IDS = newIds => newIds;

export default (defaultListName, idKey, reducers) =>
  Object.assign(
    {},
    {
      write: (
        state,
        { data, listName = defaultListName, sortIds = DEFAULT_SORT_IDS }
      ) => {
        const list = get(data, 'list', data);
        const pagination = get(data, 'pagination', null);

        if (!isArray(list)) {
          throw new Error(
            '[REMATCH_MODEL_LIST] Neither `data` nor `data.list` is as array.'
          );
        }

        const newIds = map(list, idKey);

        return Object.assign({}, state, {
          byId: Object.assign({}, state.byId, keyBy(list, idKey)),
          [listName]: sortIds(newIds, state[listName]),
          pagination: Object.assign({}, state.pagination, {
            [listName]: pagination
          })
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
