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
            title: "Cat2",
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
            title: "Cat3",
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
    searchQuery: "док",
  },
  getters: {
    categories: (state) => {
      return state.categories;
    },
    uncategorizedDocuments: (state) => {
      return state.uncategorizedDocuments;
    },
    getDocuments: (state) => (categoryId) => {
      return state.documents.filter((doc) => doc.categoryId === categoryId);
    },
    // uncategorizedDocuments: (state) => {
    //   return state.documents.filter((doc) => !doc.categoryId);
    // },
    getSearchedCategories: (state) => {
      return state.documents;
    },
    getSearchedDocuments: (state) => {
      if (state.searchQuery) {
        return state.documents.filter(
          (doc) => doc.indexOf(state.searchQuery.toLowerCase()) > 0
        );
      }
      return state.documents;
    },
  },
  mutations: {
    SET_SEARCH_QUERY(state, payload) {
      state.searchQuery = payload;
    },
    UPDATE_CATEGORIES(state, payload) {
      state.categories = payload;
    },
    UPDATE_DOCUMENTS(state, payload) {
      const { id, value } = payload;
      console.log(id, value);
      const targetCategory = state.categories.find((cat) => cat.id == id);
      targetCategory.documents = value;
    },
  },
  actions: {
    setQuery({ commit }, payload) {
      commit("SET_SEARCH_QUERY", payload);
    },
    updateCategories({ commit }, payload) {
      commit("UPDATE_CATEGORIES", payload);
    },
    updateDocuments({ commit }, payload) {
      commit("UPDATE_DOCUMENTS", payload);
    },
  },
});

export default store;
