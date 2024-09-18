<template>
  <header class="my-header">
    <div class="my-header__left">
      <h1>Vehicles</h1>
      <span class="my-header__badge numbers">{{ totalVehicles }}</span>
    </div>
    <div class="my-header__right">
      <button class="my-header__btn-add" @click="addVehicle">
        <img src="@/assets/svg/button-plus.svg" alt="Add Vehicle" />
      </button>
      <div class="my-header__user-info">
        <img
          class="my-header__user-avatar"
          src="@/assets/png/user.png"
          alt="User Avatar"
        />
        <span class="my-header__user-name">John Doe</span>
      </div>
      <MyLanguage />
    </div>
    <div class="my-header__line"></div>
  </header>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import MyLanguage from "@/components/MyLanguage.vue";

const store = useStore();

const totalVehicles = computed(() => store.getters.totalVehicles);

const addVehicle = () => {
  console.log("Add vehicle");
};
</script>

<style scoped lang="scss">
.my-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1184px;
  height: 100px;
  background-color: $primary-color01;
  position: relative;
  margin-bottom: 30px;
}

.my-header__left {
  display: flex;
  align-items: center;

  h1 {
    font-family: "DM Sans", sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    margin-right: 20px;
  }

  .my-header__badge {
    width: 56px;
    height: 30px;
    border-radius: 6px;
    background-color: $primary-color02;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $font-color-dark;
  }
}

.my-header__right {
  display: flex;
  align-items: center;

  .my-header__btn-add {
    margin-right: 35px;
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 42px;
      height: 42px;
    }

    &:hover img {
      content: url("@/assets/svg/hover-button-plus.svg");
    }
  }

  .my-header__user-info {
    display: flex;
    align-items: center;
    margin-right: 20px;

    .my-header__user-avatar {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .my-header__user-name {
      font-family: "DM Sans", sans-serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 22px;
      color: $font-color;
      margin-right: 20px;
    }
  }

  .my-header__language {
    font-family: "DM Sans", sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    color: $primary-color01;
    cursor: pointer;
  }
}

.my-header__line {
  position: absolute;
  bottom: -1px;
  left: -30px;
  width: 1184px;
  height: 1px;
  border-bottom: 1px solid $border-color;
}
</style>
