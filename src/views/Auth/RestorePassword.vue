<template>
  <div class="signin">
    <div class="signin__cover-image">
      <img src="@/assets/img/restore-password.png" />
    </div>
    <div class="content">
      <div class="signin__description">
        <h2 class="heading-l">Şifrəni bərpa et</h2>
        <p>
          Şifrəni unutmusan? Narahat olma, email-ni daxil et lazımı köməkliyi
          göstərək
        </p>
      </div>

      <router-view></router-view>

      <button class="button-transparent back-button" @click="$router.back()">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icon/Outline/arrow-left">
            <path
              id="Mask"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19 11H7.135L10.768 6.63997C11.122 6.21597 11.064 5.58497 10.64 5.23197C10.215 4.87797 9.585 4.93597 9.232 5.35997L4.232 11.36C4.193 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.193 12.593 4.232 12.64L9.232 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z"
              fill="#149CFF"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="5"
              width="16"
              height="14"
            >
              <path
                id="Mask_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 11H7.135L10.768 6.63997C11.122 6.21597 11.064 5.58497 10.64 5.23197C10.215 4.87797 9.585 4.93597 9.232 5.35997L4.232 11.36C4.193 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.193 12.593 4.232 12.64L9.232 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z"
                fill="white"
              />
            </mask>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SigIn",
  data() {
    return {
      passwordIsVisible: true,
      passwordRepeatIsVisible: true,
      form: {
        mail: "",
        response: "",
        password: "",
        repeatPassword: ""
      },
      pages: {
        sendToEmail: true,
        oneTimePassword: false,
        newPassword: false
      }
    };
  },
  methods: {
    changeRoute() {
      this.$router.push("/restore-password");
    }
  }
};
</script>

<style lang="scss" scoped>
.signin {
  &__main {
    padding-bottom: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
