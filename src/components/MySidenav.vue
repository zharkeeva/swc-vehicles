<template>
  <nav class="sidenav">
    <div class="logo">
      <span>Demo Test</span>
    </div>
    <ul class="menu">
      <li class="menu-item">
        <img
          src="@/assets/svg/nav-user.svg"
          alt="Profile Icon"
          class="menu-icon"
        />
        <span class="menu-text">Profile</span>
      </li>
      <li class="menu-item active">
        <img
          src="@/assets/svg/nav-rim.svg"
          alt="Vehicles Icon"
          class="menu-icon"
        />
        <span class="menu-text">Vehicles</span>
      </li>
      <li class="menu-item">
        <img
          src="@/assets/svg/nav-settings.svg"
          alt="Settings Icon"
          class="menu-icon"
        />
        <span class="menu-text">Setting</span>
      </li>
    </ul>
    <div class="sidenav__vector">
      <img src="@/assets/svg/vector.svg" alt="Decorative Vector" />
    </div>
  </nav>
</template>

<script setup></script>

<style scoped lang="scss">
.sidenav {
  width: 256px;
  height: 1394px;
  background-color: $background-color02;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  position: relative;
}

.logo {
  font-family: "DM Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: $primary-color01;
  margin-bottom: 126px;
  margin-left: -20px;
  cursor: pointer;
}

.menu {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  .menu-item {
    width: 256px;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 12px 28px 12px 30px;
    cursor: pointer;
    transition: background-color 0.3s;

    .menu-icon {
      width: 24px;
      height: 24px;
      margin-right: 24px;
    }

    .menu-text {
      font-family: "DM Sans", sans-serif;
      font-size: 16px;
      font-weight: 500;
      color: $font-color-muted02;
    }

    &:hover {
      background-color: $background-color-hover;
      .menu-text {
        color: $primary-color01;
      }
    }

    &.active {
      background-color: $background-color-hover;
      .menu-text {
        color: $primary-color01;
      }
    }
  }
}

.sidenav__vector {
  position: absolute;
  bottom: 0;
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
