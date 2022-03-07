<template>
  <div class="home">
    <heart-outlined
      v-bind:style="{ fontSize: '50px', color: 'pink' }"
      v-bind:spin="true"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { HeartOutlined } from "@ant-design/icons-vue"
export default {
  name: "HomeView",
  components: {
    HeartOutlined,
  },
}
</script>
