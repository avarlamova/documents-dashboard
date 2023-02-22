<template>
  <div class="documents">
    <draggable
      tag="ul"
      :group="{ name: 'documents' }"
      v-model="updatedItems"
      @change="changed"
      handle=".handle"
    >
      <Document
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :is-required="item.isRequired"
        :tags="item.tags"
      />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Document from "./Document";
import { mapActions } from "vuex";

export default {
  name: "DocumentsList",
  data() {
    return {
      updatedItems: [],
    };
  },
  props: {
    items: {
      required: true,
    },
    id: {
      type: Number,
    },
  },
  components: {
    draggable,
    Document,
  },
  methods: {
    changed(item) {
      if (item.added) {
        this.addDocument({
          newItem: item.added.element,
          id: this.id,
          index: item.added.newIndex,
        });
      } else if (item.removed) {
        this.removeDocument({
          id: this.id,
          index: item.removed.oldIndex,
        });
      } else if (item.moved) {
        this.moveDocument({
          id: this.id,
          oldIndex: item.moved.oldIndex,
          newIndex: item.moved.newIndex,
          movedItem: item.moved.element,
        });
      }
    },
    ...mapActions(["addDocument", "removeDocument", "moveDocument"]),
  },
  created() {
    this.updatedItems = this.items;
  },
};
</script>

<style></style>
