<template>
  <nav class="navbar">
    <div class="navbar__left">
      <button class="button-transparent" @click="toggleSideBar()">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.58049 10H33.4188C34.2888 10 35.0005 10.7117 35.0005 11.5817V11.7517C35.0005 12.6217 34.2888 13.3333 33.4188 13.3333H6.58049C5.71049 13.3333 5.00049 12.6217 5.00049 11.7517V11.5817C5.00049 10.7117 5.71049 10 6.58049 10ZM33.4188 18.3333H6.58049C5.71049 18.3333 5.00049 19.045 5.00049 19.915V20.085C5.00049 20.955 5.71049 21.6667 6.58049 21.6667H33.4188C34.2888 21.6667 35.0005 20.955 35.0005 20.085V19.915C35.0005 19.045 34.2888 18.3333 33.4188 18.3333ZM33.4188 26.6667H6.58049C5.71049 26.6667 5.00049 27.3783 5.00049 28.2483V28.4183C5.00049 29.2883 5.71049 30 6.58049 30H33.4188C34.2888 30 35.0005 29.2883 35.0005 28.4183V28.2483C35.0005 27.3783 34.2888 26.6667 33.4188 26.6667Z"
            fill="#231F20"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="5"
            y="10"
            width="31"
            height="20"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.58049 10H33.4188C34.2888 10 35.0005 10.7117 35.0005 11.5817V11.7517C35.0005 12.6217 34.2888 13.3333 33.4188 13.3333H6.58049C5.71049 13.3333 5.00049 12.6217 5.00049 11.7517V11.5817C5.00049 10.7117 5.71049 10 6.58049 10ZM33.4188 18.3333H6.58049C5.71049 18.3333 5.00049 19.045 5.00049 19.915V20.085C5.00049 20.955 5.71049 21.6667 6.58049 21.6667H33.4188C34.2888 21.6667 35.0005 20.955 35.0005 20.085V19.915C35.0005 19.045 34.2888 18.3333 33.4188 18.3333ZM33.4188 26.6667H6.58049C5.71049 26.6667 5.00049 27.3783 5.00049 28.2483V28.4183C5.00049 29.2883 5.71049 30 6.58049 30H33.4188C34.2888 30 35.0005 29.2883 35.0005 28.4183V28.2483C35.0005 27.3783 34.2888 26.6667 33.4188 26.6667Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <rect width="40" height="40" fill="#0D1C2E" />
          </g>
        </svg>
      </button>
      <div class="navbar__left--logo">
        <Logo></Logo>
      </div>
    </div>
    <div class="navbar__right">
      <button class="navbar__right--search button-transparent">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.33333 18.3333C8.33333 12.8183 12.8183 8.33333 18.3333 8.33333C23.8483 8.33333 28.3333 12.8183 28.3333 18.3333C28.3333 23.8483 23.8483 28.3333 18.3333 28.3333C12.8183 28.3333 8.33333 23.8483 8.33333 18.3333ZM34.5117 32.155L28.8533 26.495C30.6083 24.2383 31.6667 21.41 31.6667 18.3333C31.6667 10.9817 25.685 5 18.3333 5C10.9817 5 5 10.9817 5 18.3333C5 25.685 10.9817 31.6667 18.3333 31.6667C21.41 31.6667 24.2383 30.6083 26.495 28.8533L32.155 34.5117C32.48 34.8367 32.9067 35 33.3333 35C33.76 35 34.1867 34.8367 34.5117 34.5117C35.1633 33.86 35.1633 32.8067 34.5117 32.155Z"
            fill="#231F20"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="5"
            y="5"
            width="31"
            height="30"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.33333 18.3333C8.33333 12.8183 12.8183 8.33333 18.3333 8.33333C23.8483 8.33333 28.3333 12.8183 28.3333 18.3333C28.3333 23.8483 23.8483 28.3333 18.3333 28.3333C12.8183 28.3333 8.33333 23.8483 8.33333 18.3333ZM34.5117 32.155L28.8533 26.495C30.6083 24.2383 31.6667 21.41 31.6667 18.3333C31.6667 10.9817 25.685 5 18.3333 5C10.9817 5 5 10.9817 5 18.3333C5 25.685 10.9817 31.6667 18.3333 31.6667C21.41 31.6667 24.2383 30.6083 26.495 28.8533L32.155 34.5117C32.48 34.8367 32.9067 35 33.3333 35C33.76 35 34.1867 34.8367 34.5117 34.5117C35.1633 33.86 35.1633 32.8067 34.5117 32.155Z"
              fill="white"
            />
          </mask>
        </svg>
      </button>
      <router-link
        to="/sign-in-options"
        class="outlined-button button-blue"
        v-if="!$store.state.loggedIn"
        >Daxil ol</router-link
      >

      <router-link
        class="outlined-button button-blue"
        v-if="$store.state.loggedIn"
        to="/myProfile"
        id="navbarUser"
      >
        <span class="navbar-username">
          {{ $store.state.userName }}
        </span>
        <img src="@/assets/icons/person.svg" alt="" />
      </router-link>

      <button id="loginTest" @click="changeLoginState()">
        Login/logout test
      </button>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo";
export default {
  data() {
    return {
      loggedIn: true
    };
  },
  components: {
    Logo
  },
  methods: {
    toggleSideBar() {
      this.$root.$emit("toggleSideBar");
    },
    checkUserLogin() {
      console.log(this.$store.state.loggedIn);
    },
    changeLoginState() {
      this.$store.state.loggedIn = !this.$store.state.loggedIn;
      console.log("asdasdasd", this.$store.state.loggedIn);
    }
  },
  created() {
    this.checkUserLogin();
  }
};
</script>

<style lang="scss"></style>
