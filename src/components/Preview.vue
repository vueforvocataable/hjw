<template>
  <b-container>
    <b-row>
      <b-col>
        <b-table :fields="fields" :items="tableMake.slice(0 + (vocaPagination - 1) * 50, 25 + (vocaPagination - 1) * 50)"
          :small="small" :striped="striped" :bordered="bordered">
          <template slot="index" slot-scope="data"> {{data.index + 1 +(vocaPagination - 1) * 50}} </template>
          <template v-if="!blindEng" slot="english" slot-scope="data"> {{data.item.english}} </template>
          <template v-if="!blindKor" slot="korean" slot-scope="data"> {{data.item.korean}} </template>
        </b-table>
      </b-col>
      <b-col>
        <b-table :v-model="this.fields.label" :fields="fields" :items="tableMake.slice(25 + (vocaPagination - 1) * 50, 50 + (vocaPagination - 1) * 50)"
          :small="small" :striped="striped" :bordered="bordered">
          <template slot="index" slot-scope="data"> {{data.index + 26 + (vocaPagination - 1) * 50}} </template>
          <template v-if="!blindEng" slot="english" slot-scope="data"> {{data.item.english}} </template>
          <template v-if="!blindKor" slot="korean" slot-scope="data"> {{data.item.korean}} </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import _ from 'underscore';
  export default {
    name: "Table",
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
    watch: {
      vocaProp: function () {
        this.init()
      },
      tableHeaderProp: function (header) {
        this.fields.splice(1, 1, {
          "class": "vocaWidth",
          key: "english",
          label: header[0].english
        })
        this.fields.splice(2, 1, {
          "class": "vocaWidth",
          key: "korean",
          label: header[0].korean
        })
      }
    },
    data() {
      return {
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
        vocas: "",
        tableMake: "",
        vocaPagination: 1,
        striped: false,
        small: false,
        bordered: true,
        blindEng: false,
        blindKor: false,
      }
    },
    //@desc: 테이블이 생성될때 들어오는 값
    //@params:
    //@returns: 
    created() {
      this.init();
    },
    //vocas 랜덤으로 섞기
    methods: {
      shuffle: function () {
        let suffled = _.shuffle(this.vocas);
        this.tableMake.splice(0, suffled.length, ...suffled);
      },
      //테이블 공백 채우기 예: 실제 단어 1개 + 공백 49개...
      init: function () {
        //공백 만들 개수 생성.
        let emptyArr = Math.floor(this.vocaProp.length / 50) + 1;
        emptyArr = emptyArr * 50;
        this.tableMake = new Array(emptyArr).fill({
          "english": "",
          "korean": ""
        });
        this.fillTableContent()
      },
      //단어를 넣어줌.
      fillTableContent: function () {
        this.vocas = this.vocaProp;
        for (let i = 0; i < this.vocas.length; i++) {
          this.tableMake.splice(i, 1, this.vocas[i])
        }
      }
    },
  }
</script>