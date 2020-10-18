<template>
  <div class="user-chip" @click="goToProfile()">
    <div class="image">
      <img src="@/assets/img/userMale.jpg" alt="" />
    </div>
    <div class="content">
      <h6 class="heading-l">{{ item.name }}</h6>
      <p class="text-l">{{ item.about }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToProfile() {
      this.$router.push("/profile/1");
    }
  },
  props: {
    item: Object
  }
};
</script>

<style></style>
