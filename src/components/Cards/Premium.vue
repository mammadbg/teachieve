<template>
  <div class="premium-card">
    <div class="premium-card__image">
      <img src="@/assets/img/hero.png" alt="" />
    </div>

    <div class="premium-card__content">
      <div class="premium-card__content--heading">
        <p class="heading-l" @click="gotoPreview()">{{ item.title }}</p>
        <p class="text-m">
          <span class="heading-l">{{ item.viewCount }}</span> baxış
        </p>
      </div>
      <div class="premium-card__content--description text-m">
        {{ item.description }}
      </div>
      <div class="premium-card__content--footer">
        <p class="heading-m">{{ item.category }} -</p>
        <p class="heading-m">{{ item.date }}</p>
      </div>
      <userChip :item="item.createdBy"></userChip>
    </div>
  </div>
</template>

<script>
import userChip from "@/components/UserChip";
export default {
  components: {
    userChip
  },
  data() {
    return {};
  },
  methods: {
    gotoPreview() {
      this.$router.push("/project/1");
    }
  },
  props: {
    item: Object
  }
};
</script>
