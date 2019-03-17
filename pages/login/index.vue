<template>
  <el-row type="flex" justify="center" style="padding-top: 20px;">
    <el-card v-if="isLogin">
      欢迎：admins
      <br>
      <br>
      <el-button type="primary" icon="el-icon-upload" @click="loginOut">退出登录</el-button>
    </el-card>
    <el-form v-else ref="loginForm" :model="user" :rules="rules" status-icon label-width="50px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="user.pass" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
      methods: {
        login: function() {
          let that = this;
          let redirect = that.$route.query.redirect
          that.$store.commit("saveToken", "");
          this.$refs.loginForm.validate(valid => {
            if (valid) {
              axios.get("/api/Login/GetTokenNuxt?name="+that.user.name+"&pass="+that.user.name+"").then(res => {

                if (res.data.success) {

                    console.log("登陆成功");
                    var token = res.data.data.token;
                    that.$store.commit("saveToken", token);
                  this.$notify({
                      type: "success",
                      message: "欢迎你," + this.user.name + "!",
                      duration: 3000
                    });
                  this.$router.push({ path: redirect ? redirect:'/' })
                }
              }).catch(err => {
                console.log("点赞失败", err);
              });
            } else {
              return false;
            }
          });
        },
        loginOut(){
          this.isLogin=false;
          this.$store.commit("saveToken", "");
        }
      },
      data() {
        return {
          isLogin:false,
          user: {
            name:'admins',
            pass:'admins',
          },
          rules: {
            name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
            pass: [{ required: true, message: "密码不能为空", trigger: "blur" }]
          }
        };
      },
      created() {
      }
    }
</script>

<style scoped>

</style>
