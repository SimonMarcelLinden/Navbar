import navLink from "@/lib-components/nav-link/nav-link.vue";
import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
  components: { navLink },
  name: "NavItem",
  props: {
    href: {
      type: String,
      required: false,
    },
  },
});