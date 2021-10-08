<template>
  <div>
    <div class="container" v-on:click="moveDetail()">
      <!-- <div>{{temp.temp}}</div> -->
      <div class="box">
      <!-- <h1 class="temp">{{$store.state.weather.main}}</h1> -->
      <h1>{{this.resultdata.temp}}°C</h1>
      <img src="" alt="">
      <div>{{this.resultdata.weather}}</div>
      <div>위치</div>
      <div>미세먼지</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      
    };
  },

  computed: {
    resultdata(){
      return this.$store.getters.resultdata;
    }
    // temp(){
    //   return this.$store.state.weather.main
    // }
  },

  created() {
    this.$store.dispatch('GET_WEATHER')
    // console.log(this.$store.state.weather.cod);
  },
  

  mounted() {
    
  },

  methods: {
    moveDetail(){
      this.$router.push('detail');
    }
  },
};
</script>

<style  scoped>

.container{
  display: flex;
}

.box{
  margin: 0 auto;
}
</style>