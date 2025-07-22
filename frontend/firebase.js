import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyArXGta4kADG3hWUGKngXW9vSESH_7HUBY",
  authDomain: "pomelo-grc-takehome.firebaseapp.com",
  projectId: "pomelo-grc-takehome",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };