import { useState } from 'react';
import InputForm from './components/InputForm';
import DataTable from './components/DataTable';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from './firebase';

function App() {
  const [entries, setEntries] = useState([]);
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const handleLogout = () => signOut(auth).then(() => setUser(null));

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
          <InputForm onSubmit={(data) => setEntries([data, ...entries])} />
          <DataTable entries={entries} />
        </>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
}

export default App;