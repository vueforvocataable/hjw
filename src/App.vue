<template>
  <div id="app">
    <voca-input-text-field></voca-input-text-field>
    <voca-table :vocaProp= voca></voca-table>
  </div>
</template>

<script>
import VocaTextField from './components/VocaTextField.vue'
import VocaTable from './components/VocaTable.vue'

export default {
  name: 'App',
  components: {
    'VocaTable': VocaTable,
    'VocaInputTextField': VocaTextField
  },
  data: function () {
    return {
      voca: [
        {"english": "sample", "korean": "샘플"},
        {"english": "sample", "korean": "샘플"}
      ]
    }
  }
};
</script>

<style>
</style>
