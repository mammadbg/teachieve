<template>
  <div class="profile">
    <div class="container">
      <div class="profile__about">
        <h1 class="heading-xl">Profil haqqında</h1>
        <div class="profile__about--info">
          <h3 class="heading-l text-blue">Ayxan Əlifov</h3>
          <p class="text-l">28.12.20 tarixində qoşulub</p>
        </div>
        <div class="profile__about--image">
          <img src="@/assets/img/userMale.jpg" alt="" />
        </div>
        <p class="profile__about--bio text-l">
          Mən Mobile Android developer olaraq 2 ildir ki, fəaliyyət göstərirəm.
          Müxtəlif texnologiya şirkətlərdə komanda daxilində yer almış və müasir
          texnologiyaları dərindən öyrənmişəm.
        </p>
        <h5 class="heading-l">Bacarıqlarım:</h5>
        <ul class="profile__about--skills">
          <li class="text-l">Java proqramlaşdırma</li>
          <li class="text-l">Kotlin proqramlaşdırma</li>
          <li class="text-l">MVP və MVVM design pattern</li>
          <li class="text-l">Google servisləri</li>
          <li class="text-l">Android Jetpack library-si</li>
          <li class="text-l">REST API</li>
        </ul>
      </div>
      <Tags></Tags>
      <div class="projects__content">
        <ProjectCard v-for="(x, i) in 6" :key="i"></ProjectCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/Cards/Project";
import Tags from "@/components/Tags";
export default {
  name: "Home",
  components: {
    ProjectCard,
    Tags
  }
};
</script>

<style scoped>
.projects__content {
  padding: 5px 23px;
}
</style>
