<template>
  <div id="app">
    <h1>首頁</h1>
    <div class="content">
      <keep-alive>
         <router-view/>
      </keep-alive>
    </div>
    <player/>
  </div>
</template>

<script>
// import index from './index';
import player from './player.vue'

export default {
  components:{
    //  index,
     player,
  },
  metaInfo: {
     meta: [
       { charset: 'utf-8' },
       { name: 'viewport', content: 'width=device-width, initial-scale=1' }
     ]
   }
};
</script>

<style lang="scss">
*{
  box-sizing: border-box;
}
body{
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  width: 100%;
}

h1, h2 {
  font-weight: normal;
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

*{
    text-decoration: none;
  list-style-type:none;
}
</style>
