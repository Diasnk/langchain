import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const dynamic = 'force-dynamic'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

const PROMPT = ""

export async function POST(req: Request) {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        stream: true,
        messages: [
            {role:"system", content: PROMPT},
                ...messages
        ],
        max_tokens: 256,
        temperature: 0.3,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
}