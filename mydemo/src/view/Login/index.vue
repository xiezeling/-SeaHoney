<template>
  <div class="search-page">
    <h5>请输入用户和密码</h5>
    <div>
      <p>用户名：<input type="text" v-model="phone"></p>
      <p>密码：<input type="password" v-model="password"></p>
      <button v-on:click="Login">登录</button>
    </div>   
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    Login () {
      window.localStorage.setItem('userInfo', JSON.stringify(
        {
          phone: this.phone
        }
      ))
      this.$router.replace(this.$route.query.loginDoCallback)
    }
  }
}
</script>
<style lang="less" scoped>
.search-page{
    width:100%;
    height:100%;
    background:#fff;
    h5{
      line-height: 0.3rem;
      background: #fff9f3;
      text-align: center;
      color:#991f33;
      font-size:0.14rem;
    }
    div{
      padding-top:0.2rem;
      p{
        margin-left:0.1rem;
        margin-right:0.1rem;
        heigth:0.3rem;
        line-height:0.3rem;
        border-bottom:1px solid #ccc;
        input{
          outline:none;
          border:none;
        }
      }
      button{
        margin-top:0.15rem;
        width:94%;
        height:0.4rem;
        margin-left:3%;
        margin-right:4%;
        background:#991f33;
        color:#fff;
        outline:none;
        border:none;
        font-size:0.15rem;
      }
    }
  }
  
</style>