<template>
  <div>
    <b-container>
      <div class="d-print-none">
        <a href="javascript:window.print()">
          <b-button class="btn  btn-lg">인쇄</b-button>
        </a>
        <b-button class="btn btn-lg" @click="isSuffle = !isSuffle">단어섞기</b-button>
<b-button v-b-modal.upLode class="btn btn-lg">워터마크</b-button>

<b-form-group>
           <b-form-checkbox buttons class="checkbox" v-model="blindZigzag">지그재그</b-form-checkbox>
          <b-form-checkbox class="checkbox" v-model="blindEng">영어 가리기</b-form-checkbox>
          <b-form-checkbox class="checkbox" v-model="blindKor">뜻 가리기</b-form-checkbox> 
          <b-form-checkbox class="checkbox" v-model="small">작게</b-form-checkbox>
          <b-form-checkbox class="checkbox" v-model="striped">줄무늬</b-form-checkbox>
          <b-form-checkbox class="checkbox" v-model="bordered">줄칸 나누기</b-form-checkbox>
          </b-form-group>
      </div>
    </b-container>

    <upLodeModal @show-Img="showImg2" ></upLodeModal>

    <div class="table-container">
     <div v-for="(items, index) in countTable" :key="index">
       <div class="repeatTable">  
              <div class="backgroundImg">
       <img :src = "image" height="100%" width="100%" v-show="image"/>
       </div>   
       <voca-table :src="image" :is="items" :vocaProp="cutVoca(index)" :blindEng="blindEng"
      :blindKor="blindKor" :blindZigzag="blindZigzag" :small="small" :striped="striped" :bordered="bordered"
      :tableHeaderProp="tableHeaderProp" :isSuffle="isSuffle"></voca-table>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import VocaTable from './VocaTable.vue';
  import upLodeModal from './upLodeModal.vue';

  import _ from 'underscore';
  export default {
    name: "TablePageLayout",
    components: {
      'vocaTable': VocaTable,
      'upLodeModal' : upLodeModal
    },
    props: {

      vocaProp: {
        type: Array,
        default: () => [{
          "english": "Hello",
          "korean": "안녕하세요"
        }]
      },
      tableHeaderProp: {
        type: Array,
        default: () => [{
          "english": "영어",
          "korean": "한글"
        }]
      }
    },
    data() {
      return {
        images: {
          smallcheck: require('../assets/smallcheck.png'),
        },
        fields: [{
            "class": "indexWidth",
            key: "index",
            label: ""
          },
          {
            "class": "vocaWidth",
            key: "english",
            label: this.tableHeaderProp[0].english
          },
          {
            "class": "vocaWidth",
            key: "korean",
            label: this.tableHeaderProp[0].korean
          }
        ],
        striped: false,
        small: false,
        bordered: true,
        blindEng: false,
        blindKor: false,
        blindZigzag: false,
        countTable: [],
        sliceVocaProps: [],
        isSuffle: false,
        showModal: false,
        image:"",
      }
    },
    mounted() {
      this.addTable()
    },
    methods: {
      showImg2: function(modalImage) {
        this.image = modalImage
        return this.image
      },
      addTable: function () {
        for (let tablePushNum = 0; tablePushNum < this.vocaProp.length / 50; tablePushNum++) {
          this.countTable.push("vocaTable")
        }
      },
      cutVoca: function (cut) {
        let slicedVoca
        slicedVoca = this.vocaProp.slice(50 * cut, 50 + 50 * cut)
        return slicedVoca
      },
    },
}
</script>
