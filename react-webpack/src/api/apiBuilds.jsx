import instance from './api';

const buildsApi = {

  async getBuildsList() {
    try {
      return await instance.get('builds').then((res) => res);
    } catch {
      return 'ошибка';
    }
  },

  async postNewBuild(commitHash) {
    try {
      return await instance.post(`builds/${commitHash.commitHash}`).then((res) => res);
    } catch {
      return 'ошибка';
    }
  },

};

export default buildsApi;
