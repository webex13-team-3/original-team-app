<template>
  <h1>一覧ページ</h1>
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
      <a :href="'/makes/' + make.id">もっとみる</a>
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
      makes: [],
    }
  },
  computed: {
    hasEyeMakes() {
      return function (make) {
        if (make.eyeShadowName || make.mascaraName || make.eyeblowName) {
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
          make.concealerName ||
          make.shadingName ||
          make.highlightName
        ) {
          return true
        } else {
          return false
        }
      }
    },
    haspowderMakes() {
      return function (make) {
        if (make.powderName || make.cheekName) {
          return true
        } else {
          return false
        }
      }
    },
    haslipMakes() {
      return function (make) {
        if (make.lipName) {
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
  methods: {},
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
