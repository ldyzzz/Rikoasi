<template>
  <div class="xioxi">
    <div class="search">
      <input type="text" placeholder="搜索" @change="search" v-model="inpts" />
    </div>
    <div class="lista">
      <dl v-for="(item, index) in list" :key="index" class="xuanran">
        <dt><img :src="item.img" alt="" /></dt>
        <dd>
          <p>{{ item.title }}</p>
          <p>{{ item.content }}</p>
        </dd>
      </dl>
        <dl v-for="(item, index) in data" :key="index">
        <dt><img :src="item.img" alt="" /></dt>
        <dd>
          <p>{{ item.title }}</p>
          <p>{{ item.content }}</p>
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
      list: [],
      inpts: "",
      data:[],
    };
  },
  created() {
    this.getList();
  },
  computed() {

  },

  methods: {
    getList() {
      axios({
        url: "/getData",
      }).then((res) => {
        // console.log(res);
        this.list = res.data.list;
        console.log(this.list);
      });
    },
    search() {
      console.log(this.inpts);
      const result = this.list.filter((item) => item.title === this.inpts);
      // console.log(result);
      this.data = result;
      document.querySelector(".xuanran").style.display = "none"
    },
  },
};
</script>

<style>
.lista dl {
  display: flex;
  height: 150px;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.lista dl dt {
  margin: 0 15px;
  display: flex;
  height: 150px;
  align-items: center;
}
.lista dl dt img {
  border-radius: 50%;
}
.lista dl dd {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
