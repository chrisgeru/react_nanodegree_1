import React, { Component } from 'react';

/*
Example: Jane Cruz's favorite movie is Planet Earth 1.
*/
class Profile extends Component {
 	render(){
    	return (
          <div className='profile-data'>
             <span className='text-bold'>
               {this.props.user.name}
             </span>
             's favorite movie is&nbsp;
             <span className='text-blue'>
               {this.props.movie.name}
             </span>
             .
          </div>
        )
    }
}

export default Profile;