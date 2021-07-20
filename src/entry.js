import Vue from 'vue';
import Navbar from './components/navbar/index';

const components = {
    Navbar,
}

Object.keys(components).forEach(name => {
    console.log("name: " + name)
    Vue.component(name, components[name]);
});
export default components;
