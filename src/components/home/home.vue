<template>
    <div>
            <mt-swipe :auto="4000">
               <mt-swipe-item v-for="(item,index) in pic" :key="index">
                 <a :href="item.url">
                     <img v-bind:src="item.img">
                 </a>
               </mt-swipe-item>
            </mt-swipe>

             <ul>
             <li v-for="(router,index) in daohang" :key="index">
                <a href="">
                   <div :class="'back-img ' + router.className">
                       {{router.title}}
                   </div>
                </a>
            </li>
        </ul>
            
    </div>
</template>
<script>
export default {
     created(){
     	this.$axios.get('getlunbo').then(res => this.pic = res.data.message) 
  },
  data() {
    return {
      // lunbo:[]
      pic:[],
    daohang:[{
                    className:'news',
                    title:'新闻列表'
                },{
                    className:'pic',
                    title:'图文分享'
                },{
                    className:'goods',
                    title:'商品列表'
                },{
                    className:'feedback',
                    title:'留言反馈'
                },{
                    className:'search',
                    title:'搜索资讯'
                },{
                    className:'callme',
                    title:'联系我们'
                }
           ]

    }
  }
};
</script>
<style scoped>
.mint-swipe-item img {
    width: 100%;
 }
.mint-swipe{
    height: 30%;
}
/*九宫格样式*/
ul{
    overflow: hidden;
} 
li{
    float: left;
    height:20%;
    line-height: 218px;   
    width: 33%;
    margin: 1 1 0 0;
    text-align: center; 
    position: relative;
}
.back-img{
        background-size: 40px;
        background-repeat: no-repeat;
        background-position: 40px 35px;
        font-size: 20px;
        font-family: 'Microsoft YaHei';
}

li a{
    color:black;
}
.news {
    background-image:url(../../static/img/news.png)
}
.pic {
    background-image:url(../../static/img/picShare.png)
}
.goods {
    background-image:url(../../static/img/goodShow.png)
}
.feedback {
    background-image:url(../../static/img/feedback.png)
}
.search {
    background-image:url(../../static/img/search.png)
}
.callme {
    background-image:url(../../static/img/callme.png)
}
</style>