import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import viewer from './viewer.vue'
import index from './index.vue'
import playList from './playList.vue'
// import search from './search.vue'
// import searchResult from './searchResult.vue'
// import playList from './playList.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            name:'',
            component:App,
            children:[
                {
                    path:'/',
                    component:viewer,
                    name:'home',
                    children:[
                        {
                            path:'/index',
                            component:index,
                            name:'index',
                       }
                        
                    ],
                },
                {
                    path:'/playList/:id?',
                    component:playList,
                    name:'playList',
                }
            ]
        },
    ],
})