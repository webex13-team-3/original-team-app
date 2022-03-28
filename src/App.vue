<template>
  <nav>
    <div>
      <router-link to="/" class="header">Home</router-link>
    </div>
    <div class="nav-right">
      <router-link to="/makes" class="header">Makes List</router-link> |
      <router-link to="/post" class="header">NewPost</router-link>
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
.header {
  padding-left: 3rem;
  padding-right: 3rem;
}
nav {
  width: 100%;
  position: absolute;
  padding: 15px;
  background-color: rgba(247, 247, 247, 0.479);
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}
nav a {
  font-weight: bold;
  font-size: 20px;
  color: #110300;
}
nav a:hover {
  font-weight: bold;
  font-size: 20px;
  color: #a73939;
}

nav a.router-link-exact-active {
  color: #110300;
}
.nav-left {
  width: 20%;
}
.nav-right {
  width: 40%;
}
.index {
  margin-right: 30px;
}
.home {
  width: 20px;
}
</style>
