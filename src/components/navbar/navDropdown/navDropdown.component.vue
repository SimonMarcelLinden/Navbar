<template>
  <li class="nav-item dropdown">
    <!--@mouseover="hover = true" @mouseleave="hover = false" -->
    <a class="nav-link dropdown-toggle" href="#">
      <span>{{ title }}</span>
    </a>

    <ul class="dropdown-menu" v-if="menuItems">
      <template v-for="(menuItem, key) in menuItems">
        <nav-dropdown
          v-if="menuItem.menuItems"
          :menuItems="menuItem.menuItems"
          :title="menuItem.title"
          :key="key"
        />
        <nav-item v-else :to="menuItem.path" :key="key">
          {{ menuItem.title }}
        </nav-item>
      </template>
    </ul>
    <ul v-else class="dropdown-menu" :class="{ show: hover }">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import NavItem from "../navItem/navItem.component.vue";

export default {
  name: "NavDropdown",
  components: {
    NavItem,
  },
  props: {
    title: {
      type: String,
      default: "Dropdown",
      required: false,
    },
    menuItems: {
      regquired: false,
      type: Array,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>