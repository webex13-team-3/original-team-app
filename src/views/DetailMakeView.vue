<template>
  <h1>詳細ページ</h1>
  <DetailShow />
</template>

<script>
import DetailShow from "../components/DetailShow.vue"

export default {
  computed: {
    MakeData() {
      const dataId = parseInt(this.$makes.params.id, 10)
      const data = this.$store.state.makes.find((a) => a.id === dataId)
      return data
    },
  },
  components: {
    DetailShow,
  },
}
</script>
