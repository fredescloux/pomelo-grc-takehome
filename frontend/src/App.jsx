import { useEffect, useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import InputForm from "./components/InputForm";
import DataTable from "./components/DataTable";

function App() {
  const [entries, setEntries] = useState([]);
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Logout failed", error));
  };

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
