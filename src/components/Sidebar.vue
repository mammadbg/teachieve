<template>
  <aside class="sidebar" :class="{ show: showSidebarState }">
    <div class="sidebar__section" @click="showSidebarState = false">
      <router-link class="heading-xl" to="/sponsors">Sponsorlar</router-link>
    </div>
    <div class="sidebar__section" @click="showSidebarState = false">
      <router-link class="heading-xl" to="/about">Biz kimik?</router-link>
    </div>
    <div class="sidebar__section" @click="showSidebarState = false">
      <router-link class="heading-xl" to="/contact">Əlaqə</router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      showSidebarState: false
    };
  },
  methods: {
    toggleSideBar() {
      this.showSidebarState = !this.showSidebarState;
      console.log("sidebar toggled 2");
    }
  },
  mounted() {
    this.$root.$on("toggleSideBar", () => {
      this.toggleSideBar();
    });
  }
};
</script>

<style></style>
