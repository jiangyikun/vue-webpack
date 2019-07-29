<template>
  <section class="realApp">
    <input 
    type="text" 
    class="addInput" 
    autofocus='autofocus' 
    placeholder="接下去要做什么？" 
    @keyup.enter="addTodo">
    <Item :todo="todo"></Item>
    <Tabs :filter="filter"></Tabs>
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
export default {
  data(){
    return {
      todo:{
        id:0,
        content:'this is todo',
        completed:false,
      },
      filter:'all'
    }
  },
  components:{
    Item,
    Tabs
  },
  methods:{
    addTodo(){

    }
  }
}
</script>

<style lang="stylus" scoped>
.realApp{
  width 600px
  margin 0 auto 
  box-shadow 0 0 5px #666
}
    
.addInput{
  position relative
  border none
  outline none 
  padding 20px 0 20px 20px
  width 580px;
  font-size 20px
}
</style>
