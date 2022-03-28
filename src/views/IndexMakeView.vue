<template>
  <div class="indexbox">
    <h1>Makes List</h1>
    <div class="serch">
      <a-input-search
        v-model:value="value"
        placeholder="input search text"
        enter-button
        @search="onSearch"
        class="a"
      />
    </div>
    <div class="container">
      <div v-for="make in makes" :key="make.id" class="container-box">
        <p v-if="make.shitajiImage">
          <img
            v-bind:src="make.shitajiImage"
            alt="下地のイメージ"
            width="250"
            class="img"
          />
        </p>
        <div class="tag-box">
          <ListTag :name="hasBaseMakes(make)" tagName=" ベースメイク" />
          <ListTag :name="haspowderMakes(make)" tagName="パウダー" />
          <ListTag :name="hasEyeMakes(make)" tagName="アイメイク" />
          <ListTag :name="haslipMakes(make)" tagName="リップ" />
          <ListTag :name="hasotherMakes(make)" tagName="その他" />
        </div>

        <router-link :to="'/makes/' + make.id" class="detail"
          >More →</router-link
        >
      </div>
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
.detail {
  color: #110300;
  font-weight: bold;
  font-size: 16px;
}
.a {
  width: 500px;
}
.img {
  border: solid;
  border-color: #ffffff;
}
.detail:hover {
  color: rgb(156, 26, 65);
  padding-left: 1em;
  transition: 0.5s all;
}
h1 {
  width: 300px;
  border-bottom: 1px solid;
  padding-bottom: 10px;
}
.serch {
  margin: 20px;
}
.indexbox {
  position: absolute;
  top: 10%;
  width: 100%;
}
.container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
.container-box {
  width: 20%;
  margin: 20px;
  padding: 20px;
  background-color: #bf8e8a49;
  height: auto;
}
.tag-box {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 15px;
  margin-left: 8%;
  font-size: 15px;
}
.tag-name {
  width: 40%;
  font-size: 14px;
  margin: 3px;
  padding: 5px;
  border-radius: 20px;
  background-color: white;
  color: rgb(41, 30, 36);
}
</style>
