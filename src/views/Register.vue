<template lang="">
  <div class="register-container">
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
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label shake"
          >email</label
        >
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="email"
        />
      </div>
      <button class="">login</button>
      <router-link class="nav-link" to="/">back to homepage</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.register-container {
  padding: 1rem;
}
</style>
