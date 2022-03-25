<template>
  <nav>
    <div class="nav-right">
      <p><router-link to="/">Home</router-link></p>
    </div>
    <div class="nav-left">
      <router-link to="/makes" class="index">組み合わせ一覧</router-link>
      <router-link to="/post" class="new">新新規投稿</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script></script>
<style>
* {
  padding: 0;
  margin: 0;
  font-family: "游明朝";
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  width: 100%;
  position: absolute;
  padding-top: 15px;
  background-color: rgba(247, 247, 247, 0.479);
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

nav a {
  font-weight: bold;
  color: #110300;
}

nav a.router-link-exact-active {
  color: #110300;
}
.nav-left {
  width: 20%;
}
.nav-right {
  width: 20%;
}
.index {
  margin-right: 30px;
}
</style>
