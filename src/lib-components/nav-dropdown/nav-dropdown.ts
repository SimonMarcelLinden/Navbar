import Vue from "vue";
import navItem from "@/lib-components/nav-item/nav-item.vue";
import navLink from "@/lib-components/nav-link/nav-link.vue";

export default /*#__PURE__*/ Vue.extend({
  name: "NavDropdown",
  components: {
    navItem,
    navLink,
  },
  props: {
    title: {
      type: String,
      default: "Dropdown",
      required: false,
    },
    right: {
      required: false,
      type: Boolean,
      default: false,
    },
    menuItems: {
      required: false,
      type: Array,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
});
