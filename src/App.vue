<template>
  <div id="app">
    <h1>Документы</h1>
    <SearchBar />
    <div v-for="category in categories" :key="category.id">
      <draggable
        group="people"
        @start="drag = true"
        @end="drag = false"
        ghost-class="ghost"
        drag-class="drag"
      >
        <!-- <transition-group type="transition" name="flip-list"> -->

        <DocumentCategory
          :key="category.id"
          :title="category.title"
          :default-expanded="category.isExpandedByDefault"
          :description="category.description"
          :tags="category.tags"
          :id="category.id"
        />
        <!-- </transition-group> -->
      </draggable>
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
      // categories:
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
};
</script>

<style>
#app {
  font-family: "Fira Sans", sans-serif;
  margin-left: 30px;
  margin-top: 38px;
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
</style>
