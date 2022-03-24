<template>
  <div class="login-container">
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label shake">user</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="username"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label shake"
        >password</label
      >
      <input
        type="password"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="password"
      />
      <button class="">login</button>
      <router-link class="nav-link" to="/">back to homepage</router-link>
      <router-link class="nav-link" to="/register"
        >haven't account? click here to sign up</router-link
      >
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.login-container {
  padding: 1rem;
}
</style>
