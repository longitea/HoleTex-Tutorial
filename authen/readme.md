# Authorization bằng JWT
Authorization **là quá trình cấp quyền cho người dùng** khi truy cập vào tài nguyên hay thực hiện 1 chức năng cụ thể nào đấy.

Khi thực hiện truy xuất thông tin, phía client sẽ gửi lệnh post + accessToken(được cấp từ phía server nếu login thành công).

Trước khi truy xuất vào dữ liệu phía server sẽ so sánh accessToken nhận được từ phía client và accessToken được generate từ phía server có hợp lệ không sau đó mới tiến hành truy xuất dữ liệu và gửi lên cho phía client


## Viết 1 chương trình demo để cấp/xóa/refresh 1 token
1. tiến hành tạo 1 server ảo để cấu hình gửi api
2. thực hiện chức năng Authorization thông qua api vừa tạo

## Phần 1: Cài đặt Server cấp API
nodemon: dùng để cập nhật lại sự thay đổi trên server
##### install libs
đầu tiên, cần cài đặt các thư viện và server ảo
```script
    yarn add dotenv express jsonwebtoken nodemon
```
##### Running Node Server
edit lại scripts "start": "nodemon server" và thực hiện khởi chạy server ảo trên local

```scripts
    yarn start
```

#### Config Server and API
1. jwt.http: file này dùng để thực hiện các phương thức request (GET/POST) lên server
2. server.js: import express và define api



## Phần 2: Authorization
tiến hành ủy quyền cho người dùng sau khi đã xác thực thành công

### 1. Create accessToken
1. sử dụng phương thức jwt từ lib jsonwebtoken để VERIFY SIGNATURE
2. tiến hành tạo key(accessToken) bầng cách sử dụng method sign.
3. config 3 tham số:
    - payload
    - secret-key: khai báo trong file env


### 2. Sử dụng accessToken để gọi các request khác
trước khi người dùng gọi đến phương thức get api anime thì nó sẽ chạy qua middlewhere để xác thực xem token này có hợp lệ hay không, nếu hợp lệ thì nó mới gọi đến method next để thực thi đoạn code trong api anime

#### create fn middleware
1. lấy ra header accessToken từ phía client 
2. split beaer của nó
3. Kiểm tra: 
    Nếu chưa có token -> chưa đăng nhập -> return res.sendStatus(401)
    Nếu có rồi thì đi verify token đó có phải là 1 token hợp lệ không   
        + xác thực không thành công -> res.sendStatus(403)
        + xác thực thành công -> gọi phương thức next()

4. tách authServer thành mô hình microService

### 3. resher Token
khi chúng ta kiểm tra ở phía client token này gần đến thời hạn expires thì chúng ta sẽ send lên request từ phía client → server để thực hiện việ refreshToken và update lại token mới ở phía client 

#### row Login
Ngoài việc create ra 1 accessToken thì chúng ta cũng cần create thêm 1 refreshToken (không thời hạn) nữa. 
Mục đích của việc này: để khi mà JWT token sắp hết hạn phía client sẽ sử dụng resherToken này để gửi lên row refreshToken -> tạo ra 1 accessToken mới

để tạo ra được token JWT thì cần có 1 secretket
1. tạo ra secret-key cho resherToken
2. gửi refreshToken vừa tạo trong row /login lên phía client


#### Create row refreshToken 
tiến hành tạo ra api row resherToken
Chỗ này chúng ta cũng cần verify xem resherToken gửi lên từ phía client có hợp lệ hay không. Tương tự như với login
Check:
    Nếu không có resherToken -> 401 -> không xác thực dc
    Nếu token ko nằm trong mảng(sai token) -> 403 -> không có quyền truy cập
Nếu hợp lệ thì tiến hành tạo ra 1 accessToken mới.
-> như vậy thì có khác mẹ gì cái accessToken không thời hạn đâu

### Logout
tiến hành xóa rrefreshToken trong mảng, và để xóa được chúng ta cần lấy được refreshToken được gửi lên từ phía client.


### Mã lỗi
401 : Unauthorized
403: Không có quyền truy cập