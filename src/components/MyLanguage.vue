<template>
  <div class="language-select">
    <img class="flag" :src="currentFlag" alt="Current Language Flag" />
    <span>{{ currentLanguage }}</span>
    <button class="chevron" @click="toggleDropdown">
      <img :src="ChevronDown" alt="Chevron" />
    </button>
    <ul v-if="dropdownOpen" class="language-dropdown">
      <li
        v-for="language in languages"
        :key="language.code"
        @click="selectLanguage(language)"
      >
        <img :src="language.flag" :alt="language.name" class="flag-icon" />
        <span>{{ language.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Импорт SVG-иконок напрямую
import FlagUk from "@/assets/svg/flag-uk.svg";
import FlagUsa from "@/assets/svg/flag-usa.svg";
import FlagGermany from "@/assets/svg/flag-germany.svg";
import FlagPortugal from "@/assets/svg/flag-portugal.svg";
import ChevronDown from "@/assets/svg/chevron-down.svg";

// Список языков
const languages = [
  { code: "en", label: "En", flag: FlagUk },
  { code: "us", label: "Us", flag: FlagUsa },
  { code: "de", label: "De", flag: FlagGermany },
  { code: "pt", label: "Pt", flag: FlagPortugal },
];

// Текущий выбранный язык
const currentLanguage = ref("En");
const currentFlag = ref(FlagUk);
const dropdownOpen = ref(false);

// Функция для изменения языка
const selectLanguage = (language) => {
  currentLanguage.value = language.label;
  currentFlag.value = language.flag;
  dropdownOpen.value = false;
};

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>

<style scoped lang="scss">
.language-select {
  display: flex;
  align-items: center;
  width: 83px;
  height: 24px;
  position: relative;

  span {
    font-family: "DM Sans", sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: $font-color;
    margin-left: 17px;
    min-width: 22px;
    text-align: center;
  }

  .flag {
    width: 24px;
    height: 24px;
  }

  .chevron {
    background: none;
    border: none;
    padding-top: 4px;
    color: $font-color-dark;
    opacity: 60%;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
    }
  }
}

.language-dropdown {
  position: absolute;
  top: 30px;
  left: 0;
  background-color: $primary-color01;
  border-radius: 5px;
  box-shadow: 0px 4px 10px $box-shadow-color;
  list-style: none;
  padding: 10px;
  z-index: 10;

  li {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background-color: $background-color01;
    }

    .flag-icon {
      width: 24px;
      height: 24px;
    }

    span {
      font-family: "DM Sans", sans-serif;
      font-size: 15px;
      font-weight: 500;
      color: $font-color;
    }
  }
}
</style>
