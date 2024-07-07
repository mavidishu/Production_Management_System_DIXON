import admin from "firebase-admin";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const serviceAccount = require('./serviceAccountKey.json', { assert: { type: 'json' } });


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket:'gs://admin-dashboard-c2206.appspot.com',
});


const bucket = admin.storage().bucket();

export {bucket};