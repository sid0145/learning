import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state={
    persons:[
      {id:'a',name:'siddhesh',branch:"cse"},
      {id:'as',name:"sandeep",branch:"cse"},
      {id:'asa',name:"churan",branch:"cse"}
    ]
  }
  nameChangeHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex((p)=>{
      return p.id===id;
    });
    const person={
      ...this.state.persons[personIndex]
    };
      person.name=event.target.value;
      const persons=[...this.state.persons];
      persons[personIndex]=person;

    this.setState({persons:persons})
  }
  deletePersonHandler=(currentIndex)=>{
  // const persons=this.state.persons.slice();
  const persons=[...this.state.persons]
  persons.splice(currentIndex, 1);
  this.setState({persons:persons})
  }
  showAllPersons =()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }
 render(){
   const style={
     backgroundColor:'green',
     font:'inherit',
     border:'1 px solid blue',
     padding:"8px",
   };
   let persons=null;
   if(this.state.showPersons){
     persons=( <div>
       {this.state.persons.map((person, index)=>{
         return <Person click={()=>this.deletePersonHandler(index)}
         name={person.name}
         branch={person.branch}
         key={person.id}
         changed={(event)=>this.nameChangeHandler(event, person.id)}/>
       })
       }
      </div>);
      style.backgroundColor='red';
   };

   const classes=[]
   if(this.state.persons.length<=2){
     classes.push('red');
   }
   if(this.state.persons.length<=1){
     classes.push('bald');
   }
   return(
     <div className="App">
     <h1 className={classes.join(' ')}>hii! this is my REACT app</h1>
       <button
       style={style}
       onClick={this.showAllPersons}>clickMe</button>
         {persons}
     </div>
   );
 }
}


export default Radium(App);
