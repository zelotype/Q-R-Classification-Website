<template>
  <div class="mt-20 row w-full">
    <div class="w-1/2 ml-24 col-6 mt-3">
      <div class="row">
        <h1 class="text-5xl text-bold">Data Visualization</h1><br />
        
      </div>
      <div class="row">
      <h3 class="text-xl text-semibold text-gray-700 mt-2 th">การแสดงข้อมูลในรูปแบบกราฟ</h3>
        <p class="mt-2 th">
           การนำข้อมูลที่คุณอัพโหลดมาทำให้เห็นภาพมากขึ้นด้วยการแสดงผลในรูปแบบกราฟ<br/>
           ซึ่งคุณสามารถเลือกเฉพาะคอลัมน์/หัวข้อที่ต้องการหรือจะเลือกทั้งหมดก็ได้<br/>
           อีกทั้งคุณยังสามารถเลือกรูปแบบของกราฟในการแสดงผลได้ด้วยเช่นกัน<br/>
           ไม่ว่าจะเป็นกราฟแท่งหรือกราฟวงกลม
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
export default {};
</script>

<style>
</style>