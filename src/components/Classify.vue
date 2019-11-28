<template>
  <div class="mt-20 row w-full">
    <div class="w-1/2 ml-24 col-6 mt-3">
      <div class="row">
        <h1 class="text-5xl text-bold">Requirement Classification</h1>
        <p class="mt-2">
          It is a long established fact that a reader will be distracted by the readable
          <br />
        </p>
        <p>
          content of a page when looking at its layout.The point of using Lorem Ipsum is that
          <br />it has a more-or-less normal distribution of letters,as opposed to using 'Content here,content here', making it look like readable English.
        </p>
      </div>
      <div class="row w-full">
        <div class="custom-file w-3/4 mt-4">
          <b-form-file
              accept=".csv"
              class="w-1/3 mt-4 inline-block text-left"
              placeholder="Choose a  .csv file"
              v-model="file"
            ></b-form-file>
        </div>
      </div>
      <div class="row w-full mt-4">
        <div class="w-1/2">
          <b-button
            @click="dataSelect"
            class="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >UPLOAD</b-button>
        </div>
      </div>
    </div>
    <div class="w-1/2 col-5">
      <div class="w-2/3 mx-auto">
        <img src="../assets/images/cloud.svg" alt />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
  return {
    file: null
  }
},
  methods: {
    dataSelect() {
      let formData = new FormData();
      formData.append('file', this.file);
      axios
        .post('http://127.0.0.1:8000/upload/', formData,{
          headers:{
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.$store.commit("ARRAY_COLUMN", response.data.column);
          this.$router.push("/dataSelect");
        })
        .catch(e => {
          this.errors.push(e);
        });
      
    }
  }
};
</script>

<style>
</style>