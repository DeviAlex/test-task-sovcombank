<template>
  <div class="ui-content__section" :style="{...styleObject}">
    <strong class="section-name">{{label}}</strong>
    <slot />
  </div>
</template>

<script>
export default {

  name: 'UiTableItem',

  props: {
    name: {
      type: String,
      default: '',
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  computed: {
    styleObject() {
      const column = this.columns?.find((col) => col.prop === this.name);

      if (column) {
        return { width: '100%', maxWidth: column.width };
      }

      return {};
    },
    label() {
      const column = this.columns?.find((col) => col.prop === this.name);

      if (column) {
        return column.label;
      }

      return '';
    },
  },
};
</script>
