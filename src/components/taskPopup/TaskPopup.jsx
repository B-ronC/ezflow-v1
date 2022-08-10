import './taskPopup.css';
import React from 'react';
import ReactDom from 'react-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createTask, createUserTasks } from '../../graphql/mutations';

function TaskPopup({ open, onClose, taskMem }) {
    if (!open) return null

    // const handleSubmit = async ({ target }) => {
    //     target.preventDefault()

    //     const newTask = await API.graphql(graphqlOperation(createTask, {
    //         input: {
    //           title: target.title,
    //           description: target.description,
    //           to: taskMem,
    //           from: ,
    //           team: ,
    //           status: 
    //         }
    //     }))
    //     console.log('creating task - task popup')
    // }

    return ReactDom.createPortal(
        <>
            <div className='overLay' />
            <div className='taskPopup'>
                {/* <form onSubmit={ handleSubmit }>
                    <input placeholder='Enter a title' name='title' />
                    <input placeholder='Enter a description' name='description' />
                    <button>Create Task</button>
                </form> */}
                <button onClick={ onClose }>Cancel</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default TaskPopup