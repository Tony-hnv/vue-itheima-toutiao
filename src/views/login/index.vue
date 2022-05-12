<template>
    <div class="login-container">
        <!-- 导航栏 -->
        <van-nav-bar class="page-nav-bar" title="登录" />

        <!-- 登陆的表单 -->
        <van-cell-group>
        <van-field
            name="手机号码"
            placeholder="请输入手机号"

        />

        <van-field
            name="验证码"
            placeholder="请输入验证码"

        />

        <div style="margin: 16px;">
            <van-button  block type="info" native-type="submit">
                登录
                </van-button>
        </div>

</van-cell-group>

    </div>
</template>

<script>
export default {
  name: 'Login',
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
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
