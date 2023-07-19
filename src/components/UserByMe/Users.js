import React, {useState} from 'react';

const UserByMe = (props) => {
    
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const userSubmit = (event) =>{
        event.preventDefault();
        props.onAddUser(userName, userAge);
        setUserAge('');
        setUserName('');
    }

    const putName = (event) =>{
        setUserName(event.target.value);
    } 
    const putAge = (event) => {
        setUserAge(event.target.value);
    }


    return(
        <div>
            <form onSubmit={userSubmit}>
                <label>Name : </label><input onChange={putName} value={userName} placeholder='Name' type='text'></input>
                <label>Age : </label><input onChange={putAge} value={userAge} placeholder='Age' type='number'></input>
                <button type='submit'>Submit</button>
            </form> 
        </div>
    )
}

export default UserByMe;