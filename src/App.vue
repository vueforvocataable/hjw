<template>
  <div id="app">
    <VocaTextField></VocaTextField>
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
      voca: [
        {"english": "sample", "korean": "샘플"},
        {"english": "sample2", "korean": "샘플2"}
      ]
    }
  }
};
</script>

<style>
</style>
