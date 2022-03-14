<template>
  <p v-if="name" class="tag-name">{{ tagName }}</p>
</template>

<script>
export default {
  props: ["name", "tagName"],
}
</script>
