import './taskPopup.css';
import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createTask, createUserTasks } from '../../../graphql/mutations';
import { teamIDContextMem } from '../../../pages/teammembers/Teammembers';
import { withAuthenticator } from '@aws-amplify/ui-react';

function TaskPopup({ user, open, onClose, taskMem }) {
    const teamIDMem = useContext(teamIDContextMem)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const { target } = e
    
            const newTask = await API.graphql(graphqlOperation(createTask, {
                input: {
                    teamID: teamIDMem,
                    title: target.title.value,
                    description: target.description.value,
                    toID: taskMem.id,
                    from: user.attributes.sub,
                    status: 0
                }
            }))
            console.log('creating task - task popup')
    
            const newUserTeam = await API.graphql(graphqlOperation(createUserTasks, {
                input: {
                    userID: taskMem.id,
                    taskID: newTask.data.createTask.id
                }
            }))
            console.log('creating user task - task popup')
    
            onClose()
        } catch (err) {
            console.error(err)
        }
    }

    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className='overLay' />
            <div className='taskPopup'>
                <form onSubmit={ handleSubmit }>
                    <h3>Title:</h3>
                    <input placeholder='Enter a title' name='title' />
                    <h3>Description</h3>
                    <textarea placeholder='Enter a description' name='description'></textarea>
                    <div>
                        <button>Create Task</button>
                    </div>
                </form>
                <button onClick={ onClose }>Cancel</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default withAuthenticator(TaskPopup)