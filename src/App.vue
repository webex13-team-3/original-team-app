<template>
  <nav>
    <router-link to="/" class="header">Home</router-link> |
    <router-link to="/about" class="header">About</router-link> |
    <router-link to="/post" class="header">NewPost</router-link>
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
.header {
  padding-left: 3rem;
  padding-right: 3rem;
}
nav {
  padding: 30px;
  background-color: #f5c8c8;
  text-align: right;
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
