<template>
  <div class="main">
    <navbar></navbar>
    <div class="main__content">
      <div class="sidebar" :class="{ show: showSidebarState }">
        <div class="sidebar__section" @click="showSidebarState = false">
          <router-link class="heading-xl" to="/sponsors"
            >Sponsorlar</router-link
          >
        </div>
        <div class="sidebar__section" @click="showSidebarState = false">
          <router-link class="heading-xl" to="/about">Biz kimik?</router-link>
        </div>
        <div class="sidebar__section" @click="showSidebarState = false">
          <router-link class="heading-xl" to="/contact">Əlaqə</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <div class="main__footer">
      <div class="inner">
        <router-link to="/home">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon/Outline/home">
              <path
                id="Mask"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.7377 25H20.0002V16.2501C20.0002 15.5588 19.4402 15.0001 18.7502 15.0001H11.2502C10.559 15.0001 10.0002 15.5588 10.0002 16.2501V25H6.25024L6.25774 14.4788L14.9977 5.54005L23.7502 14.5301L23.7377 25ZM12.5002 25.0001H17.5002V17.5001H12.5002V25.0001ZM25.5302 12.7313L15.894 2.87632C15.4227 2.39507 14.5777 2.39507 14.1065 2.87632L4.46899 12.7326C4.01274 13.2013 3.75024 13.8563 3.75024 14.5301V25.0001C3.75024 26.3788 4.80899 27.5001 6.11024 27.5001H11.2502H18.7502H23.889C25.1902 27.5001 26.2502 26.3788 26.2502 25.0001V14.5301C26.2502 13.8563 25.9877 13.2013 25.5302 12.7313Z"
                fill="#231F20"
              />
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="3"
                y="2"
                width="24"
                height="26"
              >
                <path
                  id="Mask_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.7377 25H20.0002V16.2501C20.0002 15.5588 19.4402 15.0001 18.7502 15.0001H11.2502C10.559 15.0001 10.0002 15.5588 10.0002 16.2501V25H6.25024L6.25774 14.4788L14.9977 5.54005L23.7502 14.5301L23.7377 25ZM12.5002 25.0001H17.5002V17.5001H12.5002V25.0001ZM25.5302 12.7313L15.894 2.87632C15.4227 2.39507 14.5777 2.39507 14.1065 2.87632L4.46899 12.7326C4.01274 13.2013 3.75024 13.8563 3.75024 14.5301V25.0001C3.75024 26.3788 4.80899 27.5001 6.11024 27.5001H11.2502H18.7502H23.889C25.1902 27.5001 26.2502 26.3788 26.2502 25.0001V14.5301C26.2502 13.8563 25.9877 13.2013 25.5302 12.7313Z"
                  fill="white"
                />
              </mask>
            </g>
          </svg>
        </router-link>
      </div>
      <div class="inner">
        <router-link to="/new-project" class="new-project-button">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.75 13.75H16.25V6.25C16.25 5.55875 15.69 5 15 5C14.31 5 13.75 5.55875 13.75 6.25V13.75H6.25C5.56 13.75 5 14.3087 5 15C5 15.6912 5.56 16.25 6.25 16.25H13.75V23.75C13.75 24.4412 14.31 25 15 25C15.69 25 16.25 24.4412 16.25 23.75V16.25H23.75C24.44 16.25 25 15.6912 25 15C25 14.3087 24.44 13.75 23.75 13.75Z"
              fill="white"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="5"
              y="5"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.75 13.75H16.25V6.25C16.25 5.55875 15.69 5 15 5C14.31 5 13.75 5.55875 13.75 6.25V13.75H6.25C5.56 13.75 5 14.3087 5 15C5 15.6912 5.56 16.25 6.25 16.25H13.75V23.75C13.75 24.4412 14.31 25 15 25C15.69 25 16.25 24.4412 16.25 23.75V16.25H23.75C24.44 16.25 25 15.6912 25 15C25 14.3087 24.44 13.75 23.75 13.75Z"
                fill="white"
              />
            </mask>
          </svg>
        </router-link>
      </div>
      <div class="inner">
        <router-link to="/profile">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon/Outline/person">
              <path
                id="Mask"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5 8.75C17.5 7.37125 16.3787 6.25 15 6.25C13.6213 6.25 12.5 7.37125 12.5 8.75C12.5 10.1287 13.6213 11.25 15 11.25C16.3787 11.25 17.5 10.1287 17.5 8.75ZM20 8.75C20 11.5075 17.7575 13.75 15 13.75C12.2425 13.75 10 11.5075 10 8.75C10 5.9925 12.2425 3.75 15 3.75C17.7575 3.75 20 5.9925 20 8.75ZM6.25 25C6.25 20.175 10.1762 16.25 15 16.25C19.8237 16.25 23.75 20.175 23.75 25C23.75 25.69 23.1912 26.25 22.5 26.25C21.8088 26.25 21.25 25.69 21.25 25C21.25 21.5537 18.4462 18.75 15 18.75C11.5538 18.75 8.75 21.5537 8.75 25C8.75 25.69 8.19125 26.25 7.5 26.25C6.80875 26.25 6.25 25.69 6.25 25Z"
                fill="#231F20"
              />
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="6"
                y="3"
                width="18"
                height="24"
              >
                <path
                  id="Mask_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 8.75C17.5 7.37125 16.3787 6.25 15 6.25C13.6213 6.25 12.5 7.37125 12.5 8.75C12.5 10.1287 13.6213 11.25 15 11.25C16.3787 11.25 17.5 10.1287 17.5 8.75ZM20 8.75C20 11.5075 17.7575 13.75 15 13.75C12.2425 13.75 10 11.5075 10 8.75C10 5.9925 12.2425 3.75 15 3.75C17.7575 3.75 20 5.9925 20 8.75ZM6.25 25C6.25 20.175 10.1762 16.25 15 16.25C19.8237 16.25 23.75 20.175 23.75 25C23.75 25.69 23.1912 26.25 22.5 26.25C21.8088 26.25 21.25 25.69 21.25 25C21.25 21.5537 18.4462 18.75 15 18.75C11.5538 18.75 8.75 21.5537 8.75 25C8.75 25.69 8.19125 26.25 7.5 26.25C6.80875 26.25 6.25 25.69 6.25 25Z"
                  fill="white"
                />
              </mask>
            </g>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showSidebarState: false
    };
  },
  methods: {
    toggleSideBar() {
      this.showSidebarState = !this.showSidebarState;
    }
  },
  mounted() {
    this.$root.$on("toggleSideBar", () => {
      this.toggleSideBar();
    });
  }
};
</script>

<style lang="scss">
.main {
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  padding: 71px 0;
  &__content {
    position: relative;
    height: calc(100vh - 144px);
    z-index: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  &__footer {
    display: flex;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    padding: 20px;
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .inner {
      width: calc(100% / 3);
      text-align: center;
      position: relative;
    }
    .new-project-button {
      position: absolute;
      top: -54px;
      left: 50%;
      transform: translateX(-50%);
      background: #149cff;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
