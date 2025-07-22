import { useState } from 'react';
import dayjs from 'dayjs';
import { importSPKI, jwtVerify } from 'jose';

const publicKey = `-----BEGIN PUBLIC KEY-----
MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEMU1JFVEO9FkVr0r041GpAWzKvQi1TBYm
arJj3+aNeC2aK9GT7Hct1OJGWQGbUkNWTeUr+Ui09PjBit+AMYuHgA==
-----END PUBLIC KEY-----`;

const InputForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isJwtValid = false;
    if (input.split('.').length === 3) {
      try {
        const key = await importSPKI(publicKey, 'ES256');
        await jwtVerify(input, key);
        isJwtValid = true;
      } catch (err) {
        isJwtValid = false;
      }
    }
    console.log('JWT submitted:', input);
    console.log('JWT isJwtValid:', isJwtValid);
    onSubmit({
      text: input,
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      isJwtValid,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;