<template>
  <div class="Post">
    新規投稿
  </div>
 
  <div class="bundle">ベース</div>
  <section class="base">
    <div class="shitaji">
    <div class="title">下地</div>
      <a-input type="text" v-model="shitajiName" placeholder="商品名を入力" how-count :maxlength="100" class ="Name"/>
      <a-input type="text" v-model="shitajiComment" placeholder="コメント" how-count :maxlength="300" class="Comment"/>

      <!-- 画像だけが選択できるように accept を設定する -->
      <!-- アップロード中は disabled で選択できないようにする -->
      <!-- v-bind:srcを変える -->
      <img
        v-bind:src="shitajiImage"
        alt="下地のイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
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
      <div class="title">ファンデーション</div>
      <a-input type="text" 
      v-model="fandationName" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="fandationComment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
      <img
        v-bind:src="fandationImage"
        alt="ファンデーションのイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="fandation"
      />
    </div>
    <div class="concealer">
      <div class="title">コンシーラー</div>
      <a-input type="text" 
      v-model="concealerName" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="concealerComment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
      <img
        v-bind:src="concealerImage"
        alt="コンシーラーのイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="concealer"
      />
    </div>

    <div class="powder">
      <div class="title">フェイスパウダー</div>
      <a-input type="text" 
      v-model="powderName" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="powderComment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
     <img
        v-bind:src="powderImage"
        alt="パウダーのイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="powder"
      />
    </div>
  </section>
  
    <div class="bundle">フェイス</div>
  <section class="face">
    <div class="cheek">
      <div class="title">チーク</div>
      <a-input type="text" 
      v-model="cheeknName" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="cheekComment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
     <img
        v-bind:src="cheekImage"
        alt="チークのイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="cheek"
      />
    </div>
    <div class="highlight">
      <div class="title">ハイライト</div>
      <a-input type="text" 
      v-model="highlightName" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="highlightComment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
     <img
        v-bind:src="highlightImage"
        alt="ハイライトのイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="highlight"
      />
    </div>

    <div class="shading">
      <div class="title">シェーディング</div>
      <a-input type="text" 
      v-model="shadingName" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="shadingComment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
      <img
        v-bind:src="shadingImage"
        alt="シェーディングのイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="shading"
      />
    </div>
  </section>

    <div class="bundle">アイ</div>
  <section class="eye">
    <div class="eyeshadow">
      <div class="title">アイシャドウ</div>
      <a-input type="text" 
      v-model="eyeshadowName" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="eyeshadowComment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
      <img
        v-bind:src="eyeshadowImage"
        alt="アイシャドウのイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="eyeshadow"
      />
    </div>

    <div class="mascara">
      <div class="title">マスカラ</div>
      <a-input type="text" 
      v-model="mascaraName" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="mascaraComment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
      <img
        v-bind:src="mascaraImage"
        alt="マスカラのイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="mascara"
      />
    </div>

    <div class="eyeline">
      <div class="title">アイライン</div>
      <a-input type="text" 
      v-model="eyelineName" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="eyelineComment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
      <img
        v-bind:src="eyelineImage"
        alt="アイラインのイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="eyeline"
      />
    </div>

    <div class="eyeblow">
      <div class="title">アイブロウ</div>
      <a-input type="text" 
      v-model="eyeblowName" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="eyeblowComment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
      <img
        v-bind:src="eyeblowImage"
        alt="アイブロウのイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="eyeblow"
      />
    </div>
  </section>
  
    <div class="bundle">リップ</div>
  <section class="lip">
    <div class="lip1">
      <div class="title">リップ①</div>
      <a-input type="text" 
      v-model="lip1Name" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="lip1Comment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
      <img
        v-bind:src="lip1Image"
        alt="リップ1のイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="lip1"
      />
    </div>
    <div class="lip2">
      <div class="title">リップ②</div>
      <a-input type="text" 
      v-model="lip2Name" placeholder="商品名を入力" 
      how-count :maxlength="20" class ="Name"/>
      <a-input type="text" 
      v-model="lip2Comment" placeholder="コメント" 
      how-count :maxlength="200" class="Comment"/>
     <img
        v-bind:src="lip2Image"
        alt="リップ2のイメージ"
        width="100"
        height="100"
        style="object-fit: cover"
        class="picture"
      />
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        name="lip2"
      />
    </div>
  </section>
  <a-button v-on:click="postMake" class="form__submit-button" type="dashed">送信</a-button>
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
      shitajiImage: "",
      fandationName: "ベース ネーム",
      fandationComment: "ベース コメント",
      fandationImage: "",
      concealerName: "ベース ネーム",
      concealerComment: "ベース コメント",
      concealerImage: "",
      powderName: "ベース ネーム",
      powderComment: "ベース コメント",
      powderImage: "",
      // フェイス
      cheekName: "フェイス ネーム",
      cheekComment: "フェイス コメント",
      cheekImage: "",
      highlightName: "フェイス ネーム",
      highlightComment: "フェイス コメント",
      highlightImage: "",
      shadingName: "フェイス ネーム",
      shadingComment: "フェイス コメント",
      shadingImage: "",
      // アイ
      eyeshadowName: "アイ ネーム",
      eyeshadowComment: "アイ コメント",
      eyeshadowImage: "",
      mascaraName: "アイ ネーム",
      mascaraComment: "アイ コメント",
      mascaraImage: "",
      eyelineName: "アイ ネーム",
      eyelineComment: "アイ コメント",
      eyelineImage: "",
      eyeblowName: "アイ ネーム",
      eyeblowComment: "アイ コメント",
      eyeblowImage: "",
      // リップ
      lip1Name: "リップ ネーム",
      lip1Comment: "リップ コメント",
      lip1Image: "",
      lip2Name: "リップ ネーム",
      lip2Comment: "リップ コメント",
      lip2Image: "",
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
          if (e.target.name === "concealer") {
            this.concealerImage = url
          }
          if (e.target.name === "powder") {
            this.powderImage = url
          }
          if (e.target.name === "cheek") {
            this.cheekImage = url
          }
          if (e.target.name === "highlight") {
            this.highlightImage = url
          }
          if (e.target.name === "shading") {
            this.shadingImage = url
          }
          if (e.target.name === "eyeshadow") {
            this.eyeshadowImage = url
          }
          if (e.target.name === "mascara") {
            this.mascaraImage = url
          }
          if (e.target.name === "eyeline") {
            this.eyelineImage = url
          }
          if (e.target.name === "eyeblow") {
            this.eyeblowImage = url
          }
          if (e.target.name === "lip1") {
            this.lip1Image = url
          }
          if (e.target.name === "lip2") {
            this.lip2Image = url
          }
          // 他のも足していく...
        })
    },
  },
}

</script>
<style scoped>
.Post{
  padding:30px;
  font-size: 30px;
  color:#766262;

}
section{
  margin: 50px;
  padding:20px;
  border-radius: 50px;
  background-color:#ECECEC ;
}
.bundle{
  font-size: 20px;
  font-weight: bold;
}
.title{
  font-size: 15px;
}
.Name{
  width: 229px;
  height:38px
}
.Comment{ 
    width: 280px;
    height: 82px;
    margin: 0rem 5rem 0rem 5rem;
}
.picture{
  margin-right:8px;
}
.form__submit-button{
  font-size:20px
}
</style>
