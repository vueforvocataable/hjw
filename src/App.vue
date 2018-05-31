<template>
  <div id="app">
    <VocaTextField v-on:addVoca="addVoca"></VocaTextField>
    <VocaTable :vocaProp= voca></VocaTable>
  </div>
</template>

<script>
import VocaTextField from './components/VocaTextField.vue'
import VocaTable from './components/VocaTable.vue'


export default {
  name: 'App',
  components: {
    VocaTable,
    VocaTextField
  },
  data: function () {
    return {
      voca: ""
    }
  },
  methods: {
    addVoca: function(value) {
      this.voca = value
    }
  }
};
</script>

<style>
</style>
