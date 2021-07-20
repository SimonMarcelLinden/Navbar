<template>
  <div class="navbar-collapse collapse md:end">
    <ul class="navbar-nav" v-if="menuItems">
      <template v-for="(menuItem, key) in menuItems">
        <nav-dropdown
          v-if="menuItem.menuItems"
          :menuItems="menuItem.menuItems"
          :title="menuItem.title"
          :key="key"
        >
        </nav-dropdown>
        <nav-item v-else :to="menuItem.path" :key="key">
          {{ menuItem.title }}
        </nav-item>
      </template>
    </ul>
    <ul class="navbar-nav" v-else>
      <template>
        <slot />
      </template>
    </ul>
  </div>
</template>

<script>
import NavItem from "./navItem/navItem.component.vue";
import NavDropdown from "./navDropdown/navDropdown.component.vue";

export default {
  name: "Navbar",
  components: {
    NavItem,
    NavDropdown,
  },
  props: {
    menuItems: {
      regquired: false,
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>