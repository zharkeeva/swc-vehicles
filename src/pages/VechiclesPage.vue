<template>
  <div class="vechicles-page">
    <div v-if="isScreenSmall" class="screen-warning">
      This application is intended for 1440px width
    </div>

    <div v-if="isLoading" class="loader">LOADING...</div>

    <Sidenav />
    <div class="content">
      <Header />
      <div class="content__control">
        <SearchForm />
        <Select />
        <Button />
      </div>
      <Cards />
    </div>
  </div>
</template>

<script setup>
import Sidenav from "@/components/MySidenav.vue";
import Header from "@/components/MyHeader.vue";
import SearchForm from "@/components/FormSearch.vue";
import Cards from "@/components/MyCards.vue";
import Select from "@/components/MySelect.vue";
import Button from "@/components/MyButton.vue";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = computed(() => store.getters.isLoading);
const isScreenSmall = ref(false);

const checkScreenSize = () => {
  isScreenSmall.value = window.innerWidth < 1440;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<style lang="scss" scoped>
.vechicles-page {
  max-width: 1440px;
  max-height: 1386px;
  margin: 0 auto;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.loader {
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary-color01;
  z-index: 10;
  font-size: 36px;
  font-weight: 700;
  color: $font-color;
}

.content {
  padding: 0 30px;
}

.content__control {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.screen-warning {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  font-size: 24px;
  font-weight: 700;
  color: white;
}
</style>
