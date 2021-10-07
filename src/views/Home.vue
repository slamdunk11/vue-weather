<template>
  <div>
    <div>
      <div>온도</div>
      <div>날씨그림</div>
      <div>위치</div>
      <div>미세먼지</div>
    </div>
  </div>
</template>

<script>
import {getWeather} from '../api/index.js'
export default {
  name: 'Home',

  data() {
    return {
      
    };
  },

  created() {
    getWeather()
    .then(response => console.log(response))
    .catch(error => console.log(error))
  },
  

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>