<template>
  <div class="documents">
    <!-- <draggable
      class="list-group"
      v-model="list"
      v-bind="dragOptions"
      @start="isDrag = true"
      @end="isDrag = false"
      handle=".draggable-item-area"
    > -->
    <draggable tag="ul" :group="{ name: 'documents' }">
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

export default {
  name: "DocumentsList",
  props: {
    items: {
      required: true,
    },
  },
  components: {
    draggable,
    Document,
  },
};
</script>

<style></style>
