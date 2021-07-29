import navLink from "@/lib-components/nav-link/nav-link.vue";
import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
  components: { navLink },
  name: "lNavItem",
  props: {
    href: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    }
  },
});