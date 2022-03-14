<template>
  <div class="Post">
    <h1>投稿ページ</h1>
  </div>
  <section>
    <input type="text" v-model="inputValue" />
    <button v-on:click="postTweet" class="form__submit-button">投稿</button>
  </section>
  <div>
    <p v-for="tweet in tweets" :key="tweet.id">
      {{ inputValue }}
    </p>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      tweets: [
        {
          id: "",
          inputValue: "",
        },
      ],
    }
  },
  methods: {
    postTweet() {
      const tweet = {
        inputValue: "",
      }
      addDoc(collection(db, "tweets"), tweet).then((ref) => {
        this.tweets.push({
          id: ref.id,
          ...tweet,
        })
      })
    },
  },
}
</script>
