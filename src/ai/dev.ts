import { config } from 'dotenv';
config();

import '@/ai/flows/classify-orbital-debris.ts';
import '@/ai/flows/summarize-mission-telemetry.ts';