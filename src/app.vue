<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
export default {
  components:{
    Header,
    Footer,
    Todo,
  }
}
</script>

<style scoped lang="stylus">
#app{
  position: absolute;
  top:0px;
  left:0px;
  height:100%;
  width: 100%;
}
#cover{
  position: absolute;
  left: 0px;
  top: 0px;
  background: #999;
  opacity: .5;
  z-index: -1;
  height:100%;
  width: 100%;
}
</style>


