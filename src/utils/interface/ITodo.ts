import * as React from "react";

export interface ITodo{
    id: string,
    isDone: boolean,
    todo: string
}

export interface IToDoListContext{
    toDos: ITodo[],
    setToDos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}