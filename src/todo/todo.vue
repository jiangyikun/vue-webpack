<template>
  <section class="realApp">
    <input
      type="text"
      class="addInput"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
    />
    <Item v-for="item in filterTodos" :key="item.id" :todo="item" @delete="deleteByid" />
    <Tabs :filter="filter" :todos="todos" @toggerChange="toggerChange" @clearAllCompleted='clearAllCompleted'></Tabs>
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
let id = 1;
export default {
  data() {
    return {
      todos: [],
      filter: "all"
    };
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filterTodos:function() {
      if(this.filter==='all'){
        return this.todos
      }
      const status = this.filter==='completed';
      return this.todos.filter(item=>item.completed===status);
    }
  },
  methods: {
    addTodo(e) {
      let value = e.target.value;
      this.todos.unshift({
        id: id++,
        content: value,
        completed: false
      });
      e.target.value = "";
    },
    deleteByid(id) {
      this.todos = this.todos.filter(item => {
        return item.id !== id;
      });
    },
    toggerChange(status){
      this.filter = status;
    },
    clearAllCompleted(){
      console.log(this.todos);
      this.todos = this.todos.filter(item=>!item.completed)
    }
  }
};
</script>

<style lang="stylus" scoped>
.realApp {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.addInput {
  position: relative;
  border: none;
  outline: none;
  padding: 20px 0 20px 20px;
  width: 580px;
  font-size: 20px;
}
</style>
