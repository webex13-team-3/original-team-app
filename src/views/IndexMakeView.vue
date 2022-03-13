<template>
  <h1>一覧ページ</h1>
  <div class="container">
    <div v-for="make in makes" :key="make.id" class="container-box">
      <p>
        <img v-bind:src="make.shitajiImage" alt="下地のイメージ" width="200" />
      </p>
      <div class="tag-box">
        <p
          v-if="
            make.shitajiName ||
            make.concealerName ||
            make.shadingName ||
            make.highlightName
          "
          class="tag-name"
        >
          ベースメイク
        </p>
        <p v-if="make.powderName || make.cheekName" class="tag-name">
          パウダー
        </p>
        <ListTag
          :name="hasEyeMakes(make)"
          tagName="アイメイク"
          class="tag-name"
        />

        <p v-if="make.lipName" class="tag-name">リップ</p>
        <p v-if="make.otherName" class="tag-name">その他</p>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

export default {
  data() {
    return {
      makes: [],
    }
  },
  computed() {
    hasEyeMakes() {
      return function (make) {
      if (make.eyeShadowName || make.mascaraName || make.eyeblowName) return true
      return false
      }
    }
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
