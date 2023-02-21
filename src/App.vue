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

      <draggable class="uncategorizedContainer" :group="{ name: 'myGroup' }">
        <Document
          v-for="document in uncategorizedDocuments"
          :key="document.id"
          :id="document.id"
          :title="document.title"
          :description="document.description"
          :is-required="document.isRequired"
          :tags="document.tags"
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
import Document from "./components/Document.vue";
import SearchBar from "./components/SearchBar.vue";
import draggable from "vuedraggable";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      // dragged_index: null,
      // is_dragging: false,
    };
  },
  components: {
    DocumentCategory,
    SearchBar,
    Document,
    draggable,
  },
  computed: {
    ...mapGetters(["uncategorizedDocuments"]),

    categories: {
      get() {
        return this.$store.state.categories;
      },
      set(value) {
        this.updateCategories(value);
      },
    },
    uncategorizedDocuments: {
      get() {
        return this.$store.state.uncategorizedDocuments;
      },
      set(value) {
        this.updateDocuments(value);
      },
    },
  },
  methods: {
    ...mapActions(["updateCategories"]),
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

// .categoriesContainer {
//   width: 1190px;
// }

.uncategorizedContainer {
  margin-top: 14px;
}

.sortable-ghost {
  // width: 1190px;
  border: 1px solid $blue;
  box-shadow: 0px 3px 16px rgba(0, 102, 255, 0.7);
  // background: $blue;
  // height: 5px;
  // overflow: hidden;
}

.sortable-chosen {
}

.ghost {
  opacity: 0.5;
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
