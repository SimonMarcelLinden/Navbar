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

<script lang="ts">
import Vue from "vue";
import NavItem from "../navItem/navItem.vue";
import NavDropdown from "../navDropdown/navDropdown.vue";

export default /*#__PURE__*/ Vue.extend({
  name: "Navbar", // vue component name
  components: {
    NavItem,
    NavDropdown,
  },
  props: {
    menuItems: {
      // regquired: false,
      type: Array,
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
.navbar-sample {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.navbar-sample p {
  margin: 0 0 1em;
}
</style>
