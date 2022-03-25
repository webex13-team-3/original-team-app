<template>
  <div class="aa">
    <h1 class="title">
      Be More Beautiful<br />
      Be More Yourself...<br />
    </h1>

    <router-link :to="'/makes'" class="link">すべての投稿をみる</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
}
</script>

<style scoped>
.aa {
  background-image: url(@/images/makes.jpg);
  background-size: cover;
  height: 100vh;
}

.title {
  font-size: 32px;
  position: absolute;
  right: 10rem;
  top: 22rem;
  text-align: left;
  font-weight: bold;
  color: white;
  text-shadow: 1px 2px 3px #494949;
  font-family: "游明朝";
}
.link {
  position: absolute;
  top: 29rem;
  right: 10rem;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.493);
  padding: 1rem 4rem;
  border-radius: 15px;
  font-weight: bold;
  color: #7e7878;
}
.link:hover {
  color: #110e0e;
  background-color: rgba(255, 255, 255, 0.623);
}
</style>
