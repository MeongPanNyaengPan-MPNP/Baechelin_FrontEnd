import Api from './httpClient';

const resource = '/user';
export default {
  get() {
    return Api.get(resource);
  },
};
