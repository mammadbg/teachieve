<template>
  <main class="signin__main">
    <div class="inputs-container">
      <div class="input-group-gray-outlined">
        <input
          placeholder="Yeni şifrə"
          type="password"
          id="registrationPassword"
        />
        <img
          src="../../assets/img/eye.png"
          v-if="passwordIsVisible"
          alt=""
          @click="changePasswordVisibility()"
        />
        <img
          src="../../assets/img/eye-off.png"
          v-if="!passwordIsVisible"
          alt=""
          @click="changePasswordVisibility()"
        />
      </div>
      <div class="input-group-gray-outlined">
        <input
          placeholder="Şifrənin təkrarı"
          type="password"
          id="registrationPasswordRepeat"
        />
        <img
          src="../../assets/img/eye.png"
          v-if="passwordRepeatIsVisible"
          alt=""
          @click="changePasswordRepeatVisibility()"
        />
        <img
          src="../../assets/img/eye-off.png"
          v-if="!passwordRepeatIsVisible"
          alt=""
          @click="changePasswordRepeatVisibility()"
        />
      </div>
    </div>
    <div class="signin__main--footer">
      <div class="pagination-dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot blue-bg"></span>
      </div>
      <button class="button-blue-bg-rounded" @click="setNewPassword()">
        Yenilə
      </button>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    setNewPassword() {
      this.$router.push("/");
    },
    changePasswordVisibility() {
      this.passwordIsVisible = !this.passwordIsVisible;
      let registrationPassword = document.getElementById(
        "registrationPassword"
      );
      if (registrationPassword.type === "password") {
        registrationPassword.type = "text";
      } else {
        registrationPassword.type = "password";
      }
    },
    changePasswordRepeatVisibility() {
      this.passwordRepeatIsVisible = !this.passwordRepeatIsVisible;
      let registrationPassword = document.getElementById(
        "registrationPasswordRepeat"
      );
      if (registrationPassword.type === "password") {
        registrationPassword.type = "text";
      } else {
        registrationPassword.type = "password";
      }
    }
  }
};
</script>

<style></style>
