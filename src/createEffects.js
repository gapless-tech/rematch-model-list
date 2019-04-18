import { noop } from 'lodash';

export default (modelName, defaultListName, idKey, api, effects) => dispatch => {
  const ownDispatch = dispatch[modelName];

  const baseEffects = {
    async getAsync({
      listName = defaultListName,
      params,
      onSuccess = noop,
      onFail = noop,
      onFinish = noop,
      ...rest
    } = {}) {
      try {
        const data = await api.get(params);
        onSuccess(data);
        ownDispatch.write({ data, listName, ...rest });
      } catch (error) {
        onFail(error);
      } finally {
        onFinish();
      }
    },

    async getByIdAsync({
      id,
      params,
      onSuccess = noop,
      onFail = noop,
      onFinish = noop
    }) {
      try {
        const data = await api.getById(id, params);
        onSuccess(data);
        ownDispatch.writeById({ id, data });
      } catch (error) {
        onFail(error);
      } finally {
        onFinish();
      }
    },

    async createAsync({
      data,
      updateList,
      listName = defaultListName,
      onSuccess = noop,
      onFail = noop,
      onFinish = noop
    }) {
      try {
        const response = await api.create(data);
        onSuccess(response);

        if (updateList) {
          await ownDispatch.getAsync({ listName });
        }
      } catch (error) {
        onFail(error);
      } finally {
        onFinish();
      }
    },

    async updateAsync({
      data,
      updateList,
      listName,
      onSuccess = noop,
      onFail = noop,
      onFinish = noop
    }) {
      try {
        const response = await api.update(data[idKey], data);
        onSuccess(response);

        if (updateList) {
          await ownDispatch.getAsync({ listName });
        }
      } catch (error) {
        onFail(error);
      } finally {
        onFinish();
      }
    },

    async removeAsync({
      id,
      params,
      updateList,
      listName = defaultListName,
      onSuccess = noop,
      onFail = noop,
      onFinish = noop
    }) {
      try {
        await api.remove(id, params);
        onSuccess();
        if (updateList) {
          await ownDispatch.getAsync({ listName });
        }
      } catch (error) {
        onFail();
      } finally {
        onFinish();
      }
    }
  };

  return Object.assign(
    {},
    baseEffects,
    effects && effects(dispatch, baseEffects)
  );
};
