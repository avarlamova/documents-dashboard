<template>
  <section>
    <div class="catContainer" @click="toggleCategory">
      <!-- <img :src="require(`${iconSrc}`)" alt="icon image" /> -->
      <img
        v-if="isExpanded"
        src="../assets/icons/icon-expanded.svg"
        alt="icon image"
        class="expandedIcon"
      />
      <img
        v-else
        src="../assets/icons/icon-closed.svg"
        alt="icon image"
        class="expandedIcon"
      />
      <h2>{{ title }}</h2>

      <div v-if="tags" class="tagsContainer">
        <Tag v-for="tag in tags" :key="tag.color" :color="tag.color" />
      </div>

      <span class="description">{{ description }}</span>
      <div class="overlayDiv"></div>

      <div class="iconsContainer">
        <img src="../assets/icons/edit.svg" alt="edit cat" class="edit" />
        <img
          src="../assets/icons/delete.svg"
          alt="delete cat"
          :class="[isExpanded ? 'blocked' : 'delete']"
        />
        <img src="../assets/icons/move.svg" alt="move cat" class="move" />
      </div>
      <!-- <div class="overlayDiv"></div> -->
    </div>
    <!-- TODO remove! -->
    <ul v-if="false">
      <li v-for="document in documents" :key="document.id">
        <Document
          :id="document.id"
          :title="document.title"
          :description="document.description"
          :is-required="document.isRequired"
          :tags="document.tags"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import Tag from "./UI/Tag.vue";
import Document from "./Document.vue";

export default {
  name: "DocumentGroup",
  data() {
    return {
      isExpanded: false,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    defaultExpanded: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    tags: [],
    // documents: [],
  },
  computed: {
    documents: {
      get() {
        return this.$store.getters.getDocuments(this.id);
      },
      set(value) {
        this.$store.commit("updateList", value);
      },
    },
  },
  methods: {
    toggleCategory() {
      this.isExpanded = !this.isExpanded;
    },
  },
  beforeMount() {
    this.isExpanded = this.defaultExpanded;
  },
  watch: {
    drag() {
      console.log(this.drag);
    },
  },
  components: {
    Tag,
    Document,
  },
};
</script>

<style lang="scss">
.catContainer {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 1155px;
  max-height: 28px;
  background: #ffffff;
  border: 1px solid #dfe4ef;
  padding: 13px 17px 13px 16px;
}

.expandedIcon {
  margin-right: 14px;
}

.tagsContainer {
  display: flex;
  gap: 6px;
  margin-right: 15px;
}
h2 {
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  color: #000000;
  margin-right: 16px;
  white-space: nowrap;
}

.description {
  font-weight: 400;
  font-size: 11px;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  height: 12px;
  line-height: 12px;
  color: #8e9cbb;
}

.overlayDiv {
  position: absolute;
  right: 0px;
  width: 147px;
  height: 14px;
  // background: red;
  background: linear-gradient(270deg, #fff 84%, rgba(255, 255, 255, 0) 100%);
}

.ghost {
  // background-color: #0066ff;
  // height: 5px;
  // box-shadow: 0px 3px 16px rgba(0, 102, 255, 0.7);
  opacity: 0.5;
  background: #c8ebfb;
}
.chosen {
  /* transform: rotate(5deg); */
  background-color: green;
  & .container {
    border: 1px solid #dfe4ef;

    box-shadow: 0px 3px 16px rgba(0, 102, 255, 0.7);
  }
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

.blocked {
  opacity: 0.5;
  cursor: default;
}
</style>
