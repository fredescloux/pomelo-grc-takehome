import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyArXGta4kADG3hWUGKngXW9vSESH_7HUBY",
  authDomain: "pomelo-grc-takehome.firebaseapp.com",
  projectId: "pomelo-grc-takehome",
  storageBucket: "pomelo-grc-takehome.firebasestorage.app",
  messagingSenderId: "503623510890",
  appId: "1:503623510890:web:d4f71f2f466ab4e96a5313",
  measurementId: "G-F1BFVX3L2D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };