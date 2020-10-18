<template>
  <div class="main">
    <navbar></navbar>
    <div class="main__content">
      <Sidebar></Sidebar>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Footer,
    Sidebar
  },
  data() {
    return {};
  }
};
</script>
