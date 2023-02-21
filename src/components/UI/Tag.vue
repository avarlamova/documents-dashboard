<template>
  <div class="tag" :class="color"></div>
</template>

<script>
export default {
  name: "Tag",
  data() {
    return {};
  },
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.tag {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  //   background-color: v-bind(color);
}

.orange {
  background-color: $orange;
}

.lightblue {
  background-color: $lightblue;
}

.yellow {
  background-color: $yellow;
}

.pink {
  background-color: $pink;
}

.gray {
  background-color: $gray;
}

.blue {
  background-color: $blue;
}
</style>
