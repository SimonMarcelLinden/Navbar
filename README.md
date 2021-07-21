<h1 align="center">Navbar</h1>

[![Latest Version on NPM](https://img.shields.io/npm/v/@simon.marcel.linden/navbar.svg?style=flat-square)](https://www.npmjs.com/package/@simon.marcel.linden/navbar)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/@simon.marcel.linden/navbar?style=flat-square)](https://www.npmjs.com/package/responsive-vue-image)

> Navbar Component with dropdown.

## Project setup
## Install and basic usage
### Install via NPM...
```
npm i -s @simon.marcel.linden/navbar
```
### Use the component:
```
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
  </div>
</template>

<script>
import Navbar from '@simon.marcel.linden/navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
}
</script>
```

### Or use the component with property
```
template>
  <div id="app">
    <div style="margin: 3rem auto; width: 390px">
      <navbar :menuItems="this.menuItems" />
    </div>
  </div>
</template>

<script>
import Navbar from '@simon.marcel.linden/navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  
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
        ...
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
                ...
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
    }
  }
}
</script>
```

#### Props

#### menuItems
Type: `Array`<br>
Required: `false`<br>
Default: -

Example: See the code above

## Contributing
Any contribution to the code or any part of the documentation and any idea and/or suggestion are very welcome.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
