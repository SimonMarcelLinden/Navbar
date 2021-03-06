import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
  name: "NavLink",
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