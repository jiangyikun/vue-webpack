<template>
  <div :class="['todoItem',todo.completed?'completed':'']">
    <input type="checkbox" class="toggle" v-model="todo.completed" />
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo(todo.id)"></button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo(id) {
      alert();
      this.$emit('delete',id)
    }
  }
};
</script>

<style lang="stylus" scoped>
.todoItem {
  position: relative;
  background-color: #fff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    .destory:after {
      content: 'x';
    }
  }

  label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    line-height: 1.2;
    display: block;
    transition: color 0.4s;
  }

  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
}

.toggle {
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  outline: none;

  &:after {
    content: '';
    width: 16px;
    height: 16px;
    display: block;
    background: 'red';
  }

  &:checkbox:after {
    content: '';
    width: 16px;
    height: 16px;
    display: block;
    background: 'yellow';
  }
}

.destory {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 10px;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color: transparent;
  appearance: none;
  border-width: 0;
  cursor: pointer;
  outline: none;
}
</style>

