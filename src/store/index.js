import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    totalVehicles: 0,
    cars: [],
    currentPage: 1,
    perPage: 9,
    totalPages: 1,
    isLoading: false,
  },
  mutations: {
    SET_CARS(state, cars) {
      state.cars = cars;
    },
    SET_TOTAL_VEHICLES(state, total) {
      state.totalVehicles = total;
    },
    SET_TOTAL_PAGES(state, totalPages) {
      state.totalPages = totalPages;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    async fetchData({ commit, state }, queryParams = "") {
      commit("SET_LOADING", true);
      try {
        const response = await axios.get(
          `https://api.caiman-app.de/api/cars-test?per_page=${state.perPage}&page=${state.currentPage}${queryParams}`
        );
        const total = response.data.meta.total;
        commit("SET_TOTAL_VEHICLES", total);
        commit("SET_CARS", response.data.data);
        commit("SET_TOTAL_PAGES", Math.ceil(total / state.perPage));
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async fetchCars({ dispatch }) {
      dispatch("fetchData");
    },

    async searchByVin({ dispatch }, vin) {
      const queryParams = `&search=${vin}`;
      dispatch("fetchData", queryParams);
    },

    setCurrentPage({ commit, dispatch }, page) {
      commit("SET_CURRENT_PAGE", page);
      dispatch("fetchCars");
    },
  },
  getters: {
    cars: (state) => state.cars,
    totalVehicles: (state) => state.totalVehicles,
    currentPage: (state) => state.currentPage,
    totalPages: (state) => state.totalPages,
    isLoading: (state) => state.isLoading,
  },
});
