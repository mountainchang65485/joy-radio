<template>
  <div class="container">
    
    <h3>播放清單</h3>
    <div class="row">
       <section class="list-info-wrap">
           <div>
               <img src="" alt="">
           </div>

       </section>
       <section>
            <ul>
              <li v-for="list in playList">
                <div><a href=""><img :src="`${list.images[1].url}`" alt=""></a></div>
                <h4><a href="">{{list.title}}</a></h4>
              </li>
            </ul>
       </section>

    </div>
    <router-view/>
  </div>
</template>

<script>

import {mapGetters,mapMutations}from 'vuex'
export default {
//   data(){
//     return {
//       coverStyle:[
//       'col-6',
//       'col-sm-4',
//       'col-md-3',
//       'col-lg-3',
//       'px-2',
//       'py-2',
//       'mr-0',
//       'ml-0',
//       'mb-4',
//       'playList-card'
//       ]
//     };
//   },
  computed: {
    playList(){
       return this.$store.state.playList;
        console.log(this.$store.state.playList) ;
    },

    showID(){
        console.log(this.$store.state.ID_str) ;
    }
    
  },
//   methods:{
//     ...mapMutations(['fetchPlayList'])
//   },
  mounted(){
    this.$store.dispatch('fetchPlayList');
  }
}
</script>