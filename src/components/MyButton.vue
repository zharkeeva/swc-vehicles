<template>
  <button class="add-vehicle-btn">
    <img src="@/assets/svg/plus.svg" alt="Add" class="add-vehicle-btn__icon" />
    <span class="add-vehicle-btn__text">ADD VEHICLE</span>
  </button>
</template>

<style scoped lang="scss">
.add-vehicle-btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 180px;
  height: 42px;
  padding: 9px 0 9px 18px;
  border-radius: 10px;
  background-color: $primary-color03;
  color: $primary-color01;
  border: none;
  cursor: pointer;
  gap: 10px;

  &:hover {
    background-color: darken($primary-color03, 10%);
  }

  .add-vehicle-btn__icon {
    width: 24px;
    height: 24px;
  }

  .add-vehicle-btn__text {
    font-size: 14px;
    font-weight: 700;
    color: $primary-color01;
    text-transform: uppercase;
  }
}
</style>
