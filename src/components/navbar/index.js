/* content of index.js */
import Navbar from './navbar.vue';

Navbar.install = function(Vue) {
    Vue.component(Navbar.name, Navbar);
};

export default Navbar;
