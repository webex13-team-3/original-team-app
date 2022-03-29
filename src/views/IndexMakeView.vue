<template>
  <div class="indexbox">
    <h1>Makes List</h1>
    <div class="serch">
      <input
        type="text"
        v-model="value"
        placeholder="メイクタイトルを検索..."
        class="a"
      />
    </div>
    <div v-if="serchmakes.length > 0" class="container">
      <div
        v-for="serchmake in serchmakes"
        :key="serchmake.id"
        class="container-box"
      >
        <p v-if="serchmake.shitajiImage">
          <img
            v-bind:src="serchmake.shitajiImage"
            alt="下地のイメージ"
            width="250"
            class="img"
          />
        </p>
        <p class="titleName">{{ serchmake.titleName }}</p>
        <div class="tag-box">
          <ListTag :name="hasBaseMakes(serchmake)" tagName=" ベースメイク" />
          <ListTag :name="haspowderMakes(serchmake)" tagName="パウダー" />
          <ListTag :name="hasEyeMakes(serchmake)" tagName="アイメイク" />
          <ListTag :name="haslipMakes(serchmake)" tagName="リップ" />
          <ListTag :name="hasotherMakes(serchmake)" tagName="その他" />
        </div>

        <router-link :to="'/makes/' + serchmake.id" class="detail"
          >More →</router-link
        >
      </div>
    </div>
    <div v-else class="container">
      <div v-for="make in makes" :key="make.id" class="container-box">
        <p v-if="make.shitajiImage">
          <img
            v-bind:src="make.shitajiImage"
            alt="下地のイメージ"
            width="250"
            class="img"
          />
        </p>
        <p class="titleName">{{ make.titleName }}</p>
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
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase"
import ListTag from "../components/ListTag.vue"

export default {
  data() {
    return {
      makes: [],
      serchmakes: [],
      value: "",
    }
  },
  watch: {
    value: async function () {
      console.log("watch")
      console.log(this.makes)
      const companiesRef = collection(db, "makes")
      const q = query(companiesRef, where("titleName", "==", this.value))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data())
        this.serchmakes.push(doc.data())
      })
    },
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
  border: 1px solid #bf8e8a49;
  height: 40px;
}
.a:focus {
  outline: 2px solid #bf8e8a49;
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
}
h1:before {
  content: "";
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
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
.titleName {
  font-size: 17px;
  color: #110300;
}
</style>
