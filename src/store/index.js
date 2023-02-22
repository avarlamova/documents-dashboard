import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    categories: [
      {
        id: 2,
        title: "Обязательные для трудоустройства",
        description:
          "Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от гражданства",
        isExpandedByDefault: false,
        documents: [
          {
            categoryId: 2,
            id: 9,
            title: "Обязательный для трудоустройства документ",
            isRequired: true,
          },
        ],
      },
      {
        id: 1,
        title: "Обязательные для всех",
        isExpandedByDefault: true,
        description:
          "Документы, обязательные для всех сотрудников без исключения",
        tags: [{ color: "pink" }, { color: "yellow" }, { color: "orange" }],
        documents: [
          {
            categoryId: 1,
            id: 4,
            title: "Паспорт",
            tags: [{ color: "lightblue" }],
            isRequired: true,
            description: "Для всех",
          },
          {
            categoryId: 1,
            id: 5,
            title: "ИНН",
            isRequired: true,
            description: "Для всех",
          },
        ],
      },
      {
        id: 3,
        title: "Специальные",
        isExpandedByDefault: false,
        documents: [
          {
            categoryId: 3,
            id: 10,
            title: "Специальный документ",
            isRequired: true,
          },
        ],
      },
    ],
    uncategorizedDocuments: [
      {
        id: 6,
        title: "Тестовое задание кандидата",
        isRequired: false,
        description: "Для всех",
      },
      {
        id: 7,
        title: "Трудовой договор",
        tags: [{ color: "blue" }, { color: "gray" }],
        isRequired: false,
        description:
          "Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха",
      },
      {
        id: 8,
        title: "Мед.книжка",
        isRequired: false,
      },
    ],
    searchQuery: "",
  },
  getters: {
    getCategories: (state) => {
      const filteredCategories = state.categories
        .map((category) => {
          if (
            category.title
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase())
          )
            return category;
          else if (
            category.documents.some((document) =>
              document.title
                .toLowerCase()
                .includes(state.searchQuery.toLowerCase())
            )
          ) {
            const newDocuments = category.documents.filter((document) =>
              document.title
                .toLowerCase()
                .includes(state.searchQuery.toLowerCase())
            );
            return { ...category, documents: newDocuments };
          }
        })
        .filter(Boolean);
      return filteredCategories;
    },
    getUncategorizedDocuments: (state) => {
      return state.uncategorizedDocuments.filter((document) =>
        document.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    searchQuery: (state) => {
      return state.searchQuery;
    },
    hasSearchQuery: (state) => {
      return Boolean(state.searchQuery);
    },
  },
  mutations: {
    SET_SEARCH_QUERY(state, payload) {
      state.searchQuery = payload;
    },
    UPDATE_CATEGORIES(state, payload) {
      state.categories = payload;
    },
    ADD_DOCUMENT(state, payload) {
      const { id, newItem, index } = payload;
      const targetCategory = state.categories.find((cat) => cat.id == id);
      if (targetCategory) {
        targetCategory.documents.splice(index, 0, newItem);
      } else {
        state.uncategorizedDocuments.splice(index, 0, newItem);
      }
    },
    REMOVE_DOCUMENT(state, payload) {
      const { id, index } = payload;
      const targetCategory = state.categories.find((cat) => cat.id == id);
      if (targetCategory) {
        targetCategory.documents.splice(index, 1);
      } else {
        state.uncategorizedDocuments.splice(index, 1);
      }
    },
  },
  actions: {
    setQuery({ commit }, payload) {
      commit("SET_SEARCH_QUERY", payload);
    },
    updateCategories({ commit }, payload) {
      commit("UPDATE_CATEGORIES", payload);
    },
    addDocument({ commit }, payload) {
      commit("ADD_DOCUMENT", payload);
    },
    removeDocument({ commit }, payload) {
      commit("REMOVE_DOCUMENT", payload);
    },
  },
});

export default store;
