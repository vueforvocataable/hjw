<template>
  <div>
    <div class="menu">
      <b-form-checkbox v-model="blindEng">영어 가리기</b-form-checkbox>
      <b-form-checkbox v-model="blindKor">뜻 가리기</b-form-checkbox>
      <b-form-checkbox v-model="small">작게</b-form-checkbox>
      <b-form-checkbox v-model="striped">줄무늬</b-form-checkbox>
      <b-form-checkbox v-model="bordered">줄칸 나누기</b-form-checkbox>
      <b-button variant="primary" @click="shuffle()">단어 랜덤 배치</b-button>
    </div>
    <b-container>
      <b-row>
        <b-table class="oneTable" :fields="fields" :items="tableMake.slice(0 +(vocaPage-1) * 50, 25 + (vocaPage-1)*50)" :small="small" :striped="striped" :bordered="bordered">
          <template slot="index" slot-scope="data"> {{data.index + 1+(vocaPage-1)*50}} </template>
          <template v-if="!blindEng" slot="english" slot-scope="data"> {{data.item.english}} </template>
          <template v-if="!blindKor" slot="korean" slot-scope="data"> {{data.item.korean}} </template>
        </b-table>
        <b-table class="twoTable" :fields="fields" :items="tableMake.slice(25+(vocaPage-1)*50,50+(vocaPage-1)*50)" :small="small" :striped="striped" :bordered="bordered">
          <template slot="index" slot-scope="data"> {{data.index + 26+(vocaPage-1)*50}} </template>
          <template v-if="!blindEng" slot="english" slot-scope="data"> {{data.item.english}} </template>
          <template v-if="!blindKor" slot="korean" slot-scope="data"> {{data.item.korean}} </template>
        </b-table>
      </b-row>
    </b-container>
  <div v-if="this.tableMake.length >= 51">
    <b-pagination align= "center" size= "md" :total-rows= "this.tableMake.length"  v-model= "vocaPage" :per-page="50">
    </b-pagination>
    </div>
    <div>{{vocaPage}}</div>
    </div>
</template>

<script>
//TODO : 1. html태그 외부 파일로 두고, 변수하나로 묶기
//3. "", '' 중 어떤것 쓸지 통일하기 (Airbnb 코딩규칙 찾아보면 더 좋음)
//4. css 외부 파일로 두기
//5. 변수, 함수 이름 한번더 검토
//6. data부분 vue store찾아서 외부 파일로 두기
import _ from 'underscore';

  export default {
    name: "VocaTable",
    props: {
      vocaProp: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        fields:[
          { key: "index",label: ""},
          { key: "english", label: "English"},
          { key: "korean", label: "Korean"}
          ],
        vocas: "",
        tableMake:"",
        vocaPage: 1,
        striped: false,
        small: false,
        bordered: false,
        blindEng: false,
        blindKor: false,
      }
    },
    //@desc: 테이블이 생성될때 들어오는 값
    //@params:
    //@returns: 
     created() {
    //초기 배열 값 초기화(50개씩 생성됨) - 빈 공간 생성위해
      let pageNum = Math.floor(this.vocaProp.length / 50) + 1
      pageNum = pageNum * 50 
      this.tableMake = new Array(pageNum).fill({
        "english": "",
        "korean": ""
      })
      this.vocas = this.vocaProp
      for (let i=0;i<this.vocas.length;i++) {
        this.tableMake[i] = this.vocas[i]
      }
    },
    //vocas 랜덤으로 섞기
    methods: {
      shuffle: function() {
        let suffled = _.shuffle(this.vocas);
        this.tableMake.splice(0, suffled.length, ...suffled);
      }
    },
  }
</script>

<style>
  body {
    padding: 50px;
  }
  .menu {
    padding: 20px;
    padding-left: 50px;
  }
  .oneTable {
    padding: 10px;
    width: 400px;
  }
  .twoTable {
    padding: 10px;
    width: 400px;
  }
</style>