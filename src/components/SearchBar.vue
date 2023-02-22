<template>
  <div class="container">
    <img class="searchIcon" src="../assets/icons/search.svg" alt="search" />
    <input type="text" v-model="searchQuery" placeholder="Поиск" />
    <img
      @click="resetQuery"
      v-if="searchQuery.length > 0"
      src="../assets/icons/close.svg"
      class="deleteIcon"
      alt="delete query"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {};
  },
  props: {
    description: {
      type: String,
    },
    tags: [],
    // documents: [],
  },
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(value) {
        this.setQuery(value);
      },
    },
  },
  methods: {
    ...mapActions(["setQuery"]),
    resetQuery() {
      this.setQuery("");
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 564px;
  height: 17px;
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 1px solid #bfc9e0;
  margin-bottom: 19px;
  margin-top: 23px;
  padding-bottom: 12px;

  input:focus {
    outline: none;
  }

  &:has(input:focus) {
    border-bottom: 1px solid #0066ff;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    color: #8e9cbb;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    color: #8e9cbb;
  }

  ::-ms-input-placeholder {
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    color: #8e9cbb;
  }
}
.searchIcon {
  width: 14px;
  height: 14px;
  margin-right: 12px;
}

.deleteIcon {
  cursor: pointer;
  position: absolute;
  right: 0px;
}
input {
  padding: 0;
  margin: 0;
  border: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  width: 500px;
}
</style>
