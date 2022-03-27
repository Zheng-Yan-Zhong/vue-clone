import { defineStore } from 'pinia';

export const useStore = defineStore('theme', {
  state: () => {
    return {
      bgc: 'white',
      color: 'grey',
    };
  },
  actions: {
    darkMode() {
      (this.bgc = 'black'), (this.color = 'white');
    },
    lightMode() {
      (this.bgc = 'white'), (this.color = 'grey');
    },
  },
});
