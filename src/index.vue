<template>
  <div class="container">
         <featureList/>
         <hotList/>
         <chartList/>
  </div>
</template>

<script>

import featureList from './featureList';
import hotList from './hotList';
import chartList from './chartList';
export default {
    // data(){
    //     return{}
    // },
    components:{
        featureList,
        hotList,
        chartList,
    }
}
</script>