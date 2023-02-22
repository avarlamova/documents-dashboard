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

      <draggable
        v-model="categories"
        animation="150"
        class="categoriesContainer"
        handle=".handle"
      >
        <DocumentCategory
          v-for="category in categories"
          :key="category.id"
          :title="category.title"
          :default-expanded="category.isExpandedByDefault"
          :description="category.description"
          :tags="category.tags"
          :documents="category.documents"
          :id="category.id"
        />
      </draggable>
      <DocumentsList
        class="uncategorizedContainer"
        :items="uncategorizedDocuments"
      />
    </div>
  </div>
</template>

<script>
import DocumentCategory from "./components/DocumentCategory.vue";
import DocumentsList from "./components/DocumentsList.vue";
import SearchBar from "./components/SearchBar.vue";
import draggable from "vuedraggable";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    DocumentCategory,
    SearchBar,
    DocumentsList,
    draggable,
  },
  computed: {
    ...mapGetters(["uncategorizedDocuments", "getCategories"]),

    categories: {
      get() {
        return this.getCategories;
      },
      set(value) {
        this.updateCategories(value);
      },
    },
    uncategorizedDocuments: {
      get() {
        return this.$store.state.uncategorizedDocuments;
      },
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Fira Sans", sans-serif;
  background-color: grey;
  position: relative;
}
h1 {
  font-weight: 500;
  margin: 0 !important;
  font-size: 22px !important;
  line-height: 24px;
  color: #000000;
}

.wrapper {
  position: relative;
  background-color: white;
  height: 100vh;
  margin: 0 auto;
  padding: 38px 30px;
  width: 1190px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.item-dropzone-area {
  height: 2rem;
  background: red;
  opacity: 0.8;
  animation-duration: 0.5s;
  animation-name: nodeInserted;
}
.uncategorizedContainer {
  margin-top: 14px;
}

.sortable-ghost {
  opacity: 0.5;
}

.sortable-chosen {
  box-shadow: 0px 3px 16px rgba(0, 102, 255, 0.7);
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
