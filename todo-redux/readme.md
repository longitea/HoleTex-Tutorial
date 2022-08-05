# Kiến trúc Redux
3 thành phần cơ cơ bản của redux:

### REDUCERS 
là 1 function được sử dụng để cập nhật lại giá trị của state bên trong 1 cái store.
Reducer bên trong store như 1 nơi để chúng ta đăng ký hành động xử lý 1 cái gì đó khi có lời gọi tương ứng.

```javascript
const initValue = { value : 0 }

const rootReducer = (state = initValue, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state, 
                value: state.value + 1
            }
    // {
    //  type: 'todoList/increment',
    //  payload: 10
    // }
        case 'todoList/increment': 
            return {
                ...state,
                value : state.value + action.payload
            }
    }
}
```

### ACTION 
Action trong redux nó chỉ đơn giản là 1 object do chúng ta quy định thôi. 
Dùng để mô tả hành động gửi lên cho reducer để xử lý logic

```js
const INCREMENT = {
    type: 'todoList/increment',
    payload: 10
}

//  Action creators
const increamentCreator = () => {
    return {
        type: 'todoList/increment',
        payload: 10
    }
}
```

### DISPATCH
Cơ bản nó là 1 funtion dùng để gửi (Mô tả action) lên cho reducer thực thi

```js
    //step 1:
    dispath(INCREMENT)
    
    //step 2:
    dispath(increamentCreator(5))

```
# 2. Build TodoList App by Redux Core
Xây dựng 1 ứng dụng todolist sử dụng redux


## Screenshots
![App Screenshot](./public/todo_image.png)



## Xử lý action UI
UI Component có 2 phần:
1. TodoList
2. Filter


### Phần 1: Todolist
load danh sách công việc từ state trong store ra giao diện
khi mà user input công việc lưu vào trong store và hiển thị trên giao diện

##### load danh sách công việc
1. Đầu tiên chúng ta cần define cái kho chứa để quản lý cái state dùng chung trong dự án.
2. tiếp theo đi cấu hình 3 thành phần:  reducer, action, dispath


##### Mô Tả
1. thêm công việc cần làm : thẻ input
2. Prioty: thẻ select
3. handleSubmit : 

#### Phân tích
1. khi bấm add -> lấy được giá trị userinput -> setState
2. state.map-> render danh sách ra giao diện
3. sử dụng redux