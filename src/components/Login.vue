<template>
  <div id="login">
    <div class="login_wrap">
      <div class="logo_wrap">
        <img src="@/assets/images/login/people_logo_text.png" alt="people_logo_text" class="logoImg">
      </div>
      <div class="login_inner">
        <div class="left_wrap">
          <div class="left_inner">
            <img src="@/assets/images/login/team.png" alt="team" class="teamImg">
            <p class="appName">피플라이프 <strong>OTC</strong></p>
            <p class="info">피플라이프(주) 직원 전용 시스템입니다.</p>
          </div>
        </div>
        <div class="right_wrap">
          <div class="right_inner">
            <label for="employeeNumber" class="title">LOGIN</label>
            <input type="text" id="employeeNumber" placeholder="사원번호" class="loginInput" maxlength="7" v-model="login.employeeNumber">
            <input type="password" id="password" placeholder="비밀번호" class="loginInput" v-model="login.passwordPlain" @keyup.enter="postLogin">
            <button type="button" class="loginButton" :class="_isVaild" @click="postLogin">로그인</button>
            <p class="find">비밀번호 찾기</p>
          </div>
        </div>
      </div>
      <p class="copyright">&copy; Peoplelife. All rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  computed: {
    _isVaild () {
      return this.login.employeeNumber && this.login.passwordPlain ? 'active' : 'disabled'
    }
  },
  data () {
    return {
      login: {
        employeeNumber: '',
        passwordPlain: ''
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.getElementById('employeeNumber').focus()
    })
  },
  methods: {
    postLogin () {
      if (this._isVaild !== 'active') return false

      const apiURL = `${this.ENV_AUTH}/auth/sign-in`
      const data = this.login
      this.$Progress.start()

      this.$http({
        method: 'post',
        url: apiURL,
        withCredentials: true,
        data: data
      }).then(result => {
        this.$Progress.finish()
        location.href = '/'
      }).catch(() => {
        this.$Progress.fail()
        this.$toast.error(
          '사원번호 혹은 비밀번호가 틀렸습니다.',
          this.ToastSettings
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('../assets/images/login/bg.png') center no-repeat;
  background-position: center center;
  background-size: cover;
}

.login_wrap {
  @include clearfix;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 30px;

  width: 900px;
  height: 500px;
  background-color: #fff;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  .copyright {
    margin-top: 20px;
    text-align: center;
    font-weight: 300;
    font-size: 12px;
    color: #444;
  }
}

.login_inner {
  @include clearfix;
  padding: 30px;

  .left_wrap {
    position: relative;
    float: left;
    width: 50%;
    height: 300px;
    text-align: center;

    .left_inner {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .teamImg {
      display: inline-block;
    }

    .appName {
      margin-top: 23px;
      margin-bottom: 3px;
      text-align: center;
      font-size: 18px;
      color: #333;

      strong {
        font-weight: bold;
      }
    }

    .info {
      font-size: 12px;
      color: #444;
      font-weight: 350;
    }
  }

  .right_wrap {
    position: relative;
    float: left;
    width: 50%;
    height: 300px;
    border-left: 1px solid #000;
    text-align: center;

    .right_inner {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .title {
        display: block;
        width: 250px;
        font-weight: 500;
        font-size: 36px;
        margin-bottom: 20px;
      }

      .loginInput {
        width: 250px;
        margin-bottom: 10px;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid $border;

        &:focus,
        &:active { border-bottom: 1px solid $primary; }
      }

      .loginButton {
        margin-top: 40px;
        width: 250px;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
        background-color: $disabled;
        border: 1px solid transparent;
        border-radius: 3px;
        padding: 7px;

        &.active { background-color: $primary; }
        &.disabled { cursor: not-allowed; }
      }

      .find {
        @include hover;
        margin-top: 12px;
        color: #444;
        font-size: 12px;
        font-weight: 350;
      }
    }
  }
}
</style>
