<template>
  <div class="Post">
    <h1>投稿ページ</h1>
  </div>
  <button v-on:click="postTweet" class="form__submit-button">投稿</button>
  <div>
    <p v-for="tweet in tweets" :key="tweet.id">
      {{ tweet.text }}
    </p>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      tweets: [
        //データが入る予定
        // {
        //   id: "",
        //   text: "",
        // },
      ],
    }
  },
  methods: {
    postTweet() {
      addDoc(collection(db, "tweets"), {
        text: "こんにちは、ツイートの本文です",
      })
    },
  },
  created() {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweets.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>
