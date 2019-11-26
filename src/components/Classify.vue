<template>
  <div class="mt-20 row w-full">
    <div class="w-1/2 ml-24 col-6 mt-3">
      <div class="row">
        <h1 class="text-5xl text-bold">Requirement Classification</h1> 
        <h3 class="text-xl text-semibold text-gray-700 mt-2 th">การจำแนกประเภทความต้องการ </h3>
        <p class="mt-2 th">
          จำแนกความต้องการที่คุอัพโหลดเข้ามาออกเป็นประเภทต่างๆ
          ซึ่งคุณสามารถเลือก<br>เฉพาะคอลัมน์/หัวข้อที่ต้องการ หรือจะทำการแยกประเภททั้งหมดก็ได้
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
          <b-button
          @click="dataSelect"
            class="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >UPLOAD</b-button>
        </div>
      </div>
    </div>
    <div class="w-1/2 col-5">
      <div class="w-2/3 mx-auto">
        <img src="../assets/images/cloud.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    dataSelect(){
      this.$router.push("/dataSelect");
    }
  }
};
</script>

<style>
</style>