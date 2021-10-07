<template>
  <div>
    <div class="container" v-on:click="moveDetail()">
      <!-- <div>{{temp.temp}}</div> -->
      <div class="box">
      <h1 class="temp">{{$store.state.weather.main.temp}}</h1>
      <div>날씨그림</div>
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
    temp(){
      return this.$store.state.weather.main
    }
  },

  created() {
    this.$store.dispatch('GET_WEATHER')
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