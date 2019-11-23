<template>
  <div>
      <div :v-for="col in columns">
          <button>{{col}}</button>
      </div>
      <!-- <div class="w-full">
        <div v-for="data in dataFromUser" :key="data" class="w-1/12">
            <div v-for="result in data" :key="result">
                <b-button class="w-full h-16">{{ result }}</b-button>
            </div>

        </div>
      </div> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            dataFromUser: [
                {"1":{
                    "A":"fox", 
                    "B":"delete",
                    "C":"osu",
                    "D":"haru",
                    "F":"dano"}},
                {"2":{
                    "A":"joe", 
                    "B":"kris", 
                    "C":"nami", 
                    "D":"micky", 
                    "F":"panda"}},
                {"3":{"A":"garfield", "B":"tshirt"}}
            ],
            column: [
                "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q"
            ]
        }
    },
    computed:{
        "columns":function columns(){
            if(this.dataFromUser.length == 0){
                return [];
            }
            return this.column;
        }
    }
}
</script>

<style>

</style>