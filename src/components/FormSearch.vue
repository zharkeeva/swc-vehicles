<template>
  <form class="search-form" @submit.prevent="submitSearch">
    <input v-model="search" type="text" placeholder="Search VIN" />
    <button type="submit" class="search-form__icon">
      <img src="@/assets/svg/search.svg" alt="Search" />
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const search = ref("");
const store = useStore();

const submitSearch = () => {
  store.dispatch("searchByVin", search.value);
};
</script>

<style lang="scss" scoped>
.search-form {
  position: relative;
  width: 354px;
  height: 42px;
  border-radius: 8px;
  border: solid $border-color 1px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    padding: 9px 16px;
    border: none;
    outline: none;
    border-radius: 8px;
    color: $font-color;
    background-color: $primary-color01;
  }

  .search-form__icon {
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
