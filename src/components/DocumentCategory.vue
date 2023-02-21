<template>
  <section>
    <div class="catContainer" @click="toggleCategory">
      <div class="innerContainer">
        <img
          v-if="isExpanded"
          src="../assets/icons/icon-expanded.svg"
          alt="icon image"
          class="icon"
        />
        <img
          v-else
          src="../assets/icons/icon-closed.svg"
          alt="icon image"
          class="icon"
        />
        <h2>{{ title }}</h2>

        <div v-if="tags && tags.length > 0" class="tagsContainer">
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
          <drag-icon />
        </div>
      </div>
    </div>
    <!-- <DocumentsList :items="documents"/> -->
    <div
      class="documents"
      v-if="documents && documents.length > 0 && isExpanded"
    >
      <draggable v-model="updatedDocs" :group="{ name: 'documents' }">
        <Document
          v-for="document in documents"
          :key="document.id"
          :id="document.id"
          :title="document.title"
          :description="document.description"
          :is-required="document.isRequired"
          :tags="document.tags"
        />
      </draggable>
    </div>
  </section>
</template>

<script>
import Tag from "./UI/Tag.vue";
import draggable from "vuedraggable";
import Document from "./Document";

import DragIcon from "./UI/DragIcon.vue";
import { mapActions } from "vuex";

export default {
  name: "DocumentGroup",
  data() {
    return {
      isExpanded: false,
      updatedDocs: [],
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
    documents: [],
  },
  methods: {
    toggleCategory() {
      this.isExpanded = !this.isExpanded;
    },

    ...mapActions(["updateDocuments"]),
  },
  watch: {
    updatedDocs(newVal) {
      if (newVal) {
        this.updateDocuments({ id: this.id, value: newVal });
      }
    },
  },
  created() {
    this.isExpanded = this.defaultExpanded;
    this.updatedDocs = this.documents;
  },

  components: {
    Tag,
    draggable,
    Document,
    DragIcon,
  },
};
</script>

<style lang="scss">
.catContainer {
  position: relative;
  cursor: pointer;
  width: 1155px;
  max-height: 28px;
  margin-top: -1px;
  background: #ffffff;
  border: 1px solid #dfe4ef;
  padding: 13px 17px 13px 16px;
}

.innerContainer {
  display: flex;
  align-items: center;
}

// section {
//   & .ghost {
//     background-color: red;
//   }
// }

.icon {
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
  // opacity: 0.2;
  // background: #c8ebfb;

  // & > div {
  //   visibility: hidden;
  // }

  // &::after {
  //   content: "";
  //   opacity: 1 !important;
  //   height: 5px;
  //   width: 1160px;
  //   position: absolute;
  //   background: #0066ff;
  // }
}
// .drag {
//   & .catContainer {
//     border: 1px solid #dfe4ef;
//     box-shadow: 0px 3px 16px rgba(0, 102, 255, 0.7);
//   }
// }

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

.document {
  display: block;
  margin-top: -1px;
}

//   & :last-child {
//     border: 2px solid red;
//   }
.blocked {
  opacity: 0.5;
  cursor: default;
}
</style>
