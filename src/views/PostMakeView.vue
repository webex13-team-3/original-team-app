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
      <input
        type="file"
        accept="image/*"
        :disabled="disabled"
        @change="onFileChange"
      />
      <span>{{ message }}</span>
    </div>
    <button @click="getImages">更新</button>
    <div>
      <div v-for="image in images" :key="image.id">
        <img :src="image.url" :alt="image.name" />
        <div>{{ image.name }}</div>
      </div>
    </div>
    <div>
      <p v-for="make in makes" :key="make.id">
        {{ make.shitajiName }}
        {{ make.shitajiComment }}
        {{ make.shitajiImage }}
      </p>
    </div>

    <div class="fandation">
      <h3>ファンデーション</h3>
      <input type="text" v-model="fandationName" placeholder="商品名を入力" />
      <input type="text" v-model="fandationComment" placeholder="コメント" />
      <input type="text" v-model="fandationImage" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.fandationName }}
          {{ make.fandationComment }}
          {{ make.fandationImage }}
        </p>
      </div>
    </div>
    <div class="concealer">
      <h3>コンシーラー</h3>
      <input type="text" v-model="concealerName" placeholder="商品名を入力" />
      <input type="text" v-model="concealerComment" placeholder="コメント" />
      <input type="text" v-model="concealerImage" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.concealerName }}
          {{ make.concealerComment }}
          {{ make.concealerImage }}
        </p>
      </div>
    </div>

    <div class="powder">
      <h3>フェイスパウダー</h3>
      <input type="text" v-model="powderName" placeholder="商品名を入力" />
      <input type="text" v-model="powderComment" placeholder="コメント" />
      <input type="text" v-model="powderImage" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.powderName }}
          {{ make.powderComment }}
          {{ make.powderImage }}
        </p>
      </div>
    </div>
  </section>
  <section class="face">
    <b>フェイス</b>
    <div class="cheek">
      <h3>チーク</h3>
      <input type="text" v-model="cheeknName" placeholder="商品名を入力" />
      <input type="text" v-model="cheekComment" placeholder="コメント" />
      <input type="text" v-model="cheekImage" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.cheekName }}
          {{ make.cheekComment }}
          {{ make.cheekImage }}
        </p>
      </div>
    </div>
    <div class="highlight">
      <h3>ハイライト</h3>
      <input type="text" v-model="highlightName" placeholder="商品名を入力" />
      <input type="text" v-model="highlightComment" placeholder="コメント" />
      <input type="text" v-model="highlightImage" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.highlightName }}
          {{ make.highlightComment }}
          {{ make.highlightImage }}
        </p>
      </div>
    </div>
    <div class="shading">
      <h3>シェーディング</h3>
      <input type="text" v-model="shadingName" placeholder="商品名を入力" />
      <input type="text" v-model="shadingComment" placeholder="コメント" />
      <input type="text" v-model="shadingImage" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.shadingName }}
          {{ make.shadingComment }}
          {{ make.shadingImage }}
        </p>
      </div>
    </div>
  </section>
  <section class="eye">
    <b>アイ</b>
    <div class="eyeshadow">
      <h3>アイシャドウ</h3>
      <input type="text" v-model="eyeshadowName" placeholder="商品名を入力" />
      <input type="text" v-model="eyeshadowComment" placeholder="コメント" />
      <input type="text" v-model="eyeshadowImage" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.eyeshadowName }}
          {{ make.eyeshadowComment }}
          {{ make.eyeshadowImage }}
        </p>
      </div>
    </div>
    <div class="mascara">
      <h3>マスカラ</h3>
      <input type="text" v-model="mascaraName" placeholder="商品名を入力" />
      <input type="text" v-model="mascaraComment" placeholder="コメント" />
      <input type="text" v-model="mascaraImage" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.mascaraName }}
          {{ make.mascaraComment }}
          {{ make.mascaraImage }}
        </p>
      </div>
    </div>
    <div class="eyeline">
      <h3>アイライン</h3>
      <input type="text" v-model="eyelineName" placeholder="商品名を入力" />
      <input type="text" v-model="eyelineComment" placeholder="コメント" />
      <input type="text" v-model="eyelineImage" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.eyelineName }}
          {{ make.eyelineComment }}
          {{ make.eyelineImage }}
        </p>
      </div>
    </div>
    <div class="eyeblow">
      <h3>アイブロウ</h3>
      <input type="text" v-model="eyeblowName" placeholder="商品名を入力" />
      <input type="text" v-model="eyeblowComment" placeholder="コメント" />
      <input type="text" v-model="eyeblowImage" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.eyeblowName }}
          {{ make.eyeblowComment }}
          {{ make.eyeblowImage }}
        </p>
      </div>
    </div>
  </section>
  <section class="lip">
    <b>リップ</b>
    <div class="lip1">
      <h3>リップ①</h3>
      <input type="text" v-model="lip1Name" placeholder="商品名を入力" />
      <input type="text" v-model="lip1Comment" placeholder="コメント" />
      <input type="text" v-model="lip1Image" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.lip1Name }}
          {{ make.lip1Comment }}
          {{ make.lip1Image }}
        </p>
      </div>
    </div>
    <div class="lip2">
      <h3>リップ②</h3>
      <input type="text" v-model="lip2Name" placeholder="商品名を入力" />
      <input type="text" v-model="lip2Comment" placeholder="コメント" />
      <input type="text" v-model="lip2Image" placeholder="画像" />

      <div>
        <p v-for="make in makes" :key="make.id">
          {{ make.lip2Name }}
          {{ make.lip2Comment }}
          {{ make.lip2Image }}
        </p>
      </div>
    </div>
  </section>
  <button v-on:click="postMake" class="form__submit-button">送信</button>
</template>

<script>
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore"
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
  },
  getImages() {
    /**
     * firestore の images コレクションを示す クエリ を作成する。
     * クエリとは、データベースに対して「これでデータを取得してください!」と示すもの。
     * Googleで検索する時のキーワードの羅列のイメージ。
     * 参考：https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja#get_multiple_documents_from_a_collection
     * 参考：https://firebase.google.com/docs/firestore/query-data/queries?hl=ja#execute_a_query
     */

    const imagesQuery = query(
      collection(db, "images"),
      orderBy("createdAt"),
      limit(5)
    )
    getDocs(imagesQuery).then((collection) => {
      this.images = collection.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      // 上は下のコードと同じ意味
      // map については Array.prototype.map で調べてみてください
      // ... はスプレッド構文と言いオブジェクトのプロパティを展開してくれます。
      // const images = [];
      // for (let i = 0;i < images.length;i++) {
      //   images.push({
      //     id: doc.id,
      //     name: doc.data().name,
      //     url: doc.data().url,
      //     createdAt:  doc.data().createdAt
      //   });
      // }
      // this.images = images;
    })
  },
  mounted() {
    this.getImages()
  },
}
</script>
<style scoped></style>
