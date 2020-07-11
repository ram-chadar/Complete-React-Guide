import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

state={
  persons:[
    {name:'ram',age:'23'},
    {name:'sham',age:'25'},
    {name:'amol',age:'24'}


  ],
  showPersons:false
}
switchNameHndler=(newName) =>{
  
  //console.log('Clicked');
 // this.state.persons[0].name='xyz';    dont do this ,insted of this use this.setState({})
this.setState({
  persons:[
    {name:newName,age:'23'},  // param from button click event 

    {name:'abc',age:'25'},
    {name:'pqr',age:'24'}
  ]
}
  )

}

nameNameHndler=(event) =>{
 
this.setState({
  persons:[
    {name:'xyz',age:'23'},  // param from button click event 
    
    {name:event.target.value,age:'25'},
    {name:'pqr',age:'24'}
  ]
}
  )

}

togglePersonHandler = () => {
const doesShow=this.state.showPersons;
this.setState({showPersons: !doesShow})
}
  render() {

    const style={
      backgroungColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    };
let persons=null;
if(this.state.showPersons)
{
  persons = (
<div>
<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
<Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
click={this.switchNameHndler.bind(this,'Akash')}
changed={this.nameNameHndler}  >Children text</Person>  
<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
</div>
  );
}
    return (
      <div className="App">
        <h1>Hi Ram</h1>

        {/* <button 
        style={style}
        onClick={this.switchNameHndler.bind(this,'Vaibhav')}>Switch Name
        </button> */}

        <button 
        style={style}
        onClick={this.togglePersonHandler}>Switch Name
        </button>

 {/* 2 nd way below */}

{persons}

        {/* <Person name="ram" age="22" />
        <Person name="ram" age="22" > dfghjj </Person>
        <Person name="sham" age="27" /> */}
{/* {
this.state.showPersons === true ?    // 1 st way of hiding
  <div>
<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
<Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
click={this.switchNameHndler.bind(this,'Akash')}
changed={this.nameNameHndler}  >Children text</Person>  
<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
</div> : null
} */}

      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'RAM'))
    
  }
}

export default App;
