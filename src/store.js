import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(Vuex)
var ID_str;
var featuredList_Url='https://api.kkbox.com/v1.1/featured-playlists?territory=TW&limit=20';
var openUrl = `https://api.kkbox.com/v1.1/featured-playlists/${ID_str}?&territory=TW`; 
var token='lW4SbjGAF9751GctPa_QsA==';
var config ={
   headers:{
      Authorization:"Bearer "+token,
   }
};
var ytConfig ={
    params: {
    key: 'AIzaSyBT3AL5luLl-NgoS5oVWgcfdP28FmbzLK8'
  }
};

  
// var player;
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


const store = new Vuex.Store({
    state:{
      featuredLists:[],
      playList:[],
      metaTitle: '',
      ID_str:'',
      KKboxPlayID:'',

    },

    mutations:{
        setListData(state,featured){
           state.featuredLists=featured;
        },
        
        SETTITLE(state, payload) {
           state.metaTitle = payload;
        },
        setKKboxPlayID(state,ListID){
           state.ID_str=ListID;
           console.log(state.ID_str);
        },
        setPlayList(state,payload){
            state.playList=payload;
        }


    },

    actions:{
        fetchFeature({commit}){
            axios.get(`${featuredList_Url}`,config)
             .then(res=> {
                // this.featuredLists=res.data.data;
                console.log(res);
                commit('setListData',res.data.data);
            }); 
        },
        fetchPlayList({commit}){
            var IDUrl=location.href;
            var ID_str=IDUrl.split('id?=')[1];
            axios.get(`https://api.kkbox.com/v1.1/featured-playlists/${ID_str}?&territory=TW`,config)
             .then(res=> {
                console.log(res);
                // commit('setKKboxPlayID',res.data.data);
                commit('setPlayList',res.data);
            }); 
        },
        
        getMetaTitle(context, title) {
            context.commit('SETTITLE', title);
        },

    },

    getters:{
        imgSrc: state =>{
            return state.featuredLists.image[1].url;
        },

        title: state =>{
            return state.featuredLists.title;
        },

        id:state =>{
            return state.ID_str;
        },
        metaTitle(state) {
            return state.metaTitle;
        },
        playList:state=>{
            return state.playList;
        },

    },
    modules:{

    }
});

export default store;