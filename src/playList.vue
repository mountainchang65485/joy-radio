<template>
  <div class="container">
    
    <div class="all-wrap row">
       <section class="list-info-wrap col-12 col-md-6">
           <h2>{{listInfo.title}}</h2>
           <div class="list-cover-wrap mb-3">
             <template v-if="listInfo.images">
               <img :src="`${listInfo.images[1].url}`" alt=""  class="list-cover-wrap mb-3">
             </template>
           </div>
           <p>{{listInfo.description}}</p>
           <div>
             <!-- <button class='play-all-btn px-1 py-2' @click=''>全部播放</button> -->
           </div>
       </section>
       <section class="list-album-wrap col-12 col-md-6">
            <ul>
              <template v-if="playList.length > 0 ">
                <li v-for="(list, index) in playList" :key="index +'playList'" class="row mb-2" @click.prevent='playIt(list)'>
                  <img :src="`${list.album.images[0].url}`" alt="" class="album-cover col-3 col-sm-3 col-md-3 pr-0">
                  <div class="col-9 col-sm-9 col-md-9">
                    <h4 class="song-name"><a href="">{{list.name}}</a></h4>
                    <h4 class='artist-name'>{{list.album.artist.name}}</h4>
                  </div>
                </li>
              </template>
            </ul>
       </section>

    </div>
    <router-view/>
  </div>
</template>

<script>

import axios from 'axios';
import VueAxios from 'vue-axios';
import {mapGetters,mapMutations}from 'vuex'

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery
export default {
  data(){
    return {
      hotDate: '',
      musicList: [],
      YTData: [],
      musicID: '4n5yIXzY3TYupQyjvw',
    };
  },
  computed: {
    playList(){
       return this.$store.state.playList;
        console.log(this.$store.state.playList) ;
    },

    listInfo(){
      return this.$store.state.listInfo;
    },

    showID(){
        console.log(this.$store.state.ID_str) ;
    }
    
  },
  methods:{
    playIt(list){
      console.log(list);
       this.$store.dispatch('playMusic',list);
    }
  },
  mounted(){
    this.$store.dispatch('fetchPlayList');
    this.$store.dispatch('fetchListInfo');
    // this.$store.dispatch('playMusic');
  }
}
</script>
<style lang="scss" scoped>
.all-wrap{
  position:relative;
  height:100vh;
  .list-info-wrap{
    text-align:left;
    height:100%;
    position:-webkit-sticky;
    top:0px;
    .list-cover-wrap{
      img{
        width:100%;
      }
    }
    .play-all-btn{
      border:none;
      border-radius:50px;
      background-color:green;
      width:100%;
    }
  }
  .list-album-wrap{
    ul{
      overflow:hidden;
      overflow-y:auto;
      height:100vh;
      li{
        cursor:pointer;
        .album-cover{
          width:100px;
        }
        h4{
          text-align:left;
          font-size:15px;
        }
  
      }
    }
    ul::-webkit-scrollbar {
      display: none;
    }
    ul {
      -ms-overflow-style: none;
    }
  }

}
  
</style>