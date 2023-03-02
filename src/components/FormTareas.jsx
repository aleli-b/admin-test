import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormTareas = ({addNewTask}) => {
    function cargarTarea (e) {
        e.preventDefault();
        const newTask = {
            detail: e.target.elements.taskDetail.value,
            id: Date.now(),
            done: false
        }
        addNewTask(newTask);
    }
    return(
        <div>
            <Form onSubmit={cargarTarea}>
                <Form.Group className="group mb-3 w-50" controlId="taskDetail">
                    <Form.Label>Ingrese tarea a realizar.</Form.Label>
                    <Form.Control type="text" placeholder="Detalle de la tarea"/>
                </Form.Group>
                <Button variant="primary" type="submit">Agregar</Button>
            </Form>
        </div>
    )
}

export default FormTareas;