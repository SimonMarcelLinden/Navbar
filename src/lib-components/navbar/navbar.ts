import Vue from "vue";
import navItem from "@/lib-components/nav-item/nav-item.vue";
import navDropdown from "@/lib-components/nav-dropdown/nav-dropdown.vue";

export default /*#__PURE__*/ Vue.extend({
  name: "Navbar", // vue component name
  components: {
    navItem,
    navDropdown,
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
