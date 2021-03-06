import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
  name: "lNavBrand", 
  components: {},
  props: {
    href: {
      required: false,
      type: String,
      default: '#'
    },
    target: {
      required: false,
      type: String,
      default: '_self'
    },
  },
  data() {
    return {};
  },
});