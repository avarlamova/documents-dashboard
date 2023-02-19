<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <div v-for="tag in tags" :key="tag.color">
      <Tag :color="tag.color" />
    </div>
    <span v-if="isRequired" class="required">Обязательный</span>
    <span class="description">{{ description }}</span>
  </div>
</template>

<script>
import Tag from "./UI/Tag.vue";

export default {
  name: "Document",
  data() {
    return {};
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: Number,
    },
    title: {
      type: String,
      required: true,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    tags: [],
    // documents: [],
  },
  components: {
    Tag,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 1174px;
  height: 22px;
  margin-left: 16px;
  padding: 9px 10px 11px 15px;
}

h3 {
  font-weight: 400;
  font-size: 13px;
  line-height: 14px;
  color: #000000;
}
.description {
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: #8e9cbb;
}

.required {
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: #ff238d;
}
</style>
