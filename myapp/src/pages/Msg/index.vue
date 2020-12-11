<template>
  <div class="xioxi">
    <div class="search">
      <input type="text" placeholder="搜索">
    </div>
    <div class="lista">
      <dl v-for="(item,index) in list" :key="index">
        <dt><img :src="item.img" alt=""></dt>
        <dd>
          <p>{{item.title}}</p>
          <p>{{item.content}}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list:[]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList(){
      axios({
        url:"/getData"
      }).then(res=>{
        // console.log(res);
        this.list = res.data.list;
        console.log(this.list);
      })
    }
  },
}
</script>

<style>
.lista dl{
  display: flex;
  height: 150px;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.lista dl dt{
  margin: 0 15px;
   display: flex;
  height: 150px;
  align-items: center;
}
.lista dl dt img{
border-radius: 50%;
}
.lista dl dd{
  height: 150px;
    display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>