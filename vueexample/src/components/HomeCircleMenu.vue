<template>
<div>
  <h1>this is a VueCircleMenu example</h1>
  <!-- 使用VueCircleMenu组件创建菜单栏
  npm install  vue-circle-menu -->

  <!-- <circle-menu type="bottom" :number="4" colors="[ '#563761', 'rgb(255, 255, 102)', '#FFE26F', '#F3825F', '#F19584' ]">
    <button type="button" slot="item_btn"></button>
    <a slot="item_1" class="fa fa-twitter fa-lg" herf="#" ></a>
    <a slot="item_2" class="fa fa-weixin fa-lg" herf="#" ></a>
    <a slot="item_3" class="fa fa-weibo fa-lg" herf="#" ></a>
    <a slot="item_4" class="fa fa-github fa-lg" herf="#" ></a>
  </circle-menu> -->
  <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list></quick-menu>

</div>
</template>

<script>
import CircleMenu from 'vue-circle-menu'
import QuickMenu from 'vue-quick-menu'
export default {
  data () {
    return {
      count: 4,
      icons: [ 'fa fa-github', 'fa fa-comment', 'fa fa-code', 'fa fa-envelope' ],
      list: [
        { 'isLink': false },
        { 'isLink': true, url: '/' },
        { 'isLink': true, url: '/aboubt' },
        { 'isLink': false }
      ],
      position: 'top-left',
      backgroundColor: '#aa2222'
    }
  },
  components: {
    CircleMenu,
    QuickMenu
  }
}

</script>

<style>

</style>
