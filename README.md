# koa-template
基于koa的一个用户注册登陆功能的项目模版，集成了日志、jest、eslint、sequlize、参数验证 等开箱即用的功能
# scripts
+ `npm run start`, 生产环境启动项目
+ `npm run dev`,`开发环境下启动项目,内容改变会自动重启服务
+ `npm run test`, 允许jest单元测试
+ `npm run lint`, eslint检查并格式化代码
+ `npm run initdb`，初始化项目需要的数据库环境

# 目录结构
## __test__ 
测试文件所在目录
## app
### constant
常量定义模块
### controller
controller模块
### extend
对koa的扩展模块
### middleware
中间件模块
### model
sequlize model 定义模块
### router
### service
service模块
### utils
工具类模块
### app.js
## bin
项目中用到等辅助脚本
## config
配置文件地址
## coverage
生成测试覆盖率文件
## logs
日志文件
## .eslintrc.js
eslint 配置文件
## index.js
项目启动文件
## jest.config.js
jest 配置文件
## README.md

