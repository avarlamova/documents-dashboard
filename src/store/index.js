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
      },
      {
        id: 1,
        title: "Обязательные для всех",
        isExpandedByDefault: true,
        description:
          "Документы, обязательные для всех сотрудников без исключения",
        tags: [{ color: "pink" }, { color: "yellow" }, { color: "orange" }],
      },
      {
        id: 3,
        title: "Специальные",
        isExpandedByDefault: false,
      },
    ],
    documents: [
      {
        categoryId: 1,
        id: 4,
        title: "Паспорт",
        tags: [{ color: "lightBlue" }],
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
    getDocuments: (state) => (categoryId) => {
      return state.documents.filter((doc) => doc.categoryId === categoryId);
    },
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
  },
  actions: {
    setQuery({ commit }, payload) {
      console.log(payload);
      commit("SET_SEARCH_QUERY", payload);
    },
  },
});

export default store;
