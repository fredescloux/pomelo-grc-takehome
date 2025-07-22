import { useEffect, useState } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import InputForm from './components/InputForm';
import DataTable from './components/DataTable';

function App() {
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) return <div>Authenticating...</div>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {!user ? (
        <button
          onClick={handleLogin}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          Login with Google
        </button>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl">Welcome, {user.displayName}</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          <InputForm setEntries={setEntries} />
          <DataTable entries={entries} />
        </div>
      )}
    </div>
  );
}

export default App;
