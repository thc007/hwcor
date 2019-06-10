<template>
  <div class="wrap-c">
    <div class="box1">
      <div class="content">
        <img src="../../static/img/il_scroll_img01.png" alt>
        <img src="../../static/img/il_scroll_img02.png" alt>
        <img src="../../static/img/il_scroll_img03.png" alt>
        <img src="../../static/img/il_scroll_img04.png" alt>
        <img src="../../static/img/il_scroll_img05.png" alt>
        <img src="../../static/img/il_scroll_img01.png" alt>
        <img src="../../static/img/il_scroll_img02.png" alt>
        <img src="../../static/img/il_scroll_img03.png" alt>
        <img src="../../static/img/il_scroll_img04.png" alt>
        <img src="../../static/img/il_scroll_img05.png" alt>
      </div>
      <div class="clone"></div>
    </div>
  </div>
</template>
<script>
export default {
  name:"InfiniteScroll",
  mounted() {
    let speed = 10;
    let wrap = document.getElementsByClassName("wrap-c")[0];
    let content = document.getElementsByClassName("content")[0];
    let clone = document.getElementsByClassName("clone")[0];
    
    clone.innerHTML = content.innerHTML;
    function Marquee() {
      
      if (clone.offsetWidth - wrap.scrollLeft <= 0){
             wrap.scrollLeft -= content.offsetWidth;
        
        }
      else {
        wrap.scrollLeft++;
           
        
      }
    }
    var MyMar = setInterval(Marquee, 10);
    wrap.onmouseover = function() {
      clearInterval(MyMar);
    };
    wrap.onmouseout = function() {
      MyMar = setInterval(Marquee,10);
    };
  }
};
</script>
<style scoped>
img{
    margin:0;
}
.wrap-c {
  background: #ffffff;
  overflow: hidden;
  white-space: nowrap;
  min-width: 100%;
  z-index: 2;
  font-size: 16px;
  height:340px;

}
.wrap-c img {
 vertical-align:middle;
 display: block;
 float: left;
 border-right:1px solid #fff;
}
.wrap-c .box1 {
   white-space: nowrap;
  float: left;
  width: 800%;
}
.wrap-c .content {
     white-space: nowrap;
  float: left;
}
.clone {
  white-space: nowrap;
  /* display: none; */
  float: left;
}
</style>


