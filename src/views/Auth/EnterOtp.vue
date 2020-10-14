<template>
  <main class="signin__main">
    <div class="otp-inputs">
      <input type="email" class="otp-input" maxlength="1" />
      <input type="email" class="otp-input" maxlength="1" />
      <input type="email" class="otp-input" maxlength="1" />
      <input type="email" class="otp-input" maxlength="1" />
    </div>
    <div class="signin__main--footer">
      <div class="pagination-dots">
        <span class="dot"></span>
        <span class="dot blue-bg"></span>
        <span class="dot"></span>
      </div>
      <button class="button-blue-bg-rounded" @click="enterOneTimePassword()">
        Davam et
      </button>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    enterOneTimePassword() {
      this.$router.push("/setnewpassword");
    }
  }
};
</script>

<style>
.otp-inputs {
  display: flex;
  justify-content: space-between;
}
</style>
