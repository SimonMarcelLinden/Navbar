<template>
  <div class="navbar navbar-collapse collapse md:end">
    <ul class="navbar-nav" v-if="menuItems">
      <template v-for="(menuItem, key) in menuItems">
        <nav-dropdown
          v-if="menuItem.menuItems"
          :menuItems="menuItem.menuItems"
          :title="menuItem.title"
          :key="key"
        >
        </nav-dropdown>
        <nav-item v-else :to="menuItem.path" :key="key">
          {{ menuItem.title }}
        </nav-item>
      </template>
    </ul>
    <template v-else>
        <slot />
    </template>
  </div>
</template>


<script src="./navbar.ts" lang="ts"></script>