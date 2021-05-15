import React, { useState } from 'react';
import logo from './logo.jpg';
import './App.css';
import Data from "./Data"
import SearchIcon from '@material-ui/icons/Search';
function App() {
	const [input,setInput] = useState("");

	const handleClick = (e) =>{
		e.preventDefault();
		setInput(e.target.value)


	}
	var data = Data
	
	if(input.length > 0 ){
		data = data.filter((i) => {
			console.log(i.question.match(input),"wow")
			var re = new RegExp(input,"gi");
			return i.question.match(re)

		})
		console.log(data[0],'from if')
	}
	

  return (
    <div className="App">
      <header className="App-header">
	  {/*
        <img src={logo} className="App-logo" alt="logo" />
	*/}
	 <div class="sign">
	  <span class="fast-flicker">F</span>udu<span class="flicker">d</span>eye
	  </div>
        <div className="form-input">
	  <input className="input-search"  placeholder="search.." name="input" onChange={handleClick} value={input} ></input>
	  <SearchIcon />
	</div>
	  {data.map((ques,index) => {
		  return (
			  <div className="searched" key={index}> 
			    <ul> 
			      <li> {ques.question} - {ques.sub} </li>
			    </ul>
			  </div>

		  )
	  })};
      </header>
    </div>
  );
}

export default App;
