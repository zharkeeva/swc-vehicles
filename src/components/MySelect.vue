<template>
  <div class="select-wrapper">
    <label class="select-label">Select vehicles per page:</label>
    <div class="select-container">
      <span class="select-number">{{ currentPage }}</span>
      <img
        src="@/assets/svg/chevron-down.svg"
        alt="Dropdown"
        class="select-chevron"
      />
      <select v-model="selectedPage" @change="selectPage">
        <option v-for="page in totalPages" :key="page" :value="page">
          {{ page }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const currentPage = computed(() => store.getters.currentPage);
const totalPages = computed(() => store.getters.totalPages);

const selectedPage = ref(currentPage.value);

const selectPage = () => {
  store.dispatch("setCurrentPage", selectedPage.value);
};
</script>

<style scoped lang="scss">
.select-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: -21%;
}

.select-label {
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: $font-color;
}

.select-container {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid $border-color;
  border-radius: 8px;
  padding: 0 12px;
  width: 85px;
  height: 42px;
  background-color: $primary-color01;
  cursor: pointer;
}

.select-number {
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: $font-color;
}

.select-chevron {
  position: absolute;
  right: 12px;
  width: 24px;
  height: 24px;
  opacity: 45%;
}

select {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
