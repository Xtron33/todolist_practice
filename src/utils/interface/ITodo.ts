import * as React from "react";

export interface ITodo{
    isDone: boolean,
    todo: string
}

export interface IToDoListContext{
    toDos: ITodo[],
    setToDos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}