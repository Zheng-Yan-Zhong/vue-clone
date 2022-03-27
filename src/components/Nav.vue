<template lang="">
  <nav
    class="navbar navbar-expand-lg"
    :class="[bgc === 'black' ? 'nav-black' : 'nav-light']"
  >
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#">YZ</a>
      <span v-if="!user.user">login</span>
      <span v-if="user.user">{{ user.user }}</span>
      <span @click="clear()" v-if="user">Logout</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product</a>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">Avatar</a>
          </li>
          <button @click="darkMode()" class="nav-link">darkmode</button>
          <button @click="lightMode()" class="nav-link">lightmode</button>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '../store/theme';
export default {
  setup() {
    const store = useStore();
    const { bgc, color } = storeToRefs(store);
    const { darkMode, lightMode } = store;
    const user = reactive(JSON.parse(localStorage.getItem('user')) || false);
    const clear = () => localStorage.clear('user');

    return {
      darkMode,
      lightMode,
      clear,
      bgc,
      color,
      user,
    };
  },
};
</script>
<style lang="scss">
.logo {
  font-size: 1.3rem !important;
  color: rgb(61, 131, 155) !important;
  transition-duration: 1s !important;
  &:hover {
    color: lightgrey !important;
  }
}
.nav-black {
  background-color: black !important;
}
.nav-white {
  background-color: white !important;
}
</style>
