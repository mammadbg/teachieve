<template>
  <div class="login">
    <div class="login__left">
      <h1 class="heading-xl dark-blue">Giriş</h1>
      <div class="input-group-white">
        <input type="text" />
      </div>
      <div class="input-group-white">
        <input type="password" id="loginPasswordInput" />
        <img
          src="../assets/img/eye.png"
          v-if="!passwordIsVisible"
          @click="changeInputType()"
        />
        <img
          src="../assets/img/eye-off.png"
          v-if="passwordIsVisible"
          alt=""
          @click="changeInputType()"
        />
      </div>
      <button class="button-dark-blue button-l">Daxil ol</button>
    </div>
    <div class="login__right">
      <img src="../assets/img/login.png" alt="image" class="login-page-image" />
      <div class="login__right--bottom">
        <img src="../assets/img/logo.png" alt="" />
        <h2 class="heading-l">
          platformasına qoşulmaq üçün hesab yarat və uğurlu layihələr üçün
          uğurlu yoldaşlar tap
        </h2>
      </div>
    </div>
    <div class="logo-for-mobile">
      <img src="../assets/img/logo.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordIsVisible: false
    };
  },
  methods: {
    changeInputType() {
      let input = document.getElementById("loginPasswordInput");
      if (input.type == "text") {
        input.type = "password";
      } else {
        input.type = "text";
      }
      this.passwordIsVisible = !this.passwordIsVisible;
    }
  }
};
</script>
