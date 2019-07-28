<template>
  <section class="realApp">
    <input type="text" class="addInput" autofocus='autofocus' placeholder="接下去要做什么？" @keyup.enter="addTodo">
  </section>
</template>

<script>
export default {
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
