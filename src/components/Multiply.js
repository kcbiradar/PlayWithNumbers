import { useState } from "react";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import './Style.css';
function Multiply() {

    const [state , setState] = useState({
        level:"Easy",
        x:Math.ceil(Math.random() * 10),
        y:Math.ceil(Math.random() * 10),
        answer:"",
        score : 0,
        incorrect:false
    });

    function onSubmission(e) {
        if(state.answer.length > 0) {
            const result = parseInt(state.answer);
            if(state.x * state.y === result) {
                if(state.level === "Easy") {
                    state.x = Math.ceil(Math.random() * 10);
                    state.y = Math.ceil(Math.random() * 10);
                } else if(state.level === "Normal") {
                    state.x = Math.ceil(Math.random() * 100);
                    state.y = Math.ceil(Math.random() * 100);
                } else {
                    state.x = Math.ceil(Math.random() * 1000);
                    state.y = Math.ceil(Math.random() * 1000);
                }
                setState({
                    ...state,
                    score : state.score + 1,
                    answer: "",
                    incorrect:false
                });
            } else {
                setState({
                    ...state,
                    score : Math.max(state.score - 1 , 0),
                    answer:"",
                    incorrect:true
                });
            }
        }
    }

    function check(e) {
        setState({
            ...state,
            answer:e.target.value
        });
    }

    function selectList(e) {
        if(e.target.value === "Easy") {
            setState({
                ...state,
                x : Math.ceil(Math.random() * 10),
                y:Math.ceil(Math.random() * 10),
                level:e.target.value,
                incorrect:false
            });
        }
        if(e.target.value === "Normal") {
            setState({
                ...state,
                x : Math.ceil(Math.random() * 100),
                y:Math.ceil(Math.random() * 100),
                level:e.target.value,
                incorrect:false
            }); 
        }
        if(e.target.value === "Hard") {
            setState({
                ...state,
                x : Math.ceil(Math.random() * 1000),
                y:Math.ceil(Math.random() * 1000),
                level:e.target.value,
                incorrect:false
            }); 
        }
    }

    return (
      <div className="App">
            <div>
                <label for="level">Choose a level</label>
                <br/>
                <select name = "level" onChange={selectList} value = {state.easy}>
                    <option>Easy</option>
                    <option>Normal</option>
                    <option>Hard</option>
                </select>
            </div>
            <br/><br/>
            <div id="problem" className={state.incorrect ? "incorrect" : ""} >{state.x} x {state.y}</div>
            <input autoFocus = {true} onChange={check} value={state.answer}/>
            <br/>
            <Button onClick={onSubmission} >Submit</Button>
            <div>score : {state.score}</div>
            <NavLink to = "/" className = "btn btn-dark">Back</NavLink>
      </div>
    );
  }
  
  export default Multiply;