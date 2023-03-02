import React, { useState } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import FormTareas from '../../components/FormTareas';
import { TaskList } from '../../components/TaskList';
import { Titulo } from '../../components/Titulo';
import { Subtitulo } from '../../components/Subtitulo';

const tasksConst = JSON.parse(localStorage.getItem('tasks')) || [];
//  [
//     {detail: 'Lavar la ropa', id: 1, done: true},
//     {detail: 'Limpiar la pieza', id: 2, done: false},
//     {detail: 'Alimentar mascotas', id: 3, done: false},
//     {detail: 'Cocinar', id: 4, done: true}
// ]
 
export const ToDoList = () => {

    const [tasks, setTasks] = useState(tasksConst)

    function addNewTask (task) {
        const updList = tasks.map(t => t);
        updList.push(task);
        localStorage.setItem('tasks', JSON.stringify(updList));
        setTasks(updList);
      }

    function deleteTask(i) {
        const oldArray = tasks.filter(tarea => tarea.id !== i);
        localStorage.setItem('tasks', JSON.stringify(oldArray))    
        setTasks(oldArray)
    }

    function setTaskDone(id) {
        const taskUpd = tasks.find(tarea => tarea.id === id);
        taskUpd.done = true;
        setTasks ([...tasks])
    }
    
  return (
    <div>
        <Titulo></Titulo>    
        <Subtitulo></Subtitulo>
        <Container>
            <Row>
                <Col className='bg-warning ' xs={12} lg={6}>
                    <FormTareas addNewTask={addNewTask}></FormTareas>
                </Col>
                <Col className='bg-info ' xs={12} lg={6}>   
                    <TaskList tasks={tasks} deleteTask={deleteTask} setTaskDone={setTaskDone}></TaskList>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
