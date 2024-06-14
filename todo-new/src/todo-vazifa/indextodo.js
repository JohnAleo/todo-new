import React, { useState } from "react";
import AddTodo from "../todo-vazifa/addtodo";
import TaskList from "../todo-vazifa/task";
import styled from "styled-components";

let nextId = 3;


const initialDataList = [
  {
    id: 0,
    title: "Running",
    done: true,
  },
  {
    id: 1,
    title: "Working",
    done: false,
  },

  {
    id: 2,
    title: "Coding",
    done: true,
  },
];

const TodoIndex = () => {
  const [todos, setTodos] = useState(initialDataList);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }
  console.log(todos);
  function handleChangeList(nextList) {
    setTodos(
      todos.map((value) => {
        if (value.id === nextList.id) {
          return nextList;
        } else {
          return value;
        }
      })
    );
  }
  function handleDelete(todoId) {
    setTodos(todos.filter((value) => value.id !== todoId));
  }

  return (
    <Container>
    <div style={{display:'flex',
                flexDirection:'column',
                alignItems:'center',  
                width:'400px',
                height:'500px',
                borderRadius:'10px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                }}>
      <h1>Todo List</h1>
      <AddTodo onTodoAdd={handleAddTodo} />
      <TaskList
        todosData={todos}
        onChangeTodo={handleChangeList}
        onDeleteData={handleDelete}
      />
    </div>
    </Container>
  );

};
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top: 100px;
background-color: aliceblue;
`

export default TodoIndex;