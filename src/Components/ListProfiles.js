import React, { Component } from 'react';
import users from '../Data/Users';
import movies from '../Data/Movies';
import Profile from '../Components/Profile';

class ListProfiles extends Component {
 	render(){
    	return (
          <ul className='profile-list'>
          	{this.props.profiles.map((profile) => (
          	<li key={profile.id} className='profile-list-item'>
				<Profile
					user={users[profile.userID]}
					movie={movies[profile.favoriteMovieID]}
				/>
			</li>
            ))}
  		  </ul>
    )}
}

export default ListProfiles;