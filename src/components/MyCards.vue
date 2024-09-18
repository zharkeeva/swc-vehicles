<template>
  <div class="cards-container">
    <div v-if="cars.length === 0" class="cards__empty">No vehicles found</div>
    <div v-else class="cards">
      <div v-for="car in cars" :key="car.id" class="cards__item">
        <div class="dots-button">
          <img src="@/assets/svg/dots.svg" alt="More" />
        </div>
        <img
          class="cards__image"
          :src="car.preview || car.placeholder"
          :alt="car.vehicle_name || 'No name'"
        />
        <div class="cards__info">
          <h3 class="cards__title">{{ car.vehicle_name || "No name" }}</h3>
          <p class="cards__vin">{{ car.vin }}</p>
          <div class="cards__badge">
            <p
              class="cards__progress"
              :class="{ 'cards__progress--done': isCarComplete(car) }"
            >
              <template v-if="isCarComplete(car)">
                <img
                  src="@/assets/svg/check.svg"
                  alt="Done"
                  class="cards__icon"
                />
              </template>
              {{ car.uploads }}/30
            </p>
            <p class="cards__days-left">{{ car.defect_state }} days left</p>
          </div>
        </div>
      </div>

      <div
        v-for="n in emptyCardsCount"
        :key="'empty-' + n"
        class="cards__item cards__item--empty"
      >
        <div class="cards__empty-info">Not exist</div>
      </div>
    </div>
  </div>

  <div class="pagination">
    <div class="pagination__info">
      Showing {{ (currentPage - 1) * perPage + cars.length }} out of
      {{ totalVehicles }}
    </div>
    <div class="pagination__buttons">
      <button
        @click="previousPage"
        :disabled="currentPage === 1"
        class="pagination__button pagination__button--left"
      >
        <img src="@/assets/svg/chevron-left.svg" alt="Previous" />
      </button>

      <span class="pagination__pages">
        <div class="pagination__current-page">{{ currentPage }}</div>
        <span class="pagination__separator">of</span>
        <div class="pagination__total-pages">{{ totalPages }}</div>
      </span>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="pagination__button pagination__button--right"
      >
        <img src="@/assets/svg/chevron-right.svg" alt="Next" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const cars = computed(() => store.getters.cars);
const totalVehicles = computed(() => store.getters.totalVehicles);
const currentPage = computed(() => store.getters.currentPage);
const totalPages = computed(() => store.getters.totalPages);
const perPage = 9;

const emptyCardsCount = computed(() => 9 - cars.value.length);

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    store.dispatch("setCurrentPage", currentPage.value + 1);
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    store.dispatch("setCurrentPage", currentPage.value - 1);
  }
};

const isCarComplete = (car) => car.uploads === 30;

store.dispatch("fetchCars");
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1122px;
  background-color: $primary-color01;
}

.cards__item {
  background-color: $primary-color02;
  border-radius: 10px;
  width: 354px;
  height: 335px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 25px;
  position: relative;
}

.dots-button {
  position: absolute;
  top: 2px;
  right: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 24px;
    height: 24px;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 0.7;
  }
}

.cards__item--empty {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary-color02;
  border-radius: 10px;
}

.cards__empty-info {
  font-family: "DM Sans", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: $font-color-muted;
}

.cards__empty {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 30px;
  width: 78vw;
  height: 150vh;
  background-color: $primary-color02;
  border-radius: 10px;
  font-family: "DM Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: $font-color-muted;
}

.cards__image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
}

.cards__info {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cards__title {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin-bottom: 8px;
}

.cards__vin {
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  color: $font-color-muted;

  &::after {
    content: "";
    display: block;
    width: 306px;
    height: 1px;
    background-color: $border-color;
    margin: 15px 0 15px 0;
  }
}

.cards__badge {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cards__progress {
  width: 66px;
  height: 30px;
  border-radius: 6px;
  padding: 4px 14px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  background-color: $primary-color04;
  text-align: center;
  color: $font-color-dark;

  &--done {
    width: 93px;
    background-color: $background-color-success;
    color: $font-color-done;
    display: flex;
    align-items: center;
    justify-content: center;

    .cards__icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
}

.cards__days-left {
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: $font-color-light;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.pagination__info {
  color: $font-color-dark;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
}

.pagination__buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 184px;
  height: 32px;

  .pagination__button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    &--left,
    &--right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      img {
        width: 12px;
        height: 12px;
      }
    }
  }

  .pagination__pages {
    display: flex;
    align-items: center;
    margin: 0 8px;

    .pagination__current-page,
    .pagination__total-pages {
      width: 32px;
      height: 32px;
      background-color: $primary-color01;
      border: 1px solid $border-color;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "DM Sans", sans-serif;
      font-size: 16px;
      color: $font-color-dark;
    }
    .pagination__total-pages {
      color: $border-color-muted;
    }

    .pagination__separator {
      margin: 0 8px;
      font-family: "DM Sans", sans-serif;
      font-size: 16px;
      color: $font-color-dark;
    }
  }
}
</style>
