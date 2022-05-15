<template>
  <div class="my-cntainer">
    <div @click="$router.push('/login')" class="header not-login">
      <div class="login-btn">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="">
        <span class="text">登录/注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}

}
</script>

<style lang="less" scoped>
.my-cntainer {
  .header {
    height: 361px;
    background: url('~@/assets/banner.png');
    background-size: cover;
    }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        height: 132px;
        width: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff ;
      }
    }
  }
}
</style>
