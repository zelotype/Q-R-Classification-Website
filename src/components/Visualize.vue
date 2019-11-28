<template>
  <div class="mt-20 row w-full">
    <div class="w-1/2 ml-24 col-6 mt-3">
      <div class="row">
        <h1 class="text-5xl text-bold">Data Visualization</h1>
        <p class="mt-2">
          It is a long established fact that a reader will be distracted by the readable
          <br />
        </p>
        <p>
           content of a page when looking at its layout.The point of using Lorem Ipsum is that<br/>
           it has a more-or-less normal distribution of letters,as opposed to using 'Content here,content here', making it look like readable English.
        </p>
      </div>
      <div class="row w-full">
        <div class="custom-file w-3/4 mt-4">
          <input type="file" class="custom-file-input" id="customFile" />
          <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
      </div>
      <div class="row w-full mt-4">
        <div class="w-1/2">
          <button
            class="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            @click="dataSelect()"
          >UPLOAD</button>
        </div>
      </div>
    </div>
    <div class="w-1/2 col-5">
      <div class="w-2/3 mx-auto">
        <img src="../assets/images/visualization.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    dataSelect(){
      this.$router.push("/dataSelectVisualize");
    }
  }
};
</script>

<style>
</style>