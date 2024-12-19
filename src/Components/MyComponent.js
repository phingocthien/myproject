// class component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./Displayinfor";
// class MyComponent extends React.Component {
//     // Tao array object trong state
//     state = {
//         listUser: [
//             { id: 1, name: "hoi dan it", age: "6" },
//             { id: 2, name: "Eric", age: "26" },
//             { id: 3, name: "harryphamDev", age: "69" },
//         ]
//     }

//     handleAddNewUser = (user) => {
//         // cap nhap them phan tu cao state
//         this.setState({
//             listUser: [user, ...this.state.listUser]
//         })

//     }
//     handlDeleteUser = (userId) => {
//         // let listUserClone = [...this.state.listUser]
//         let listUserClone = this.state.listUser //lay listuser trong state
//         listUserClone = listUserClone.filter(item => item.id !== userId) // filter loc tra ra 1 mang moi voi dk truyen vao
//         // render setState
//         this.setState({
//             listUser: listUserClone
//         })
//     }
//     // JSX
//     render() {
//         return (
//             //fragment
//             <>
//                 <div>
//                     {/* Gọi đến các component con và tham chiếu đến các hàm, state sử dụng */}
//                     <AddUserInfor
//                         // tham chiếu đến handleAddNewUser lưu ý không có dấu "()"
//                         handleAddNewUser={this.handleAddNewUser}
//                     >
//                     </AddUserInfor>
//                     <br></br>
//                     <hr></hr>
//                     <DisplayInfor
//                         listUser={this.state.listUser}
//                         handlDeleteUser={this.handlDeleteUser}>
//                     </DisplayInfor>

//                 </div>
//             </>

//         )
//     }
// }
const MyComponent = (props) => {
    const [listUser, setListUser] = useState(
        [
            { id: 1, name: "hoi dan it", age: "6" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "harryphamDev", age: "69" },
        ]
    )
    const handleAddNewUser = (userObj) => {
        // gọi hàm setListUser trong useState ở trên để cập nhập vào listUser
        setListUser([userObj, ...listUser])
    }
    const handlDeleteUser = (userId) => {
        let listUserClone = listUser //lay listuser 
        listUserClone = listUserClone.filter(item => item.id !== userId) // filter loc tra ra 1 mang moi voi dk truyen vao
        // cập nhập setlistUser
        setListUser(listUserClone);
    }

    return (
        //fragment
        <>
            <div>
                {/* Gọi đến các component con và tham chiếu đến các hàm, state sử dụng */}
                <AddUserInfor
                    // tham chiếu đến handleAddNewUser lưu ý không có dấu "()"
                    handleAddNewUser={handleAddNewUser}
                >
                </AddUserInfor>
                <br></br>
                <hr></hr>
                <DisplayInfor
                    listUser={listUser}
                    handlDeleteUser={handlDeleteUser}>
                </DisplayInfor>

            </div>
        </>
    )
}

export default MyComponent;