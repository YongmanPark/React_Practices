import React from 'react';

const CourseItem = props => {

    const deleteHandler = () =>{
        console.log('안녕');
        console.log(props);
        props.onDelete(props.id);
    }
    
    return (
        <li className='coruseItem' onClick={deleteHandler}>
            {props.children}
        </li>
    );
}

export default CourseItem;