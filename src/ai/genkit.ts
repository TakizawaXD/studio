'use server';

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {plugin as nextPlugin} from '@genkit-ai/next/plugin';

export const ai = genkit({
  plugins: [
    googleAI(),
    nextPlugin({
      // We need to specify the directory where Genkit can find the compiled flow code.
      // This is because Genkit CLI and the Next.js dev server run as separate processes.
      flowsDir: 'src/ai/flows',
    }),
  ],
  logLevel: 'debug',
  enableTracing: true,
});
