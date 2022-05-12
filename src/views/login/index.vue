<template>
    <div class="login-container">
        <!-- 导航栏 -->
        <van-nav-bar class="page-nav-bar" title="登录" />

        <!-- 登陆的表单 -->
        <van-cell-group>
        <van-field
            name="手机号码"
            placeholder="请输入手机号"
            >
            <i slot="left-icon" class="toutiao toutiao-shouji"></i>
            </van-field>

        <van-field
            name="验证码"
            placeholder="请输入验证码"

        >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <van-button round class="send-sms-btn" slot="button" size="small" type="default">发送验证码</van-button>
        </van-field>

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
.login-container {
    .toutiao {
        font-size: 37px;
    }
    .send-sms-btn {
        background-color: #ededed;
        width: 152px;
        height: 46px;
        line-height: 46px;
        font-size: 22px;
        color: #666;
    }
}
</style>
