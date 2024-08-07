import React, {useContext,useRef,useState} from "react";
import Context from "./Context";

const Card = ({ userData }) => {
    
    //access and destructure the functions using useContext hook from Context object
    const {getUpdatedDatas,DeleteUserData} = useContext(Context);

    //Initialize isEditing and SetIsEditing function
    const [isEditing, setIsEditing] = useState(false);

    //Initialize the necessary state and functions to update state
    const [name, setName] = useState(userData.name);
    const [age, setAge] = useState(userData.age);
    const [email, setEmail] = useState(userData.emailID);
    const [mobileNo, setMobileNo] = useState(userData.mobileNumber);

    //Create reference and initialize to empty value
    const input1 = useRef('');
    const input2 = useRef('');
    const input3 = useRef('');
    const input4 = useRef('');

    //function to handle edit button click
    const handleEditBtnClick = () => {
        setIsEditing(!isEditing);
        
    }

    //function to handle update button click
    const handleUpdateBtnClick = () => {
        setIsEditing(!isEditing);
        getUpdatedDatas({
            name: input1.current.value == '' ? userData.name : name,
            age: input2.current.value == '' ? userData.age : age,
            emailID: input3.current.value == '' ? userData.emailID : email,
            mobileNumber: input4.current.value == '' ? userData.mobileNumber : mobileNo
        }, userData.id)
    }

    //function to handle delete button click
    const handleDeleteBtnClick = () => {
        DeleteUserData(userData.id);
    }

    return (
        <div className="card-container d-flex justify-content-center col-12 col-md-6 col-xl-4">
            <div className="card-content">
                {
                    isEditing
                        ?
                        <div>
                            <input  onChange={()=>setName(input1.current.value)} ref={input1} placeholder='Name' type="text" />
                            <input  onChange={()=>setAge(input2.current.value)} ref={input2} placeholder='Age' type="text" />
                            <input  onChange={()=>setEmail(input3.current.value)} ref={input3} placeholder='Email' type="text" />
                            <input  onChange={()=>setMobileNo(input4.current.value)} ref={input4} placeholder='Mobile no' type="text" />
                        </div>
                        :
                        <div>
                            <p>Name: {userData.name}</p>
                            <p>Age: {userData.age}</p>
                            <p>Email: {userData.emailID}</p>
                            <p>Mobile No: {userData.mobileNumber}</p>
                        </div>

                }
                <div className="buttons">
                    {
                            isEditing ?
                            <button onClick={handleUpdateBtnClick} className='btn btn-success'>Update</button>
                            : <button onClick={handleEditBtnClick} className='btn btn-dark'>Edit</button>
                    }
                    <button onClick={handleDeleteBtnClick} className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card