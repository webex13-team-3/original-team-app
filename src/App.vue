<template>
  <nav></nav>
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
