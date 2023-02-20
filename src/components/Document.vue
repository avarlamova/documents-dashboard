<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <div class="tagsContainer" v-for="tag in tags" :key="tag.color">
      <Tag :color="tag.color" />
    </div>
    <span v-if="isRequired" class="required">Обязательный</span>
    <span class="description">{{ description }}</span>
    <div class="iconsContainer">
      <img src="../assets/icons/edit.svg" alt="edit cat" class="edit" />
      <img src="../assets/icons/delete.svg" alt="delete cat" />
      <img src="../assets/icons/move.svg" alt="move cat" class="move" />
    </div>
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

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  align-items: center;
  width: 1147px;
  height: 22px;
  margin-left: 16px;
  padding: 9px 10px 11px 15px;
  border: 1px solid #dfe4ef;
}

.tagsContainer {
  display: flex;
  /* как в категории */
  gap: 8px;
  margin-right: 15px;
}

h3 {
  font-weight: 400;
  font-size: 13px;
  line-height: 14px;
  color: #000000;
  margin-right: 13px;
}

.required {
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: #ff238d;
  margin-right: 15px;
}
.description {
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: #8e9cbb;
}

.iconsContainer {
  position: absolute;
  z-index: 10;
  right: 17px;
  display: flex;
  align-items: center;
  gap: 22px;

  & svg {
    cursor: pointer;
  }
}
</style>
