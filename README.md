# PigChat
Netty+SpringBoot+FastDFS+Html5实现聊天App

<br>

项目实现详解：<br>
[Netty+SpringBoot+FastDFS+Html5实现聊天App详解(一)](https://segmentfault.com/a/1190000018144704)<br>
[Netty+SpringBoot+FastDFS+Html5实现聊天App详解(二)](https://segmentfault.com/a/1190000018165542)<br>
[Netty+SpringBoot+FastDFS+Html5实现聊天App详解(三)](https://segmentfault.com/a/1190000018175282)<br>
[Netty+SpringBoot+FastDFS+Html5实现聊天App详解(四)](https://segmentfault.com/a/1190000018179149)<br>
[Netty+SpringBoot+FastDFS+Html5实现聊天App详解(五)](https://segmentfault.com/a/1190000018185625)<br>
[Netty+SpringBoot+FastDFS+Html5实现聊天App详解(六)](https://segmentfault.com/a/1190000018208067)<br>


<br><br><br>
## 数据库
![](https://github.com/ShimmerPig/PigChat/blob/master/image/1.jpg)
<br><br>
## 用户表
face_image为用户的头像，需要保存小图与大图，qrcode为该用户对应的二维码
![](https://github.com/ShimmerPig/PigChat/blob/master/image/2.jpg)
<br><br>
## 朋友关系表
![](https://github.com/ShimmerPig/PigChat/blob/master/image/3.jpg)
<br><br>
## 好友申请表
记录发送好友请求申请的数据表
![](https://github.com/ShimmerPig/PigChat/blob/master/image/4.jpg)
<br><br>
## 聊天记录表
sign_flag表示消息的签收状态，为0表示未签收，为1表示已签收
![](https://github.com/ShimmerPig/PigChat/blob/master/image/5.jpg)
<br><br><br>
## 项目结构
![](https://github.com/ShimmerPig/PigChat/blob/master/image/6.jpg)
<br><br>
### utils包
#### FileUtils 主要提供了一些与文件相关的操作
#### IMoocJSONResult 是自定义的响应给前端的数据结构
#### JsonUtils 提供了一些关于json转换的操作
#### MD5Utils 提供了对字符串进行md5加密的操作
#### QRCodeUtils  提供了一些关于二维码的相关操作
#### FastDFSClient 提供了各种上传文件以及删除文件的操作
<br><br>
### enums包
#### MsgActionEnum 发送消息的动作的枚举，类似于消息的类型
#### MsgSignFlagEnum 消息签收状态的枚举
#### OperatorFriendRequestTypeEnum 忽略或者通过好友请求的枚举
#### SearchFriendsStatusEnum 添加好友前置状态的枚举
<br><br>
### pojo包
增加了bo包与vo包，分别存放business object与value object / view object；
<br><br>
### mapper包
增加了一个自定义的UsersMapperCustom，在其中自定义了查询好友请求列表，查询好友列表，以及批量签收聊天消息的方法；
<br><br>
### service包
提供如下方法：<br>
#### queryUsernameIsExist 判断用户名是否存在
#### queryUserForLogin 查询用户是否存在
#### saveUser 用户注册
#### updateUserInfo 修改用户记录
#### preconditionSearchFriends 搜索朋友的前置条件
#### queryUserInfoByUsername 根据用户名查询用户对象
#### sendFriendRequest 添加好友请求记录，保存到数据库
#### queryFriendRequestList 查询好友请求
#### deleteFriendRequest 删除好友请求记录
#### passFriendRequest 通过好友请求
#### queryMyFriends 查询好友列表
#### saveMsg 保存聊天消息到数据库
#### updateMsgSigned 批量签收消息
#### getUnReadMsgList 获取未签收消息列表
<br><br>
### controller包
提供如下接口：<br>
#### registOrLogin 用户注册/登录
#### uploadFaceBase64 上传用户头像
#### setNickname 设置用户昵称
#### searchUser 搜索好友
#### addFriendRequest 发送添加好友的请求
#### queryFriendRequests 发送添加好友的请求
#### operFriendRequest 接受方通过或者忽略朋友请求
#### myFriends 查询我的好友列表
#### getUnReadMsgList 用户手机端获取未签收的消息列表
<br><br><br>
## 测试效果
### 注册与登录
![](https://github.com/ShimmerPig/PigChat/blob/master/image/7.jpg)
### 个人信息
![](https://github.com/ShimmerPig/PigChat/blob/master/image/8.jpg)
### 更换头像
![](https://github.com/ShimmerPig/PigChat/blob/master/image/9.jpg)
### 添加好友
![](https://github.com/ShimmerPig/PigChat/blob/master/image/10.jpg)
### 二维码添加好友
![](https://github.com/ShimmerPig/PigChat/blob/master/image/11.jpg)
![](https://github.com/ShimmerPig/PigChat/blob/master/image/12.jpg)
![](https://github.com/ShimmerPig/PigChat/blob/master/image/13.jpg)
### 接受好友请求后开始聊天
![](https://github.com/ShimmerPig/PigChat/blob/master/image/14.jpg)
![](https://github.com/ShimmerPig/PigChat/blob/master/image/15.jpg)
<br><br><br>
