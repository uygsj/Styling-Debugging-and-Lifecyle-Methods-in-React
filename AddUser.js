import React from 'react';
import  { useState } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';



const AddUser =(props)=>{

    //const nameInputRef = useRef();
    //const ageInputRef = useRef();

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [enteredCollegeName, setEnteredCollegeName] = useState('');
    const [error,setError] = useState();
    


    const addUserHandler =(event) => {
        event.preventDefault();
        //const enteredName = nameInputRef.current.value
        //const enteredUserAge = ageInputRef.current.value
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Empty input',
                message: 'Name or Age should not be empty',
              });
              return;
        }
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Age should be > 0 & < 120',
              })
              return;
        }
        props.onAddUser(enteredUsername, enteredAge,enteredCollegeName)
        //nameInputRef.current.value = '';
        //ageInputRef.current.value = '';
        setEnteredUsername('');
        setEnteredAge('');
        setEnteredCollegeName('');            
     }
     const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)

     }
     const ageChangeHandler =(event) => {
        setEnteredAge(event.target.value);
     }

     const collegeNameChangeHandler =(event)=>{
        setEnteredCollegeName(event.target.value)
     }
     const errorHandler = () => {
        setError(null);
     }



     return (
        <Wrapper>
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
        id="username" 
        type="text" 
        value={enteredUsername} 
        onChange={usernameChangeHandler}
        //ref={nameInputRef}
        />
       

        <label htmlFor="age">Age(years)</label>
        <input id="age" 
        type="number" 
        value={enteredAge} 
        onChange={ageChangeHandler}
        //ref={ageInputRef}
        />

        <label htmlFor="college Name">college Name</label>
        <input id="collegename" 
        type="text" 
        value={enteredCollegeName} 
        onChange={collegeNameChangeHandler}
        //ref={ageInputRef}
        />
       

        <Button type="submit">Add User</ Button>
        </form>
      
        </Card>
        </div>
        </Wrapper>
        
    )

}
export default AddUser;