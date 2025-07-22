import { useState } from 'react';
import dayjs from 'dayjs';
import { importSPKI, jwtVerify } from 'jose';

const publicKey = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEnet8HH2L7Rb2C39LB9GjY+woWo57
9VRB3VYbQUYW1Btp/N21+18v1wiU11Li5+1RGFtZSq0h30bwWSk60QEuZw==
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