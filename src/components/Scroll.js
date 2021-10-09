import React from 'react';

//children 
 // <Scroll> 
 //        <CardList robots= {    : child of scroll
 //           //this.state.robots
 //            filteredrobots }/>            
 //         {/*state passed in as a prop to the CardList.*/}
 // </Scroll>  

const Scroll = (props) => {
	//every components has props as children
	//using this we can create components that wrap other components

	return(

		//now just add styling 
		//<div style= {{....}}> double curly brackets mean that
		//this is an JS expression and we are returning an Object in it
        //that Object can have css styles
		<div style= {{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
			{props.children}
		</div>
	); 
};

export default Scroll;