<template>
  <div class="ui-content">
    <div class="ui-content__header">
      <div class="ui-content__section"
        v-for="column in columns" :key="column.prop"
        :style="{'width': `${column.width}`}"
        >
        <div>
          {{column.label}}
        </div>
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {

  name: 'UiTable',

  props: {
    columns: {
      type: Array,
      required: true,
    },
  },
};
</script>
