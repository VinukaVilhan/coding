import { useState, useEffect } from "react";
import TodoItem from "./todoItem";
import TodoForm from "./todoForm";
import {Box} from "@mui/material";
import { List} from "@mui/material";
import {Typography} from "@mui/material";

const getinitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data) return [];
    return data;
};

export default function TodoList()
{
    const [todos, setTodos] = useState(getinitialData);

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id);
        });
    };


    const toggleTodo = (id) => 
    {
        setTodos((prevTodos) => 
            {
                return prevTodos.map((todo) =>{
                    if(todo.id === id)
                    {
                        return {...todo, completed: !todo.completed};
                    }
                    else
                    {
                       return todo; 
                    }
                });
            });
    };

    const addTodo = (text) =>
    {
        setTodos(prevTodos => 
            {
                return [...prevTodos, {text: text, id:crypto.randomUUID() , completed:false }]
            });
    };

    return (
        <Box sx={{
            display:"flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            margin: 10 
        }}> 
        {/* typography */}
        <Typography variant="h1" component="h1" sx={{ flexGrow: 1 }}>
            Todos
        </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
                return <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        remove= {removeTodo}
                        toggle={() => toggleTodo(todo.id)}/>; 
            })}
            <TodoForm addTodo={addTodo}/>
            </List>
        </Box>
    );
}
