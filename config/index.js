const config = {
  //开发环境配置，开发的时候
    development: {
         api: "http://localhost:8081/api/",
      //api: "http://123.206.33.109:8081/api/"
    },
  //生产环境配置，部署的时候
    production: {
        api: ""
    }
};
//获取当前环境变量,是 production或者development
module.exports = config[process.env.NODE_ENV];
