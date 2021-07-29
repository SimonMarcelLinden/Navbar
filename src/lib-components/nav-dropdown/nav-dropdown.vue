<template>
  <li class="nav-item nav-dropdown"
    @mouseover="hover = true" @mouseleave="hover = false" >
    <nav-link class="dropdown-toggle">
      <span>{{ title }}</span>
    </nav-link>

    <ul class="dropdown-menu" v-if="menuItems">
      <template v-for="(menuItem, key) in menuItems">
        <nav-dropdown
          v-if="menuItem.menuItems"
          :menuItems="menuItem.menuItems"
          :title="menuItem.title"
          :key="key"
        />
        <nav-item v-else :to="menuItem.path" :key="key">
          {{ menuItem.title }}
        </nav-item>
      </template>
    </ul>
    <ul
      v-else
      class="dropdown-menu"
      :class="{ 'show': hover, 'dropdown-menu-right': right }"
    >
      <slot></slot>
    </ul>
  </li>
</template>

<script src="./nav-dropdown.ts" lang="ts"></script>
