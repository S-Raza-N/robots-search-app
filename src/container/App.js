import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
//import {robots} from './robots';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// making a parent node 
// in order to app the app interactive the searchbox and the cardLists must communicate
// we use the one way dataflow 
// as for them to communicate
// they need to send info. to the App.js
// in order to do this we have an idea of State in React
// A 'State' is simply description of your app
// It is an OBJECT that describes your application
// i.e in our the robots and whatever is entered in our searchbox
// props(properties) are simply fixed things that come out of our state which can change
// parent nodes feeds the states to the child node
// and the child node get the state as a prop(immutable).



class App extends Component {
	constructor(){
        super()
		this.state = {
			robots: [],
	        searchfield: ''
		}
	}

    componentDidMount() {
    	//one line of code broken into 3.
    	fetch('https://jsonplaceholder.typicode.com/users')
    	.then(response => response.json())
    	.then (users => this.setState({ robots: users }));
    }



    //function to change the robots with the input
    //we say every time input changes we get an event
    //and console.log is trigerred.
	onSearchChange = (event) => {
        
        //changing the state so that the search field always gets updated.  
		this.setState({searchfield: event.target.value})
	}

// If we look at above code, we've now communicated the search box with the app,
// and we have the search field constantly changing. So now we need to communicate it to the "filteredRobots". What we can do is that "filteredRobots" can now
// be used as props instead of "this.state.robots"

// So cut and copy it from the above function to the function below And now we have access to "filteredRobots", 
// and instead of passing "this.state.robots" we simply pass "filteredRobots"


	render(){

		// If the name of the robots in lowercase includes (- and this does the comparison -) if anything in the string(searchfield) "toLowerCase",
		// well, then only return the robots that returns true to this. 
		const filteredrobots =  this.state.robots.filter( robot => {
           return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
        

        if(this.state.robots.length === 0){
        	return <h1 className= 'tc'> ....Loading.... </h1>

        }else{
        	return (
        		<div className= 'tc'>
        		  <h1 className= 'f1'>ROBOFRIENDS</h1>

		           {/*// {we add this.onSearchChange cauz it is now an object in the class
		           //     which is equalent to saying App.onSearchChange}*/}
		          <Searchbox searchChange = { this.onSearchChange } />
                 { <Scroll>
                 	<ErrorBoundry>
		             <CardList robots= {
		  	           //this.state.robots
		  	            filteredrobots }/> 
		  	         </ErrorBoundry>              
		                {/*state passed in as a prop to the CardList.*/}
		           </Scroll>    }
		       </div>
		  );	
        }
	  
	} 

}

export default App; 