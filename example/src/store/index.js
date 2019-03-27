import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import models from './models';

const plugins = [selectPlugin()];
const store = init({ plugins, models });

export const { select } = store;
export default store;
