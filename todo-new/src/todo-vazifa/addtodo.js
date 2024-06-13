import React, { useState } from "react";
import styled from "styled-components";

const AddTodo = ({ onTodoAdd }) => {
  const [title, setTitle] = useState("");
  return (
    <Inputwrapper>
      <input 
        style={{width:'300px',border:'1px solid blueviolet'}}
        placeholder="add your new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Buttonwrapper
        onClick={() => {
          setTitle("");
          onTodoAdd(title);
        }}
      >
        Add
      </Buttonwrapper>
    </Inputwrapper>
  );
};

const Inputwrapper=styled.div`
display:flex;


`
const Buttonwrapper=styled.div`
display:flex;
align-items:center ;
justify-content: center;
border-radius:5px;
color: white;
background-color: blueviolet;
width:40px;
height:30px;
border:1px solid blue`
export default AddTodo;