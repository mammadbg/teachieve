<template>
  <div class="premium-card" @click="gotoPreview()">
    <div class="premium-card__image">
      <img src="../../assets/img/Rectangle.png" alt="" />
    </div>

    <div class="premium-card__heading">
      <p class="heading-l text-blue">Innput stratup</p>
      <p class="text-m"><span class="heading-l">3331</span> baxış</p>
    </div>
    <p class="premium-card__description text-m">
      we are startup company which need a lot of mobile
    </p>
    <div class="premium-card__footer">
      <p class="heading-m">01-01-2021</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoPreview() {
      this.$router.push("/project/1");
    }
  }
};
</script>

<style></style>
