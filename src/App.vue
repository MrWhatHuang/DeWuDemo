<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr.What
 * @Date: 2020-06-18 19:28:40
 * @LastEditors: Mr.What
 * @LastEditTime: 2020-06-18 21:38:06
--> 
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
