import Vue from "vue";
import lNavItem from "@/lib-components/nav-item/nav-item.vue";
import lNavDropdown from "@/lib-components/nav-dropdown/nav-dropdown.vue";

export default /*#__PURE__*/ Vue.extend({
  name: "lNavbar", // vue component name
  components: {
    lNavItem,
    lNavDropdown,
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
