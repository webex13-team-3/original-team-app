<template>
  <h1>一覧</h1>
  <input v-model="serchWord" placeholder="キーワード検索" />
  <button v-on:click="postSerch(serchWord)">検索</button>
  <div class="container">
    <div v-for="make in makes" :key="make.id" class="container-box">
      <p v-if="make.shitajiImage">
        <img v-bind:src="make.shitajiImage" alt="下地のイメージ" width="200" />
      </p>
      <div class="tag-box">
        <ListTag :name="hasBaseMakes(make)" tagName=" ベースメイク" />
        <ListTag :name="haspowderMakes(make)" tagName="パウダー" />
        <ListTag :name="hasEyeMakes(make)" tagName="アイメイク" />
        <ListTag :name="haslipMakes(make)" tagName="リップ" />
        <ListTag :name="hasotherMakes(make)" tagName="その他" />
      </div>

      <router-link :to="'/makes/' + make.id">もっとみる</router-link>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"
import ListTag from "../components/ListTag.vue"

export default {
  data() {
    return {
      makes: [{}],
      serchWord: "",
    }
  },
  computed: {
    hasEyeMakes() {
      return function (make) {
        if (
          make.eyeshadowName ||
          make.mascaraName ||
          make.eyeblowName ||
          make.eyelineName
        ) {
          return true
        } else {
          return false
        }
      }
    },
    hasBaseMakes() {
      return function (make) {
        if (
          make.shitajiName ||
          make.fandationName ||
          make.concealerName ||
          make.powderName
        ) {
          return true
        } else {
          return false
        }
      }
    },
    haspowderMakes() {
      return function (make) {
        if (
          make.highlightName || make.cheekName ||make.shadingName ) {
          return true
        } else {
          return false
        }
      }
    },
    haslipMakes() {
      return function (make) {
        if (make.lip1Name || make.lip2Name) {
          return true
        } else {
          return false
        }
      }
    },
    hasotherMakes() {
      return function (make) {
        if (make.otherName) {
          return true
        } else {
          return false
        }
      }
    },
  },
  // methods: {
  //   postSerch(i) {},
  // },
  created() {
    getDocs(collection(db, "makes")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.makes.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
  components: {
    ListTag,
  },
}
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
}
.container-box {
  width: 30%;
  margin: 20px;
}
.tag-box {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 35px;
}
.tag-name {
  border: 3px solid;
  border-color: #eeb4a8;
  width: 25%;
  margin: 3px;
  padding: 4px;
  border-radius: 10%;
}
</style>
