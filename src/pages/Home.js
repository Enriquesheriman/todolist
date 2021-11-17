import React, { useContext } from 'react';
import { login } from '../login';
import { UserContext } from '../UserContext';

function Home() {
  const {user, setUser} = useContext(UserContext);

  return(
    <div class="py-3 text-center">{/* untuk mengatur text ke arah atas dan untuk menaruh text ke tengah */}
      <h1>Home Page of useContext</h1>

      <p>Welcome <strong>{JSON.stringify(user, null, 2)}</strong>.</p>

      {
        user === "Guest" ? <button class="btn btn-primary" onClick={async () => {
          const user = await login();
          setUser(user);
        }}>Login</button> : <button class="btn btn-primary" onClick={() => {setUser('Guest')}}>Logout</button>
      }
      {/*mengubah warna button */}
    </div>
  );
}

export default Home;
