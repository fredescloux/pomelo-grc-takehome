import { generateKeyPair, SignJWT, exportSPKI } from 'jose';
import fs from 'fs';

const run = async () => {
  const { publicKey, privateKey } = await generateKeyPair('ES256');

  const jwt = await new SignJWT({ test: 'ValidToken' })
    .setProtectedHeader({ alg: 'ES256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(privateKey);

  const exportedPubKey = await exportSPKI(publicKey);

  console.log('✅ JWT:');
  console.log(jwt);
  console.log('\n🛡️ Matching Public Key (put this in InputForm.jsx):\n');
  console.log(exportedPubKey);

  fs.writeFileSync('jwt.txt', jwt);
  fs.writeFileSync('publicKey.pem', exportedPubKey);
};

run();
