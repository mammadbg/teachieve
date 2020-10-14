<template>
  <router-link to="/" class="fyt-logo" :class="{ twelve: size == '12px' }"
    >Find<span>Your</span>teammates</router-link
  >
</template>

<script>
export default {
  name: "Logo",
  props: {
    size: String
  }
};
</script>

<style lang="scss" scoped>
.fyt-logo {
  text-transform: uppercase;
  display: inline;
  font: 24px m-bold;
  color: #149cff !important;
  span {
    color: #000 !important;
  }
  &:focus,
  &:active,
  &:hover {
    outline: none;
    text-decoration: none;
  }
}
.twelve {
  font-size: 12px !important;
  span {
    font-size: 12px;
  }
}
</style>
