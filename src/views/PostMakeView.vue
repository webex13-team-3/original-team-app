<template>
  <div class="Post">
    <h1>投稿ページ</h1>
  </div>
  <section>
    <input type="text" v-model="inputValueName" />
    <br />
    <input type="text" v-model="inputValueComment" />
    <br />
    <input type="text" v-model="inputValueImage" />
    <button v-on:click="postMake" class="form__submit-button">投稿</button>
  </section>
  <div>
    <p v-for="make in makes" :key="make.id">
      {{ make.shitajiName }}
      <br />
      {{ make.shitajiComment }}
      <br />
      {{ make.shitajiImage }}
    </p>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      makes: [{}],
    }
  },
  methods: {
    postMake() {
      const make = {
        shitajiName: this.inputValueName,
        shitajiComment: this.inputValueComment,
        shitajiImage: this.inputValueImage,
      }
      addDoc(collection(db, "makes"), make).then((ref) => {
        this.makes.push({
          id: ref.id,
          ...make,
        })
      })
    },
  },
}
</script>
