<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter" />
    </div>

    <ui-table :columns="columns">
      <ui-table-row v-for="item in paginatedData" :key="item.id">
        <ui-table-item :columns="columns" name="id">{{item.id}}</ui-table-item>
        <ui-table-item :columns="columns" name="date">{{item.date | formatDate }}</ui-table-item>
        <ui-table-item :columns="columns" name="name">{{item.name}}</ui-table-item>
        <ui-table-item :columns="columns" name="money">{{item.money | formatMoney }}</ui-table-item>
      </ui-table-row>
    </ui-table>

    <div class="data-table__paginator">
      <ui-pagination
        v-model="page"
        :pages="pageCount"
      />
    </div>
  </div>
</template>

<script>
export default {

  name: 'DataTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: '0',
  }),

  computed: {
    pageCount() {
      return Math.ceil(this.rows.length / this.pageSize);
    },
    paginatedData() {
      const start = (this.page - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.rows.slice(start, end);
    },
  },
};
</script>
