<template>
  <div class="player-wrap">
    <div id="player">
        <iframe :src="`https://www.youtube.com/embed/${musicID}?autoplay=1`" height="60" width="120" frameBorder="0" allow="autoplay"></iframe>
    </div>
    <div id="playBar">
      <div id="barbtn" class="play-icon">
          <font-awesome-icon :icon="['fa', 'random']" id="random" class="icon"/>
          <font-awesome-icon :icon="['fa', 'step-backward']" id="prev" class="icon"/>
          <font-awesome-icon :icon="['far', 'play-circle']" id="play" class="icon" />
          <font-awesome-icon :icon="['fa', 'step-forward']" id="next" class="icon" />
          <font-awesome-icon :icon="['fa', 'sync-alt']" id="repeat" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default{
  data() {
    return {
      hotDate: '',
      musicList: '',
      YTData: [],
      // musicID: '4n5yIXzY3TYupQyjvw',
    };
  },
  
  computed: {
    ...mapGetters([ 'metaTitle','musicID']),

  },
  methods:{
    // playMusic(list) {
    //     const playTitle = `${list.name}+${list.artist.name}`;
    //     const ytKey = 'AIzaSyBT3AL5luLl-NgoS5oVWgcfdP28FmbzLK8';
    //     const url = `https://www.googleapis.com/youtube/v3/search?key=${ytKey}&part=snippet&type=video&q=${playTitle}`;
    //     this.$http.get(url).then((res) => {
    //     const cacheYT = res.data.items[0].snippet;
    //     this.YTData = cacheYT;
    //     this.musicID = res.data.items[0].id.videoId;
    //   });
    // },
    
    getTitle() {
      this.$store.dispatch('getMetaTitle', this.$route.meta.title);
    },
      
  },

};
 
</script>
<style lang="scss" scoped>
 
  
  .player-wrap{
    width: 100%;
    position:fixed;
    bottom:0px;
    z-index:1000;
    padding: 1rem 0px;
    background: rgba(0, 0, 0, 0.8);
    #player{
        position: fixed;
        bottom:1em;
        left:1em;
        z-index: 999;
        transform: scale(1);
    }
    
    #player:hover {
      width: 450px;
      height: 270px;
      transition: 80ms;
      transform: scale(1.07);
    }
    .icon {
      color: white;
      margin: 0 20px;
    }
    .icon:hover {
      color: #CCFF00;
      transition: 300ms;
    }
    #play {
      font-size: 35px;
    }

    .play-icon {
      height: 100%;
      display:  flex;
      align-items: center;
      justify-content:  center;
    }
  }
    
</style>