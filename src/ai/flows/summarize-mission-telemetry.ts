'use server';

/**
 * @fileOverview Summarizes mission telemetry data for customers.
 *
 * - summarizeMissionTelemetry - A function that summarizes the mission telemetry.
 * - SummarizeMissionTelemetryInput - The input type for the summarizeMissionTelemetry function.
 * - SummarizeMissionTelemetryOutput - The return type for the summarizeMissionTelemetry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMissionTelemetryInputSchema = z.object({
  telemetryData: z
    .string()
    .describe("The raw telemetry data from the mission, in JSON format."),
});
export type SummarizeMissionTelemetryInput = z.infer<typeof SummarizeMissionTelemetryInputSchema>;

const SummarizeMissionTelemetryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the mission telemetry data.'),
  progress: z.string().describe('Short, one-sentence summary of what has been generated.'),
});
export type SummarizeMissionTelemetryOutput = z.infer<typeof SummarizeMissionTelemetryOutputSchema>;

export async function summarizeMissionTelemetry(
  input: SummarizeMissionTelemetryInput
): Promise<SummarizeMissionTelemetryOutput> {
  return summarizeMissionTelemetryFlow(input);
}

const summarizeMissionTelemetryPrompt = ai.definePrompt({
  name: 'summarizeMissionTelemetryPrompt',
  input: {schema: SummarizeMissionTelemetryInputSchema},
  output: {schema: SummarizeMissionTelemetryOutputSchema},
  prompt: `You are an AI assistant that summarizes mission telemetry data for RECAP customers.

  Telemetry Data:
  {{telemetryData}}

  Please provide a concise summary of the key events and progress indicated in the telemetry data.
  Include any significant anomalies or noteworthy achievements.  Keep the summary to under 200 words.
  Your progress so far: {{progress}}`,
});

const summarizeMissionTelemetryFlow = ai.defineFlow(
  {
    name: 'summarizeMissionTelemetryFlow',
    inputSchema: SummarizeMissionTelemetryInputSchema,
    outputSchema: SummarizeMissionTelemetryOutputSchema,
  },
  async input => {
    const {output} = await summarizeMissionTelemetryPrompt({
      ...input,
      progress: 'Generated a summary of mission telemetry data for customer review.',
    });
    return output!;
  }
);
