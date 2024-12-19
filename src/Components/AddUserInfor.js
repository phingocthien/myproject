import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state =
//         {
//             name: 'eric',
//             address: 'hn',
//             age: 26,
//         }
//     }

//     // Ham onChange được gọi tới khi muốn cập nhật giá trị trong state
//     // Cập nhập name tỏng state
//     handleonChangName = (e) => {
//         this.setState({
//             name: e.target.value
//         })

//     }
//     //Cập nhập age trong state
//     handleonChangAge = (e) => {
//         this.setState({
//             age: e.target.value
//         })

//     }

//     handleOnSubmit = (e) => {
//         // khắc phục việc reload trang khi click nút button
//         e.preventDefault()
//         console.log(this.state)
//         //    thuc thi ham handleAdduser
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age,
//         });

//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={(e) => this.handleOnSubmit(e)}>
//                     <label>your name:</label>
//                     <input
//                         type="text"
//                         value={this.state.name}
//                         // ham onChang lắng nghe sự thay đổi trong phần tử input 
//                         onChange={(e) => this.handleonChangName(e)} />

//                     <label>your age:</label>
//                     <input
//                         type="text"
//                         value={this.state.age}
//                         // ham onChang lắng nghe sự thay đổi trong phần tử input 
//                         onChange={(e) => this.handleonChangAge(e)} />

//                     <button>Submit</button>
//                 </form>
//             </div>

//         )
//     }
// }
const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [adrress, setAddress] = useState('hoi dan it');
    const [age, setAge] = useState('');
    // Gọi hàm cập nhật name
    const handleonChangName = (e) => {
        setName(e.target.value)
    }

    // goi ham cập nhập biến tuổi
    const handleonChangAge = (e) => {
        setAge(e.target.value)
    }
    // hàm sự kiện event cho nut submit
    const handleOnSubmit = (e) => {
        // khắc phục việc reload trang khi click nút button
        e.preventDefault()
        //    thuc thi ham handleAdduser
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age,
        });

    }
    return (
        <div>
            my name is{name} and i am{age}
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <label>your name:</label>
                <input
                    type="text"
                    value={name}
                    // ham onChang lắng nghe sự thay đổi trong phần tử name
                    onChange={(e) => handleonChangName(e)} />

                <label>your age:</label>
                <input
                    type="text"
                    value={age}
                    // ham onChang lắng nghe sự thay đổi trong phần tử age
                    onChange={(e) => handleonChangAge(e)} />

                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfor;