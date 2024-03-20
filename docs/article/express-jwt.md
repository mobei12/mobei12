# express 使用express-jwt、jsonwebtoken进行token的生成与校验
## 安装
`npm i express-iwt jsonwebtoken`   
## 创建token生成和解密的工具代码

```ts
//utils.ts
const jwt = require("jsonwebtoken")
const jwtSecret: string = 'mb_own_token';  //token签名,自己随便定义就行

export default class Utils {
    static setToken = (username: string, user_id: string): Promise<String> => {
        return new Promise(resolve => {
            //expires 设置token过期的时间
            //{ user_name: user_name, user_id: user_id } 传入需要解析的值（ 一般为用户名，用户id 等）
            //!!!重点 这个Bearer一定要加啊,,不然会报错
            const token: string = 'Bearer ' + jwt.sign({
                user_name: username,
                user_id: user_id
            }, jwtSecret, {expiresIn: '24h'});
            resolve(token)
        })
    }
    static getToken = (token: string): Promise<object> => {
        return new Promise((resolve, reject) => {
            if (!token) {
                console.log('token是空的')
                reject({
                    error: 'token 是空的'
                })
            } else {
                //第二种  改版后的
                const info = jwt.verify(token.split(' ')[1], jwtSecret);
                resolve(info);  //解析返回的值（sign 传入的值）
            }
        })
    }
}

```
## 在登录模块创建token并返回
```ts
//user.ts
import ex = require("express");
let router = ex.Router();
const userModel = require("./userModel");
//引入
import utils from "../tools/utils";

interface userModelInstance {
    username: string;
    _id: string;
    password?: string;
}

router.use((req, res, next) => {
    console.log("请求的时间", Date.now());
    next();
});
router.post("/login", (req, res) => {
    let loginData = req.body
    loginData.password = utils.genPassword(String(loginData.password))
    userModel
        .find(loginData)
        .then((result: Array<userModelInstance>) => {
            if (result.length > 0) {
                let userOBJ: userModelInstance = Object.create(result[0]);
                //登录成功生成签名,返回给前端
                utils.setToken(userOBJ.username, userOBJ._id).then(token => {
                    res.send({
                        code: 200,
                        user: {username: userOBJ.username, _id: userOBJ._id},
                        message: '登录成功',
                        token: token
                    })
                })
            }else {
                res.send({
                    code: 200,
                    message: '登录失败，瓜怂',
                })
            }
        })
        .catch((err: object) => {
            console.error(err);
        });
});
module.exports = router;
```
## app.ts入口文件加token判断
```ts
// app.ts
"use strict";
import express = require("express");
const app: express.Application = express();
const bodyParser = require("body-parser");
const expressJwt=require('express-jwt')
import utils from "./tools/utils";
app.use(bodyParser.json()); //解析json类型的请求体
/*引入数据库操作的模块start*/
const user = require('./user/user')
/*数据库操作的模块end*/
app.use(expressJwt({
    secret:'mb_own_token',
    algorithms:['HS256']
}).unless({
    path:['/user/login','/user/register']  //这里设置不需要验证的接口名称
}))
//开始校验token
app.use((req,res,next)=>{
    const token =  req.headers['authorization'];
    if(token == undefined){
         next();
    }else{
        utils.getToken(token).then((data)=> {
             next();
        }).catch(()=>{
            console.log(123)
             next();
        })
    }
})

//挂载用户操作相关模块
app.use('/user',user)
//token失效返回信息
app.use(function(err:any,req:any,res:any,next:any){
    if(err.status==401){
        return res.json({token:false,message:'token失效'})
        //可以设置返回json 形式  res.json({message:'token失效'})
    }
})
app.listen(process.env.PORT || 8000, function () {
   console.log("Listen port:8000...");
});
```