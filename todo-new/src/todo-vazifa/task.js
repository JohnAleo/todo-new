import React, { useState } from "react";
import styled from "styled-components";

export default function TaskList({ todosData, onChangeTodo, onDeleteData }) {
  return (
    <>
      {todosData.map((todo) => {
        return (
          <div key={todo.id}>
            <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteData} />
            {/* {value.title} */}
          </div>
        );
      })}
    </>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEddit, setIsEddit] = useState(false);

  let todoContent;
  if (isEddit) {
    todoContent = (
      <>
        <input 
          style={{display:'flex',border:'1px solid blueviolet',width:'240px',height:'30px'}}
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <Buttonwrapper onClick={() => setIsEddit(false)}>Save</Buttonwrapper>
      </>
    );
  } else {
    todoContent = (
      <Default>
        {todo.title}
        <Buttonwrapper onClick={() => setIsEddit(true)}>Edit</Buttonwrapper>
      </Default>
    );
  }
  return (
    <Inputwrapper>
      {todoContent}
      <Buttonwrapper $delete onClick={() => onDelete(todo.id)}> Delete</Buttonwrapper>
    </Inputwrapper>
  );
}
const Buttonwrapper=styled.div`
display:flex;
align-items: center;
justify-content: center;
width: ${props=> props.$delete ? '60px':'40px'};
height:30px;
border: 1px solid ${props=> props.$delete ? 'blue':'blueviolet'} ;
border-radius: 5px;
color:white;
background-color:${props=> props.$delete? 'red':"blueviolet"};`

const Inputwrapper=styled.div`
display:flex;

`

const Editwrapper=styled.div`
display:flex;
flex-direction: column  ;
justify-content:space-between;`

const Default=styled.div`
display:flex;
width: 240px;
justify-content:space-around;
`