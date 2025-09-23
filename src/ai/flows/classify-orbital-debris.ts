'use server';

/**
 * @fileOverview Classifies captured orbital debris based on visual data from the capsule's sensors.
 *
 * - classifyOrbitalDebris - A function that handles the debris classification process.
 * - ClassifyOrbitalDebrisInput - The input type for the classifyOrbitalDebris function.
 * - ClassifyOrbitalDebrisOutput - The return type for the classifyOrbitalDebris function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClassifyOrbitalDebrisInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the captured orbital debris, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  additionalDetails: z
    .string()
    .optional()
    .describe('Any additional details or context about the debris.'),
});
export type ClassifyOrbitalDebrisInput = z.infer<typeof ClassifyOrbitalDebrisInputSchema>;

const ClassifyOrbitalDebrisOutputSchema = z.object({
  classification: z.string().describe('The classification of the orbital debris.'),
  confidence: z.number().describe('The confidence level of the classification (0-1).'),
  potentialImpact: z
    .string()
    .describe('A description of the potential impact of this type of debris.'),
  reportSummary: z.string().describe('A short summary report suitable for customer download.'),
});
export type ClassifyOrbitalDebrisOutput = z.infer<typeof ClassifyOrbitalDebrisOutputSchema>;

export async function classifyOrbitalDebris(
  input: ClassifyOrbitalDebrisInput
): Promise<ClassifyOrbitalDebrisOutput> {
  return classifyOrbitalDebrisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'classifyOrbitalDebrisPrompt',
  input: {schema: ClassifyOrbitalDebrisInputSchema},
  output: {schema: ClassifyOrbitalDebrisOutputSchema},
  prompt: `You are an expert in analyzing orbital debris and its potential impact. Analyze the provided image and any additional details to classify the debris, determine the confidence level of your classification, describe the potential impact, and generate a short report summary.

Image: {{media url=photoDataUri}}
Additional Details: {{{additionalDetails}}}

Respond in the requested JSON format.
`,
});

const classifyOrbitalDebrisFlow = ai.defineFlow(
  {
    name: 'classifyOrbitalDebrisFlow',
    inputSchema: ClassifyOrbitalDebrisInputSchema,
    outputSchema: ClassifyOrbitalDebrisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
