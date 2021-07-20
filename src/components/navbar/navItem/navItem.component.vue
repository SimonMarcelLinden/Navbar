<template>
  <li class="nav-item">
    <template v-if="to">
      <a class="nav-link" :href="to">
        <slot></slot>
      </a>
    </template>
    <template v-else>
      <span class="nav-link">
        <slot></slot>
      </span>
    </template>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to: {
      type: String,
      required: false,
    },
  },
};

</script>