import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const TaskList = (props) => {
    return (
        <div>
            <ul>
                {props.tasks.map((tarea) => {
                    return (
                        <ListGroup> 
                            <ListGroup.Item className='d-flex align-items-center justify-content-between gap-3 my-3' key={tarea.id}>{tarea.detail}
                                {tarea.done ? <FontAwesomeIcon icon={faSquareCheck}/> : <Button variant="success" onClick={() => props.setTaskDone(tarea.id)}>Terminar</Button>}
                                <Button variant='danger' onClick={() => props.deleteTask(tarea.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    )
                })}
            </ul>
        </div>
    )
}
