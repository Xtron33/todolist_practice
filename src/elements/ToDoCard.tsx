import {ITodo} from "../utils/interface/ITodo.ts";
import {Button, Card, Checkbox, Icon, Text} from "@gravity-ui/uikit";
import {TrashBin} from "@gravity-ui/icons";

const ToDoCard = (props: {elem: ITodo, idx: number, remove: (idx:number) => void,select: (idx:number) => void}) => {

    function handleRemove(){
        props.remove(props.idx)
    }

    function handleSelect(){
        props.select(props.idx)
    }

    return(
        <Card className="container-todo-map-container" theme="normal" type="container" view="filled">
            <Checkbox onUpdate={() => handleSelect()} checked={props.elem.isDone} size="l"></Checkbox>
            <div className="container-todo-map-container-text"><Text style={{textDecoration: props.elem.isDone ? "line-through white" : "none"}} color={props.elem.isDone ? "hint" : "primary"} variant="body-3">{props.elem.todo}</Text></div>
            <Button onClick={() => handleRemove()} view="flat-danger" size="xl"><Icon size={25} data={TrashBin}></Icon></Button>
        </Card>
    )
}

export default ToDoCard