<template>
  <div>
    <table class="border w-3/4 mx-auto mt-5 ">
      <tr class="border text-center">
        <th
          v-for="col in columns"
          :key="col"
          class="border text-center"
          v-bind:class="{ 'bg-green-500': isSelect }"
          v-on:click="selectCol(col)"
        >
          {{ col }}
        </th>
      </tr>
      <tr v-for="data in dataFromUser" :key="data" class="border">
        <td v-for="col in columns" :key="col" class="border pl-2">
          {{ data[col] }}
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
          A: "fox",
          B: "delete",
          C: "osu",
          D: "haru",
          F: "dano"
        },
        {
          A: "joe",
          B: "kris",
          C: "nami",
          D: "micky",
          F: "panda"
        },
        { A: "garfield", B: "tshirt" }
      ],
      dataSelect: [],
      isSelect: false,
      count: 0
    };
  },
  methods: {
    selectCol: function selectCol(col) {
      let groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
          (result[key] = result[key] || []).push(currentValue[key]);
          return result;
        }, {});
      };
      var json = groupBy(this.dataFromUser, col)
      var dataSelectKey = this.dataSelect.map((k)=> Object.keys(k))
      console.log(dataSelectKey)
      if(!(dataSelectKey.includes(col))){
        console.log(json)
        this.dataSelect.push(json)
      }
    }
  },
  computed: {
    columns: function columns() {
      if (this.dataFromUser.length == 0) {
        return [];
      }
      return Object.keys(this.dataFromUser[0]);
    }
  }
};
</script>
