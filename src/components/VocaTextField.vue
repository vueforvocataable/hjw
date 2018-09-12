<template>
  <div name="root" class="content">
    <b-container class="mt-2">
      <b-row>

        <b-col sm="8">
          <main class="main">
            <b-form-textarea autofocus id="inputField" no-resize :rows="15" :max-rows="15" v-model="text"/>
          </main>
        </b-col>
        
        <b-col sm="4">
          <aside class="aside">
            <b-button-group vertical size="sm" class="w-100 p-1">
              <b-button variant="primary" v-on:click="sendVocaToTable()">ConvertToVoca</b-button>
              <b-button variant="primary" v-on:click="downloadVoca()">SaveFile</b-button> 
              <b-form-file v-bind:state="isFileUploaded" ref="excelFileInput" v-on:change="excelToVoca()" accept=".xlsx" />
            </b-button-group>
          </aside>
        </b-col>

      </b-row>
      <b-row>
        <b-col>
              <!-- TODO: scroll 내리면 계속 나오게 -->
          <b-card-group columns class="mt-2">
            <b-card class="text-center" v-for="(remoteVoca, index) in remoteVocas" :key="index">
              <pre>{{remoteVoca.voca}}</pre>
            </b-card>
          </b-card-group>

        </b-col>
      </b-row>
    </b-container>
  
  </div>
</template>

<script>
  import {
    saveAs
  } from '@elastic/filesaver';
  import XLSX from 'xlsx';
  import axios from 'axios';

  export default {
    name: 'VocaTextField',
    data() {
      return {
        //텍스트 에이리어에 있는 텍스트를 담는 변수
        text: "test, 테스트 \nset, 설정",
        //텍스트를 리폼한 단어를 담는 변수
        voca: [],
        isFileUploaded: false,
        serverUrl: "http://localhost:5001",
        remoteVocas: []
      }
    },
    created() {
      this.getSavedDataOnLocalStorage();
      this.getVocas();
    },
    destroyed() {
      this.saveDataOnLocalStorage();
      this.postVocas(this.voca);
    },
    methods: {
      postVocas: function (voca) {
        if (!voca || voca.length < 1) return;
        let router = "/api/voca";

        let test ="";
        voca.forEach((x, index) => {
          test += `${voca[index].english}, ${voca[index].korean}\n`;
        });

        axios.post(this.serverUrl + router, {
          voca: test
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
           console.log(err);
          })
      },
      getVocas: function () {
        let router = "/api/voca";
  
        axios.get(this.serverUrl+router)
        .then((res) => {
            this.remoteVocas = res.data.vocas;
        })
        .catch((err) => {
          console.log(err);
        });

      },
      //입력받은 텍스트를 다듬은 후, 문자열 배열로 바꿔줌
      reformText: function (text) {
        text = text.replace(/\n/g, ",").split(',') //엔터값없애줌
          .map((item) => { //공백없애줌
            return item.trim();
          })
          .filter((item) => { //""값 없애줌
            return item != "";
          });

        return text;
      },
      //유저가 작성한 텍스트를 테이블에 보낼 형식으로 바꿔주는 함수
      formatTextToVoca: function (text) {
        let vocaObj = new Array();
        let cnt = 0;
        let englishItemTemp;

        text.forEach((item) => {
          cnt++;
          if (cnt % 2 == 1) {
            englishItemTemp = item;
          } else {
            vocaObj.push({
              "english": englishItemTemp,
              "korean": item
            });
          }
        });

        return vocaObj;
      },
      //버튼클릭시 App.vue로 값을 보냄
      sendVocaToTable: function () {
        this.text = this.reformText(this.text);
        this.voca = this.formatTextToVoca(this.text);

        //router에서 table로 값을 전달함
        this.$router.push({
          name: 'Table',
          params: {
            vocaProp: this.voca
          }
        });
      },
      //파일 저장 버튼 누르면 실행
      //텍스트 필드의 텍스트를 파일로 저장함
      downloadVoca: function () {
        if (this.text.length < 1) return;

        var blob = new Blob([this.text], {
          type: "text/plain;charset=utf-8"
        });
        saveAs(blob, "Voca.txt");
      },
      //로컬스토리지에 저장한 데이터를 가져옴
      getSavedDataOnLocalStorage: function () {
        let savedVocas = JSON.parse(localStorage.getItem('savedItems'));

        if (!savedVocas) return;

        this.text = "";
        savedVocas.forEach((item) => {
          this.text += `${item.english}, ${item.korean}\n`;
        })
      },
      //값을 전달하기전 로컬스토리지에 저장한다
      saveDataOnLocalStorage: function () {
        if (this.voca.length < 1) return;
        localStorage.setItem('savedItems', JSON.stringify(this.voca));
      },
      //엑셀파일을 텍스트필드에 사용할 형태로 바꿈
      excelToVoca: function () {
        let ref = this.$refs.excelFileInput;
        let uploadedFiles = ref.$refs.input.files[0];
        let reader = new FileReader();
        let self = this;

        if(uploadedFiles) this.isFileUploaded = true;

        reader.onload = function (e) {
          self.text = "";  
          let data = e.target.result;
          data = new Uint8Array(data);
          let workbook = XLSX.read(data, {
            type: "array"
          });

          /* DO SOMETHING WITH workbook HERE */
          let first_sheet_name = workbook.SheetNames[0];
          /* Get worksheet */
          let worksheet = workbook.Sheets[first_sheet_name];
          //It will prints with header and contents ex) Name, Home...
          let json = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
          });

          //Json to text
          let key = 0;
          let value = 1;
          json.forEach(x => {
            self.text += `${x[key]}, ${x[value]}\n`;
          })
        }
        reader.readAsArrayBuffer(uploadedFiles);
      }
    }
  }

</script>

<style scoped>
</style>
