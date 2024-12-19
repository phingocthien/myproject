import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from "../logo.svg";
// stateless
// class DisplayInfor extends React.Component {
//     // constructor(props) {
//     //     console.log(">>call contructor:1");
//     //     super(props);
//     //     this.state = {
//     //         isShowlistUser: true // luon hien
//     //     }
//     // }
//     // componentDidMount() {
//     //     console.log(">>> call disMount")
//     // }
//     // componentDidUpdate(prevProps, pervState, snapshot) {
//     //     console.log(">> call me component disUpdate", this.props, prevProps);
//     //     if (this.props.listUser !== prevProps.listUser)
//     //         if (this.props.listUser.length === 5) {
//     //             alert("yo got 5 user")
//     //         }

//     // }
//     // handleShowHide = () => {
//     //     this.setState({
//     //         isShowlistUser: !this.state.isShowlistUser
//     //     })
//     // }
//     // render() {
//     //     console.log("call me return")
//     //     //destructuring array/object
//     //     const { listUser } = this.props;
//     //     // const listUser = this.props.listUser
//     //     // props => Viết tắt của propertes
//     //     //console.log(listUser)
//     //     //console.table(listUser) hiênr thị table listUser
//     //     //Nhận propt từ Mycomponent
//     //     return (
//     //         <div class="display-infor-container">
//     //             {/* <img src={logo} /> */}
//     //             {/* sử dụng vòng map đẻ lặp các phần tử trong listUser */}
//     //             {listUser.map((user) => {
//     //                 console.log("check map user", user)
//     //                 return (
//     //                     <div>
//     //                         <div>
//     //                             <span onClick={() => { this.handleShowHide() }}>
//     //                                 {/* Cau dieu kien  */}
//     //                                 {this.state.isShowlistUser === true ? "Hide list user" : "show list user"}
//     //                             </span>
//     //                         </div>
//     //                         {this.state.isShowlistUser &&
//     //                             //fragment
//     //                             <>
//     //                                 {listUser.map((user, index) => {
//     //                                     return (
//     //                                         <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//     //                                             <div>My Name {user.name}</div>
//     //                                             <div>My age {user.age}</div>
//     //                                             <div>
//     //                                                 <button onClick={() => this.props.handlDeleteUser(user.id)}> delete</button>
//     //                                             </div>
//     //                                             <hr></hr>
//     //                                         </div>

//     //                                     )
//     //                                 })}
//     //                             </>
//     //                         }
//     //                     </div>

//     //                 )


//     //                 // if (+user.age > 18) {
//     //                 //     return (
//     //                 //         <div key={user.id} className="green">
//     //                 //             <div>My Name {user.name}</div>
//     //                 //             <div>My age {user.age}</div>
//     //                 //         </div>
//     //                 //     )
//     //                 // } else
//     //                 //     return (
//     //                 //         <div key={user.id} className="red">
//     //                 //             <div>My Name {user.name}</div>
//     //                 //             <div>My age {user.age}</div>
//     //                 //         </div>
//     //                 //     )
//     //             })}
//     //         </div>
//     //     )
//     // }

//     // if (+user.age > 18) {
//     //     return (
//     //         <div key={user.id} className="green">
//     //             <div>My Name {user.name}</div>
//     //             <div>My age {user.age}</div>
//     //         </div>
//     //     )
//     // } else
//     //     return (
//     //         <div key={user.id} className="red">
//     //             <div>My Name {user.name}</div>
//     //             <div>My age {user.age}</div>
//     //         </div>
//     //     )
// }
// statefull
const DisplayInfor = (props) => { /*truyền vào f biến props*/
    const { listUser } = props // khoi tạo listuser thông qua props
    //destructring assigment
    const [isShowHideListUse, setShowHideListUser] = useState(true);
    // setShowHideListUser giup cap nhat lai state
    //định ngĩa 1f và gọi lại hàm f khi nhấn click
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUse);
    }
    console.log("return")
    //useEffect chạy dúng 1 lầnlần
    useEffect(() => {
        setTimeout(() => {
            document.title = "eric && hoi dan it"
        }, 3000)
        console.log(">> call me useEffect")
    }, [])
    // UseEffect chạy nhiều lần khi biến thay đổi
    useEffect(() => {
        if (listUser.length === 0) {
            alert(" you delete all the users")
        }
        console.log(">> call me useEffect")
    }, [listUser])
    return (
        <div class="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUse == true ? "hide list user" : "show list user"}
                </span>
            </div>
            {isShowHideListUse &&
                //fragment
                <>
                    {listUser.map((user, index) => {
                        return (
                            <div key={user.id} >
                                <div>My Name {user.name}</div>
                                <div>My age {user.age}</div>
                                <div>
                                    <button onClick={() => props.handlDeleteUser(user.id)}> delete</button>
                                </div>
                                <hr></hr>
                            </div>

                        )
                    })}
                </>
            }
        </div>

    )






}
export default DisplayInfor;