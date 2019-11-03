<template>
  <div>
    <component :is="flowPage"></component>
    <div class="row w-full mt-5">
      <div class="w-1/3"></div>
      <div class="w-1/3">
        <button v-show="checkSwitch" @click="switchToSelectColumn" class="w-full bg-mainyellow hover:bg-black hover:text-white font-bold py-2 px-4 rounded">UPLOAD</button>
      </div>
    </div>
  </div>
</template>

<script>
import ImportFile from "../components/ImportFile.vue"
import SelectColumn from "../components/SelectColumn.vue"
export default {
  data(){
      return{
          flowPage: "import-file",
          checkSwitch: true
      } 
  },
  components: {
      "import-file": ImportFile,
      "select-column": SelectColumn
  },
  methods: {
      switchToSelectColumn:function(){
          this.flowPage = "select-column"
          this.checkSwitch = false
      }
  }
};
</script>

<style>
</style>