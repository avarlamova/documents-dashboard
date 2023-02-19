<template>
  <div class="tag"></div>
</template>

<script>
export default {
  name: "Tag",
  data() {
    return {
      //   color: "yellow",
    };
  },
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.tag {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: v-bind(color);
}
</style>
