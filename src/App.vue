<template>
  <div id="app">
    <div class="wrapper">
      <h1>Документы</h1>
      <div class="btnsContainer">
        <button class="bookmark">
          <img src="./assets/icons/bookmark.svg" alt="Bookmark" />
        </button>
        <button class="addNew">
          <img src="./assets/icons/plus.svg" alt="add new" />
          Новый тип
        </button>
        <button class="addNew">
          <img src="./assets/icons/plus.svg" alt="add new" />
          Новый документ
        </button>
      </div>
      <SearchBar />

      <draggable animation="150" class="categoriesContainer">
        <DocumentCategory
          v-for="category in categories"
          :key="category.id"
          :title="category.title"
          :default-expanded="category.isExpandedByDefault"
          :description="category.description"
          :tags="category.tags"
          :id="category.id"
        />
      </draggable>

      <!-- <div class="testcont">
      <draggable animation="150">
        <DocumentCategory id="46" :title="t4tle" />
        <DocumentCategory id="4" :title="ttle" />
      </draggable>
    </div> -->
    </div>
  </div>
</template>

<script>
import DocumentCategory from "./components/DocumentCategory.vue";
import SearchBar from "./components/SearchBar.vue";
import draggable from "vuedraggable";

import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      dragged_index: null,
      is_dragging: false,
    };
  },
  components: {
    DocumentCategory,
    SearchBar,
    draggable,
  },
  computed: {
    ...mapGetters(["categories"]),
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: "Fira Sans", sans-serif;
  background-color: grey;
}

.wrapper {
  position: relative;

  background-color: white;
  height: 100vh;
  // margin-left: 30px;
  // margin-top: 38px;
  margin: 0 auto;
  padding: 38px 30px;
  width: 1190px;
}

h1 {
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  color: #000000;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.categoriesContainer {
  width: 1190px;
  &:last-child {
    border-bottom: 1px solid #dfe4ef;
  }
}

.sortable-ghost {
  width: 1190px;
  border: 1px solid blue;
  background: blue;
  height: 5px;
  overflow: hidden;
}
.btnsContainer {
  position: absolute;
  right: 30px;
  top: 38px;
  display: flex;
  align-items: center;
  gap: 10px;

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #d3d8df;
    border-radius: 50px;
    height: 30px;
    background-color: #fff;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;
  }
}

.addNew {
  padding: 8px 20px 9px 10px;
  & img {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
  & span {
    display: block;
  }
}

.bookmark {
  width: 30px;
  padding: 9px 10px;
  border: 1px solid #d3d8df;
}
</style>
