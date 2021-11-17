import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function About() {
  const {user} = useContext(UserContext);

  return(
    <div class="py-3 text-center"> {/* untuk mengatur text ke arah tengah dan untuk padding */} 
      <h1>About Page</h1>

      <p>Welcome <strong>{JSON.stringify(user, null, 2)}</strong>.</p>
    </div>
  );
}

export default About;
