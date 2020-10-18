<template>
  <div class="project-card" @click="gotoPreview()">
    <div class="project-card__image">
      <img src="@/assets/img/insomnia.png" alt="" />
    </div>
    <div class="project-card__content">
      <div class="project-card__content--heading">
        <h3 class="heading-l text-blue">
          Bazarda yeni software təmin edən şirkət olan Beasts-in yeni
          texnologiyalara qapı açacaq layihəsi
        </h3>
      </div>
      <p class="project-card__content--description text-m">
        we are startup company which need a lot of mobile Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Cupiditate eligendi pariatur quas!
      </p>
      <div class="project-card__content--footer">
        <p class="text-m"><span class="heading-l">124</span> baxış</p>
        <div class="date">
          <h6>Development-</h6>
          <p class="heading-m">01-10-2020</p>
        </div>
      </div>
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
