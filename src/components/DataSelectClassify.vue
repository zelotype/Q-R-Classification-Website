<template>
  <div>
    <div class="w-full row mt-5 ml-32">
      <div>
        <p class="font-bold mt-1 mr-3">File Language:</p>
      </div>
      <div class="w-1/6">
        <b-form-select
          v-model="language"
          :options="selectLanguage"
        ></b-form-select>
      </div>
    </div>
    <table class="border w-3/4 mx-auto mt-4 h-32">
      <tr class="border text-center">
        <th
          v-for="col in columns"
          :key="col"
          class="border text-center"
          v-on:click="openModel(col)"
        >
          {{ col }}
        </th>
      </tr>
    </table>

    <div>
      <b-modal
        ref="select-model"
        hide-footer
        title="Select model and data visual for this column"
      >
        <b-form-select v-model="model" :options="selectModel"></b-form-select>
        <b-form-select
          v-model="graph"
          :options="selectGraph"
          class="mt-3"
        ></b-form-select>
        <div class="text-center">
          <b-button
            class="mt-4 bg-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 hover:border-blue-500 rounded w-1/3"
            v-on:click="selectCol()"
            >Select</b-button
          >
        </div>
      </b-modal>
    </div>

    <div class="text-center mt-5">
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-1/3"
        @click="submit()"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnFromData: ["A", "B", "C", "D", "E", "F", "G"],
      columnSelect: [],
      language: "TH",
      selectLanguage: [
        { value: "TH", text: "Thai" },
        { value: "EN", text: "English" }
      ],
      model: "tag suggestion",
      selectModel: [
        { value: "tag suggestion", text: "TAG SUGGESTION" },
        { value: "sentimental analysis", text: "SENTIMENTAL ANALYSIS" }
      ],
      graph: "bar",
      selectGraph: [
        { value: "bar", text: "Bar chart" },
        { value: "pie", text: "Pie chart" }
      ],
      columnName: "",
      chartSelect: []
    };
  },
  methods: {
    openModel: function openModel(col) {
      this.columnName = col;
      this.$refs["select-model"].show();
    },
    selectCol: function selectCol() {
      if (!this.columnSelect.includes(this.columnName)) {
        var dataCol = {
          name: this.columnName,
          model: this.model
        };
        var chartCol = {
          model: this.model,
          type: this.graph
        };
        this.columnSelect.push(dataCol);
        this.chartSelect.push(chartCol);
        this.$store.commit('DATA_SAVE_CLASSIFY', this.chartSelect)
        this.$refs["select-model"].hide();
      }
    },
    submit(){
      this.$router.push("/result");
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
