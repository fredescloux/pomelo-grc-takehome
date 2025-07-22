import { useState } from 'react';
import dayjs from 'dayjs';
import { importSPKI, jwtVerify } from 'jose';

const publicKey = `-----BEGIN PUBLIC KEY-----MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE5HtLv0yI7V1H/VB2DjxMguuFy6rbQXGxq2HqReG1bT0NzrOqWXU+2+H4cZCPc6gT1s3l3ibUOBDmv60DkzGzexEZMAwPHDM0D15I6lEOQkaDYqqYwPMdl3kp8aF4YNUX-----END PUBLIC KEY-----`;


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