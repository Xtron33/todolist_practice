

import {Text} from '@gravity-ui/uikit';
import {createContext, useState} from "react";
import {ITodo, IToDoListContext} from "./utils/interface/ITodo.ts";

import ToDoList from "./elements/ToDoList.tsx";

export const ToDoContext = createContext<IToDoListContext>({toDos: [], setToDos: () => {}})
function App() {



    const [todoList, setTodoList] = useState<ITodo[]>([] as ITodo[])
    const value: IToDoListContext = {toDos: todoList,setToDos: setTodoList}


      return (
        <ToDoContext.Provider value={value}>
            <header>
                <Text variant="header-2">ToDoListPractice</Text>
            </header>
            <ToDoList/>
        </ToDoContext.Provider>
      )
}

export default App
