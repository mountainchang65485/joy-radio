<template>
  <div class="player-wrap">
    <div id="player">
        <iframe :src="`https://www.youtube.com/embed/${musicID}?autoplay=1`" frameBorder="0" allow="autoplay"></iframe>
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
import { mapGetters, mapActions } from 'vuex';
export default{
  data() {
    return {
      hotDate: '',
      musicList: '',
      YTData: [],
      musicID: '4n5yIXzY3TYupQyjvw',
    };
  },
  
  computed: {
    ...mapGetters([ 'metaTitle']),
  },
  methods:{
      
    playMusic(item) {
        // this.$store.commit('LOADING', true);
        const playTitle = item.name;
        const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.VUE_APP_GAPIKEY}&part=snippet&type=video&q=${playTitle}`;
        this.$http.get(url).then((res) => {
        const cacheYT = res.data.items[0].snippet;
        this.YTData = cacheYT;
        this.musicID = res.data.items[0].id.videoId;
        // this.$store.commit('LOADING', false);
      });
    },
    
    getTitle() {
      this.$store.dispatch('getMetaTitle', this.$route.meta.title);
    },
      
  },

}

   
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
    }
    
    #player:hover {
      width: 450px;
      height: 270px;
      transition: 80ms;
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
    #play:hover {
      transform: scale(1.07);
    }
    .play-icon {
      height: 100%;
      display:  flex;
      align-items: center;
      justify-content:  center;
    }
  }
    
</style>