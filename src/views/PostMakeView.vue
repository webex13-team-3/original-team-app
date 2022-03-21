<template>
  <div class="Post">
    <h1>新規投稿</h1>
  </div>

  <b>ベース</b>
  <section class="base">
    <div class="shitaji">
      <h3>下地</h3>
      <input type="text" v-model="shitajiName" placeholder="商品名を入力" />
      <input type="text" v-model="shitajiComment" placeholder="コメント" />

      <!-- 画像だけが選択できるように accept を設定する -->
      <!-- アップロード中は disabled で選択できないようにする -->
      <!-- v-bind:srcを変える -->
      <img
        v-bind:src="shitajiImage"
        alt="下地のイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
      />
      <!-- nameを変える -->
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="shitaji"
      />
      <span>{{ message }}</span>
    </div>
    <div>
      <div v-for="image in images" :key="image.id">
        <img :src="image.url" :alt="image.name" />
        <div>{{ image.name }}</div>
      </div>
    </div>

    <div class="fandation">
      <h3>ファンデーション</h3>
      <input type="text" v-model="fandationName" placeholder="商品名を入力" />
      <input type="text" v-model="fandationComment" placeholder="コメント" />
      <img
        v-bind:src="fandationImage"
        alt="下地のイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="fandation"
      />
    </div>
    <div class="concealer">
      <h3>コンシーラー</h3>
      <input type="text" v-model="concealerName" placeholder="商品名を入力" />
      <input type="text" v-model="concealerComment" placeholder="コメント" />
      <input type="text" v-model="concealerImage" placeholder="画像" />
    </div>

    <div class="powder">
      <h3>フェイスパウダー</h3>
      <input type="text" v-model="powderName" placeholder="商品名を入力" />
      <input type="text" v-model="powderComment" placeholder="コメント" />
      <input type="text" v-model="powderImage" placeholder="画像" />
    </div>
  </section>
  <section class="face">
    <b>フェイス</b>
    <div class="cheek">
      <h3>チーク</h3>
      <input type="text" v-model="cheeknName" placeholder="商品名を入力" />
      <input type="text" v-model="cheekComment" placeholder="コメント" />
      <input type="text" v-model="cheekImage" placeholder="画像" />
    </div>
    <div class="highlight">
      <h3>ハイライト</h3>
      <input type="text" v-model="highlightName" placeholder="商品名を入力" />
      <input type="text" v-model="highlightComment" placeholder="コメント" />
      <input type="text" v-model="highlightImage" placeholder="画像" />
    </div>

    <div class="shading">
      <h3>シェーディング</h3>
      <input type="text" v-model="shadingName" placeholder="商品名を入力" />
      <input type="text" v-model="shadingComment" placeholder="コメント" />
      <input type="text" v-model="shadingImage" placeholder="画像" />
    </div>
  </section>

  <section class="eye">
    <b>アイ</b>
    <div class="eyeshadow">
      <h3>アイシャドウ</h3>
      <input type="text" v-model="eyeshadowName" placeholder="商品名を入力" />
      <input type="text" v-model="eyeshadowComment" placeholder="コメント" />
      <input type="text" v-model="eyeshadowImage" placeholder="画像" />
    </div>

    <div class="mascara">
      <h3>マスカラ</h3>
      <input type="text" v-model="mascaraName" placeholder="商品名を入力" />
      <input type="text" v-model="mascaraComment" placeholder="コメント" />
      <input type="text" v-model="mascaraImage" placeholder="画像" />
    </div>

    <div class="eyeline">
      <h3>アイライン</h3>
      <input type="text" v-model="eyelineName" placeholder="商品名を入力" />
      <input type="text" v-model="eyelineComment" placeholder="コメント" />
      <input type="text" v-model="eyelineImage" placeholder="画像" />
    </div>

    <div class="eyeblow">
      <h3>アイブロウ</h3>
      <input type="text" v-model="eyeblowName" placeholder="商品名を入力" />
      <input type="text" v-model="eyeblowComment" placeholder="コメント" />
      <input type="text" v-model="eyeblowImage" placeholder="画像" />
    </div>
  </section>
  <section class="lip">
    <b>リップ</b>
    <div class="lip1">
      <h3>リップ①</h3>
      <input type="text" v-model="lip1Name" placeholder="商品名を入力" />
      <input type="text" v-model="lip1Comment" placeholder="コメント" />
      <input type="text" v-model="lip1Image" placeholder="画像" />
    </div>
    <div class="lip2">
      <h3>リップ②</h3>
      <input type="text" v-model="lip2Name" placeholder="商品名を入力" />
      <input type="text" v-model="lip2Comment" placeholder="コメント" />
      <input type="text" v-model="lip2Image" placeholder="画像" />
    </div>
  </section>
  <button v-on:click="postMake" class="form__submit-button">送信</button>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "../firebase"

export default {
  data() {
    return {
      // ベース
      shitajiName: "ベース ネーム",
      shitajiComment: "ベース コメント",
      shitajiImage: "https://via.placeholder.com/500x500",
      fandationName: "ベース ネーム",
      fandationComment: "ベース コメント",
      fandationImage: "https://via.placeholder.com/500x500",
      concealerName: "ベース ネーム",
      concealerComment: "ベース コメント",
      concealerImage: "https://via.placeholder.com/500x500",
      powderName: "ベース ネーム",
      powderComment: "ベース コメント",
      powderImage: "https://via.placeholder.com/500x500",
      // フェイス
      cheekName: "フェイス ネーム",
      cheekComment: "フェイス コメント",
      cheekImage: "https://via.placeholder.com/500x500",
      highlightName: "フェイス ネーム",
      highlightComment: "フェイス コメント",
      highlightImage: "https://via.placeholder.com/500x500",
      shadingName: "フェイス ネーム",
      shadingComment: "フェイス コメント",
      shadingImage: "https://via.placeholder.com/500x500",
      // アイ
      eyeshadowName: "アイ ネーム",
      eyeshadowComment: "アイ コメント",
      eyeshadowImage: "https://via.placeholder.com/500x500",
      mascaraName: "アイ ネーム",
      mascaraComment: "アイ コメント",
      mascaraImage: "https://via.placeholder.com/500x500",
      eyelineName: "アイ ネーム",
      eyelineComment: "アイ コメント",
      eyelineImage: "https://via.placeholder.com/500x500",
      eyeblowName: "アイ ネーム",
      eyeblowComment: "アイ コメント",
      eyeblowImage: "https://via.placeholder.com/500x500",
      // リップ
      lip1Name: "リップ ネーム",
      lip1Comment: "リップ コメント",
      lip1Image: "https://via.placeholder.com/500x500",
      lip2Name: "リップ ネーム",
      lip2Comment: "リップ コメント",
      lip2Image: "https://via.placeholder.com/500x500",
    }
  },
  methods: {
    postMake() {
      const make = {
        //ベース
        shitajiName: this.shitajiName,
        shitajiComment: this.shitajiComment,
        shitajiImage: this.shitajiImage,
        fandationName: this.fandationName,
        fandationComment: this.fandationComment,
        fandationImage: this.fandationImage,
        concealerName: this.concealerName,
        concealerComment: this.concealerComment,
        concealerImage: this.concealerImage,
        powderName: this.powderName,
        powderComment: this.powderComment,
        powderImage: this.powderImage,
        //フェイス
        cheekName: this.cheekName,
        cheekComment: this.cheekComment,
        cheekImage: this.cheekImage,
        highlightName: this.highlightName,
        highlightComment: this.highlightComment,
        highlightImage: this.highlightImage,
        shadingName: this.shadingName,
        shadingComment: this.shadingComment,
        shadingImage: this.shadingImage,

        //アイ
        eyeshadowName: this.eyeshadowName,
        eyeshadowComment: this.eyeshadowComment,
        eyeshadowImage: this.eyeshadowImage,
        mascaraName: this.mascaraName,
        mascaraComment: this.mascaraComment,
        mascaraImage: this.mascaraImage,
        eyelineName: this.eyelineName,
        eyelineComment: this.eyelineComment,
        eyelineImage: this.eyelineImage,
        eyeblowName: this.eyeblowName,
        eyeblowComment: this.eyeblowComment,
        eyeblowImage: this.eyeblowImage,

        //リップ
        lip1Name: this.lip1Name,
        lip1Comment: this.lip1Comment,
        lip1Image: this.lip1Image,
        lip2Name: this.lip2Name,
        lip2Comment: this.lip2Comment,
        lip2Image: this.lip2Image,
      }
      addDoc(collection(db, "makes"), make).then((ref) => {
        this.makes.push({
          id: ref.id,
          ...make,
        })
      })
    },
    onFileChange(e) {
      const file = e.target.files[0]
      /**
       * firestorage のどこにどういうファイル名で保存するかを参照する Ref を作る。
       * 参考：https://firebase.google.com/docs/storage/web/create-reference?hl=ja&authuser=0#create_a_reference
       */
      const createdAt = new Date()
      // 同じ名前のファイルと区別できるように createdAt.getTime() を追加して、ユニークなファイル名をつける
      const uniqueFileName = createdAt.getTime() + "_" + file.name
      const fileRef = ref(storage, "images/" + uniqueFileName)
      /**
       * uploadBytes() を使って、ファイルをfirstorageにアップロードする
       * その後、画像のURLを取得してfirestoreのデータベースに保存する
       * 参考：https://firebase.google.com/docs/storage/web/upload-files?hl=ja&authuser=0#upload_from_a_blob_or_file
       */
      uploadBytes(fileRef, file)
        // この時点でファイルのアップロードは完了している。
        // snapshot.getDownloadURL(fileRef) でアップロードしたRefのURLを取得する。
        .then(() => {
          return getDownloadURL(fileRef)
        })
        .then((url) => {
          if (e.target.name === "shitaji") {
            this.shitajiImage = url
          }
          if (e.target.name === "fandation") {
            this.fandationImage = url
          }
          // 他のも足していく...
        })
    },
  },
}
</script>
<style scoped></style>
