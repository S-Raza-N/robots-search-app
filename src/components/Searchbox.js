import React from 'react';


// chil node of App.js


//we areusing destructuring here: ({searchfield, searchChange }) 
//which allows us to grab the props object and grab its properties
//**searchfield is not used and will be removed in the upcomming videos.

const Searchbox = ({searchfield, searchChange }) => {
	return(
     <div className= 'pa2 '>
       <input 
       className = 'pa3 ba b--green bg-lightest-blue'
       type ='search' 
       placeholder= 'search robots' 
       onChange= {searchChange} />
      </div>
	);
}

export default Searchbox;