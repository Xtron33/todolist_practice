import {useContext, useEffect, useId, useState} from "react";
import {ITodo} from "../utils/interface/ITodo.ts";
import {Button, Icon, TextInput} from "@gravity-ui/uikit";
import {CirclePlus} from "@gravity-ui/icons";
import ToDoCard from "./ToDoCard.tsx";
import {ToDoContext} from "../App.tsx";
import {getTodosFromLocalStorage, setTodosToLocalStorage} from "../utils/helper/localStorage.helper.ts";

function  ToDoList(){
    const [newToDo, setNewToDo] = useState<string>('')
    const [update, setUpdate] = useState<boolean>(false)



    const todoList = useContext(ToDoContext);

    useEffect(() => {
        todoList.setToDos(getTodosFromLocalStorage)
    }, []);
    const remove = (idx:number) => {
        const copy_toDos = todoList.toDos;
        copy_toDos.splice(idx,1)
        todoList.setToDos(copy_toDos)

        setUpdate(!update)
        setTodosToLocalStorage(todoList.toDos)
    }

    const select = (idx: number) => {
        const copy_toDos = todoList.toDos;
        copy_toDos[idx].isDone = !copy_toDos[idx].isDone
        todoList.setToDos(copy_toDos)

        setUpdate(!update)
        setTodosToLocalStorage(todoList.toDos)
    }
    function AddToDo(){

        const copy_todoList: ITodo[] | undefined = todoList.toDos;
        const toDo: ITodo = {id: useId(),isDone: false, todo: newToDo};
        if(copy_todoList !== undefined){
            copy_todoList.push(toDo)
        }

        todoList.setToDos(copy_todoList);
        setNewToDo('')
        setUpdate(!update)

        setTodosToLocalStorage(todoList.toDos)
    }


    return(
        <div className="container">
            <div className="container-todo">
                <div className="container-todo-add">
                    <TextInput value={newToDo} onUpdate={(e) => setNewToDo(e)} hasClear={true} size="xl" placeholder="New todo..." />
                    <Button disabled={newToDo.length === 0} onClick={() => AddToDo()} view="action" size="xl"><Icon size={25} data={CirclePlus}></Icon></Button>
                </div>
                <div className="container-todo-map">
                    {todoList.toDos.map((elem, index) => <ToDoCard key={elem.id} select={select} remove={remove} elem={elem} idx={index}/>)}
                </div>
            </div>
        </div>
    )
}

export default ToDoList