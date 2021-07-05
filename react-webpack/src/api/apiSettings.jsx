import instance from './api';

const settingConf = {

  async setSettingConf(settings) {
    try {
      return await instance.post('settings', settings).then((res) => res.data === '');
    } catch {
      return 'ошибка';
    }
  },

  async getSettingConf() {
    try {
      return await instance.get('settings').then((res) => res);
    } catch {
      return 'ошибка';
    }
  },

};

export default settingConf;
