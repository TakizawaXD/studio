import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import * as firebase from '@genkit-ai/firebase';
import {next} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI(),
    firebase.firebase(),
    next({
      // We need to specify the directory where Genkit can find the compiled flow code.
      // This is because Genkit CLI and the Next.js dev server run as separate processes.
      flowsDir: 'src/ai/flows',
    }),
  ],
  logLevel: 'debug',
  enableTracing: true,
});
