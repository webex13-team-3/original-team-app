<template>
  <div class="detailbox">
    <h1>Detail</h1>
    <h2>{{ this.make.titleName }}</h2>
    <DetailShow class="show-image"></DetailShow>
    <div class="a">
      <div class="tag-box">
        <div class="tag-tab-title">
          <ListTag
            v-on:click="makeBase"
            :name="hasBaseMakes(make)"
            tagName=" ベースメイク"
          />
          <ListTag
            v-on:click="makePowder"
            :name="haspowderMakes(make)"
            tagName="パウダー"
          />
          <ListTag
            v-on:click="makeEye"
            :name="hasEyeMakes(make)"
            tagName="アイメイク"
          />
          <ListTag
            v-on:click="makeLip"
            :name="haslipMakes(make)"
            tagName="リップ"
          />
          <ListTag
            v-on:click="makeOther"
            :name="hasotherMakes(make)"
            tagName="その他"
          />
        </div>
        <div class="tab-tag-main">
          <div v-if="base">
            <p class="m">下地：{{ this.make.shitajiName }}</p>
            <p class="s">{{ this.make.shitajiComment }}</p>
            <p class="m">コンシーラー：{{ this.make.concealerName }}</p>
            <p class="s">{{ this.make.concealerComment }}</p>
            <p class="m">シェーディング：{{ this.make.shadingName }}</p>
            <p class="s">{{ this.make.shadingComment }}</p>
            <p class="m">ハイライト：{{ this.make.highlightName }}</p>
            <p class="s">{{ this.make.highlightComment }}</p>
          </div>
          <div v-else-if="powder">
            <p class="m">ファンデーション：{{ this.make.fandationName }}</p>
            <p class="s">{{ this.make.fandationComment }}</p>
            <p class="m">パウダー：{{ this.make.powderName }}</p>
            <p class="s">{{ this.make.powderComment }}</p>
            <p class="m">チーク：{{ this.make.cheekName }}</p>
            <p class="s">{{ this.make.cheekComment }}</p>
          </div>
          <div v-else-if="eye">
            <p class="m">アイライン：{{ this.make.eyelineName }}</p>
            <p class="s">{{ this.make.eyelineComment }}</p>
            <p class="m">アイシャドウ：{{ this.make.eyeShadowName }}</p>
            <p class="s">{{ this.make.eyeShadowComment }}</p>
            <p class="m">アイブロウ：{{ this.make.eyeblowName }}</p>
            <p class="s">{{ this.make.eyeblowComment }}</p>
            <p class="m">マスカラ：{{ this.make.mascaraName }}</p>
            <p class="s">{{ this.make.mascaraComment }}</p>
          </div>
          <div v-else-if="lip">
            <p class="m">リップ：{{ this.make.lip1Name }}</p>
            <p class="s">{{ this.make.lip1Comment }}</p>
            <p class="m">リップ：{{ this.make.lip2Name }}</p>
            <p class="s">{{ this.make.lip2Comment }}</p>
          </div>
          <div v-else-if="other">
            <p class="m">その他：{{ this.make.otherName }}</p>
            <p class="s">{{ this.make.otherComment }}</p>
          </div>
          <div v-else>
            <p class="m">下地：{{ this.make.shitajiName }}</p>
            <p class="s">{{ this.make.shitajiComment }}</p>
            <p class="m">コンシーラー：{{ this.make.concealerName }}</p>
            <p class="s">{{ this.make.concealerComment }}</p>
            <p class="m">シェーディング：{{ this.make.shadingName }}</p>
            <p class="s">{{ this.make.shadingComment }}</p>
            <p class="m">ハイライト：{{ this.make.highlightName }}</p>
            <p class="s">{{ this.make.highlightComment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import DetailShow from "@/components/DetailShow.vue"
import ListTag from "../components/ListTag.vue"

export default {
  data() {
    return {
      make: null,
      base: false,
      powder: false,
      eye: false,
      lip: false,
      other: false,
    }
  },
  created() {
    getDoc(doc(db, "makes", this.$route.params.id)).then((doc) => {
      this.make = doc.data()
    })
  },
  components: {
    DetailShow,
    ListTag,
  },
  computed: {
    hasEyeMakes() {
      return function (make) {
        if (
          make.eyeShadowName ||
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
        if (make.powderName || make.cheekName || make.fandationName) {
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
  methods: {
    makeBase() {
      this.base = true
      this.powder = false
      this.eye = false
      this.lip = false
      this.other = false
    },
    makePowder() {
      this.base = false
      this.powder = true
      this.eye = false
      this.lip = false
      this.other = false
    },
    makeEye() {
      this.base = false
      this.powder = false
      this.eye = true
      this.lip = false
      this.other = false
    },
    makeLip() {
      this.base = false
      this.powder = false
      this.eye = false
      this.lip = true
      this.other = false
    },
    makeOther() {
      this.base = false
      this.powder = false
      this.eye = false
      this.lip = false
      this.other = true
    },
  },
}
</script>

<style scoped>
.m {
  font-weight: bold;
  font-size: 17px;
}
.s {
  margin-top: 5px;
  margin-bottom: 30px;
}
.show-image {
  position: absolute;
  right: 8%;
  width: 30vw;
  height: 30vh;
}
.tag-box {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.tag-tab-title {
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 10%;
  width: 600px;
}
.tab-tag-main {
  margin-left: 100px;
  text-align: left;
}
.tag-name {
  border: 3px solid;
  border-color: #eeb4a8;
  background-color: rgba(255, 255, 255, 0.589);
  width: 7rem;
  margin: 3px;
  padding: 4px;
  border-radius: 30px;
}
.a {
  background-color: #f6efe7;
  height: auto;
  width: 55rem;
  margin-top: 5%;
  margin-left: 5%;
  border-radius: 30px;
}
.detailbox {
  position: absolute;
  top: 10%;
  width: 100%;
}
h1 {
  width: 300px;
}
h1:before {
  content: "";
  position: absolute;
  left: 0;
  top: 8%;
  border-bottom: solid 1.8px #000;
  animation: border_anim 1s linear forwards;
}

@keyframes border_anim {
  0% {
    width: 0%;
  }
  100% {
    width: 20%;
  }
}

h2 {
  position: absolute;
  left: 25%;
  font-size: 20px;
}
</style>
