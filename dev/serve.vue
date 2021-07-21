<script lang="ts">
import NavDropdown from "@/lib-components/navDropdown/navDropdown.vue";
import navItem from "@/lib-components/navItem/navItem.vue";
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { NavbarSample } from '@/entry.esm';

export default Vue.extend({
  components: { navItem, NavDropdown },
  name: "ServeDev",
  // components: {
  //  NavbarSample,
  // }
  data() {
    return {
      menuItems: [
        {
          path: "/",
          title: "Home",
        },
        {
          path: "/pages",
          title: "Page",
        },
        {
          path: "/blog",
          title: "Blog",
          menuItems: [
            {
              path: "/grids",
              title: "Grids",
            },
            {
              path: "/single-post",
              title: "Single Post",
              menuItems: [
                {
                  path: "/post-1",
                  title: "Post 1",
                },
                {
                  path: "/post-6",
                  title: "Post 6",
                },
              ],
            },
            {
              path: "/list",
              title: "List",
            },
          ],
        },
        {
          path: "/shop",
          title: "Shop",
        },
      ],
    };
  },
});
</script>

<template>
  <div id="app">
    <div style="margin: 3rem auto; width: 390px">
      <navbar>
        <nav-item to="www.github.com">GitHub</nav-item>
        <nav-item to="www.npmjs.com">www.npmjs</nav-item>
        <nav-dropdown title="SubMenu">
          <nav-item to="www.google.com">Google</nav-item>
          <nav-item to="stackoverflow.com/">stack<b>overflow</b></nav-item>
        </nav-dropdown>
      </navbar>
    </div>

    <div style="margin: 3rem auto; width: 390px">
      <navbar :menuItems="this.menuItems" />
    </div>
  </div>
</template>
