<template>
  <div>
    <table class="border w-3/4 mx-auto mt-5 ">
      <tr class="border text-center">
        <th
          v-for="col in columns"
          :key="col"
          class="border text-center"
          v-bind:class="{'bg-green-500':isSelect }"
          v-on:click="selectCol(col)"
        >
          {{ col }}
        </th>
      </tr>
      <tr v-for="data in dataFromUser" :key="data" class="border">
        <td v-for="col in columns" :key="col" class="border pl-2">
          {{ data.row[col] }}
        </td>
      </tr>
    </table>

    <div>
      {{ dataSelect }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataFromUser: [
        {
          row: {
            A: "fox",
            B: "delete",
            C: "osu",
            D: "haru",
            F: "dano"
          }
        },
        {
          row: {
            A: "joe",
            B: "kris",
            C: "nami",
            D: "micky",
            F: "panda"
          }
        },
        { row: { A: "garfield", B: "tshirt" } }
      ],
      dataSelect: [],
      isSelect: false
    };
  },
  methods: {
    selectCol: function selectCol(col) {
      for (var i in this.dataFromUser) {
        this.dataSelect.push(this.dataFromUser[i].row[col]);
      }
    }
  },
  computed: {
    columns: function columns() {
      if (this.dataFromUser.length == 0) {
        return [];
      }
      return Object.keys(this.dataFromUser[0].row);
    }
  }
};
</script>
