<template>
  <main class="signin__main">
    <div class="input-group-gray-outlined">
      <input placeholder="E-mail" type="email" />
    </div>
    <div class="signin__main--footer">
      <div class="pagination-dots">
        <span class="dot blue-bg"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <button class="button-blue-bg-rounded" @click="submitEmail()">
        Davam et
      </button>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    submitEmail() {
      this.$router.push("/enterOtp");
    }
  }
};
</script>

<style></style>
