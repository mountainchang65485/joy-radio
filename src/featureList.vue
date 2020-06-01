<template>
  <div>
    <h3>每日歌單</h3>
    <ul class="row px-0">
      <li v-for='items in featuredLists' :class="coverStyle">
        <div class="cover-wrap">
          <router-link :to="`/playList/${items.id}`">
             <img :src="`${items.images[1].url}`" alt="">
          </router-link>
        </div>
        <h4>
          <a href='#' @click.prevent='playList(items.id)'>{{items.title}}</a>
        </h4>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>

// import axios from 'axios'
// import VueAxios from 'vue-axios'

// var featuredList_Url='https://api.kkbox.com/v1.1/featured-playlists?territory=TW&limit=20';
 
// var token='lW4SbjGAF9751GctPa_QsA==';
// var config ={
//    headers:{
//       Authorization:"Bearer "+token,
//    }
// };

import {mapGetters,mapMutations}from 'vuex'
export default {
  data(){
    return {
      coverStyle:[
      'col-6',
      'col-sm-4',
      'col-md-3',
      'col-lg-3',
      'px-2',
      'py-2',
      'mr-0',
      'ml-0',
      'mb-4',
      'playList-card'
      ]
    };
  },
  computed: {
    featuredLists(){
       return this.$store.state.featuredLists;
    },
    
  },
  methods:{
    // ...mapMutations(['setKKboxPlayID']),
    
    playList(item) {
      this.$store.commit('setKKboxPlayID', item);
      this.$router.push(`/playList/id?=${item}`);

    },
  },
  mounted(){
    this.$store.dispatch('fetchFeature');
  }
}
</script>
<style lang="scss" scoped>
.cover-wrap{
  img{
    width: 100%;
  }
}
  
*{
    text-decoration: none;
    list-style-type:none;
    text-align: left;
}
</style>