<template>
  <div>
    <Navbar></Navbar>
    <main class="welcome">
      <div class="content">
        <h1 class="heading-xl">
          Proyektin üçün komanda yoldaşını saniyələr içində tap
        </h1>
        <p>
          Proyektini / İdeyasını həyata keçirə bilməyib çətinlik yaşayan və
          proyekt yoldaşı axtaran fərdlər üçün qlobal portal
        </p>
        <router-link to="/home" class="button-blue-bg button-rounded button-xl"
          >Axtarışa başla</router-link
        >
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbars/Navbar.vue";
export default {
  name: "Welcome",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
.welcome {
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  min-height: calc(100vh - 176px);
  padding: 0;
  display: flex;
  background-image: url("../assets/img/Group.png");
  background-size: 50%;
  background-position-x: 100%;
  background-position-y: calc(100% - 114px);
  background-repeat: no-repeat;
  .content {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 0 100px 150px;
    h1 {
      margin-bottom: 43px;
    }
    p {
      font-size: 24px;
      margin-bottom: 69px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .welcome {
    background-position: 0% 100%;
    background-size: 400px;
    height: calc(100vh - 71px);
    display: block;
    .content {
      padding: 25px;
      width: 100%;
      h1 {
        margin-bottom: 23px;
      }
      p {
        font-size: 17px;
        margin-bottom: 23px;
      }
      .button-xl {
        margin: 0 auto;
        text-align: center;
      }
    }
  }
}
</style>
