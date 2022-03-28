<template>
  <h1>詳細ページ</h1>
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
          <p>{{ this.make.shitajiName }}</p>
          <p>{{ this.make.shitajiComment }}</p>
          <p>{{ this.make.fandationName }}</p>
          <p>{{ this.make.fandationComment }}</p>
          <p>{{ this.make.concealerName }}</p>
          <p>{{ this.make.concealerComment }}</p>
          <p>{{ this.make.powderName }}</p>
          <p>{{ this.make.powderComment }}</p>
         
        </div>
        <div v-if="powder">
           <p>{{ this.make.highlightName }}</p>
          <p>{{ this.make.highlightComment }}</p>
          <p>{{ this.make.cheekName }}</p>
          <p>{{ this.make.cheekComment }}</p>
           <p>{{ this.make.shadingName }}</p>
          <p>{{ this.make.shadingComment }}</p>
        </div>
        <div v-if="eye">
          <p>{{ this.make.eyelineName }}</p>
          <p>{{ this.make.eyelineComment }}</p>
          <p>{{ this.make.eyeshadowName }}</p>
          <p>{{ this.make.eyeshadowComment }}</p>
          <p>{{ this.make.eyeblowName }}</p>
          <p>{{ this.make.eyeblowComment }}</p>
          <p>{{ this.make.mascaraName }}</p>
          <p>{{ this.make.mascaraComment }}</p>
        </div>
        <div v-if="lip">
          <p>{{ this.make.lip1Name }}</p>
          <p>{{ this.make.lip1Comment }}</p>
          <p>{{ this.make.lip2Name }}</p>
          <p>{{ this.make.lip2Comment }}</p>
        </div>
        <div v-if="other">
          <p>{{ this.make.otherName }}</p>
          <p>{{ this.make.otherComment }}</p>
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
          make.fandationName||
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
          make.highlightName|| make.cheekName ||make.shadingName  ) {
          return true
        } else {
          return false
        }
      }
    },
    haslipMakes() {
      return function (make) {
        if (make.lip1Name||make.lip2Name) {
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
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 10%;
  width: 600px;
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
  height: 60vh;
  width: 55rem;
  margin-left: 5%;
  border-radius: 30px;
}
</style>
