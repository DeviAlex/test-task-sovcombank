<template>
  <input
    type="text"
    v-model="formattedValue"
    @input="$emit('input', formattedValue)"
    class="ui-money"
  />
</template>

<script>
export default {

  name: 'UiMoney',

  props: {
    value: {
      type: String,
      require: true,
    },
  },

  data() {
    return {
      valueInput: '',
    };
  },

  methods: {
    getFormattedIntegerWithRemainder({
      isLastDot, value, integer, remainder,
    }) {
      if (isLastDot && value?.length === 1) {
        return '0.';
      }

      if (isLastDot) {
        return `${integer}.`;
      }

      if (remainder) {
        return `${integer}.${remainder.substring(0, 2)}`;
      }

      return undefined;
    },
  },

  computed: {
    formattedValue: {
      get() {
        return this.valueInput;
      },
      set(newValue) {
        const formattedValue = newValue.replace(/[^0-9,.]/g, '').replace(/,/g, '.');

        const dots = formattedValue.replace(/[^.]/g, '');
        const parsedAmount = dots?.length > 1 ? formattedValue.substring(0, formattedValue?.length - 1) : formattedValue;
        const isLastDot = parsedAmount?.[parsedAmount?.length - 1] === '.';
        const [integer, remainder] = parsedAmount.split('.');
        const localedIntegerValue = Number.isNaN(parseFloat(parsedAmount)) ? integer : parseFloat(integer).toLocaleString().replace(/,/g, '.');
        const val = this.getFormattedIntegerWithRemainder({
          integer: localedIntegerValue, remainder, isLastDot, value: parsedAmount,
        }) || `${localedIntegerValue}`;

        if (this.valueInput === val) {
          this.$forceUpdate();
        }

        this.valueInput = val;
      },
    },
  },
};
</script>
