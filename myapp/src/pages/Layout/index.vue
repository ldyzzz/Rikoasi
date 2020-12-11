<template>
    <div class="layout">
      <main> <router-view /> </main>
      <footer>
          <router-link to="/msg">消息</router-link>
          <router-link to="/my">我的</router-link>
          <router-link to="/free">空间</router-link>
      </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,
body,
#app ,.layout{
  width: 100%;
  height: 100%;
}
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main{
    flex: 1;
    overflow-y: scroll;
}
footer{
    width: 100%;
    height: 50px;
    background: pink;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>