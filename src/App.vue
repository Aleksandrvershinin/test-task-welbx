<template>
  <Sort></Sort>
  <Filter></Filter>
  <Table></Table>
</template>

<script>
import Table from "@/components/Table.vue";
import Sort from "@/components/Sort.vue";
import Filter from "@/components/Filter.vue";

export default {
  components: { Table, Sort, Filter },

}
</script>

<style>
#app {
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}
</style>