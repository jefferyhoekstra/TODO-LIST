import { useState, type ChangeEvent } from "react";
import FormComponent from "./FormComponent";
import TodosContainer from "./TodoContainer";

export interface TodoCardProps {
    id: string;
    title: string;
    checked: boolean;
}

export interface TodosContainerProps {
    todosList: TodoCardProps[];
}

export default function TodoApp() {
    //States
    //A state to store the input change
    //once the wsubit button is clcick, the state will be stored
    //as a todo entry in other state wthat will save a list of todos
    const [todo, setTodo] = useState<TodoCardProps>({
        id: "",
        title: "",
        checked : false,
    });

    //second state: a state to store all the todos entry in one array
    const [todosList, setTodosList] = useState<TodoCardProps[]>([]);


    //Handlers

    const handleFormOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo((prevTodo) => ({...prevTodo, [e.target.name]: e.target.value, });
    }; 

    //Main Return
 return <div>
    <h1>Todo ListApp</h1>
    <FormComponent {...todo} />
    <TodosContainer todosList={todosList} />
    </div>
}

