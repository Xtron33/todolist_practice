

import {Button, Icon, Text, TextInput} from '@gravity-ui/uikit';
import {CirclePlus} from '@gravity-ui/icons';
import {useState} from "react";
import {ITodo} from "./utils/interface/ITodo.ts";
function App() {

    const [todoList, setTodoList] = useState<ITodo[]>()

  return (
    <>
        <header>
            <Text variant="header-2">ToDoListPractice</Text>
        </header>
        <div className="container">
            <div className="container-todo">
                <div className="container-todo-add">
                    <TextInput size="xl" placeholder="New todo..." />
                    <Button view="action" size="xl"><Icon size={25} data={CirclePlus}></Icon></Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
