import {ITodo} from "../interface/ITodo.ts";

export function getTodosFromLocalStorage(): ITodo[]{
    const data = localStorage.getItem('ToDos')
    return data ? JSON.parse(data) : []
}

export function setTodosToLocalStorage(toDos: ITodo[]):void{
    localStorage.setItem('ToDos', JSON.stringify(toDos))
}