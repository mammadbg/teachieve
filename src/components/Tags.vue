<template>
  <div class="filtering-tags">
    <span
      class="chip"
      v-for="(tag, index) in tags"
      :key="index + 9898"
      :class="{ 'chip-blue': tag.selected }"
      >#{{ tag.name }}</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: "tələbə", value: 1, selected: true },
        { name: "şagird", value: 2, selected: false },
        { name: "iş", value: 3, selected: false },
        { name: "yeni", value: 4, selected: false },
        { name: "müəllim", value: 5, selected: false },
        { name: "direktor", value: 6, selected: false },
        { name: "şagird", value: 2, selected: false },
        { name: "iş", value: 3, selected: false },
        { name: "yeni", value: 4, selected: false },
        { name: "müəllim", value: 5, selected: false },
        { name: "direktor", value: 6, selected: false }
      ]
    };
  }
};
</script>

<style></style>
