<template>
  <div>
    <table class="border w-3/4 mx-auto mt-5 ">
      <tr class="border text-center">
        <th
          v-for="col in columns"
          :key="col"
          class="border text-center"
          v-on:click="selectCol(col)"
        >
          {{ col }}
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnFromData: ["A", "B", "C", "D", "E", "F", "G"],
      columnSelect: []
    };
  },
  methods: {
    selectCol: function selectCol(col) {
      if(!(this.columnSelect.includes(col))){
        this.columnSelect.push(col)
      }
    }
  },
  computed: {
    columns: function columns() {
      if (this.columnFromData.length == 0) {
        return [];
      }
      return this.columnFromData;
    }
  }
};
</script>
