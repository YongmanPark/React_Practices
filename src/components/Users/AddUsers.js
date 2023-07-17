import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUseAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredUseAge.trim().length === 0 ){
            setError({
                title:'invalid input',
                message: 'please enter a valid name and age'
            });
            return ;
        }
        if(+enteredUseAge < 1) {
            setError({
                title:'invalid age',
                message: 'please enter a valid age and (>0)'
            });
            return ;
        }
        
        props.onAddUser(enteredUserName, enteredUseAge);
        setEnteredUserName('');
        setEnteredUserAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }   
    
    const userageChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }   

    const errorHandler = () => {
        setError(null); 
    }

    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <ErrorModal title={'an error occured!'} message={'something went wrong'}/>
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>UserName</label>
                <input id='username' type='text' value={enteredUserName} onChange={usernameChangeHandler}/>
                <label htmlFor='age'>Age</label>
                <input id='age' type='number' value={enteredUseAge} onChange={userageChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </div> 
    )
}

export default AddUser;