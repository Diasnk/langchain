import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';

import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';

import { JSONLoader } from "langchain/document_loaders/fs/json";
import { RunnableSequence } from '@langchain/core/runnables'
import { formatDocumentsAsString } from 'langchain/util/document';
import { CharacterTextSplitter } from 'langchain/text_splitter';

const loader = new JSONLoader(
    "src/data/fiftyEssays.json", [],);

export const dynamic = 'force-dynamic'

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

const PROMPT = `You are a professional college essay writer who helps students apply to United States colleges. You will be given user's essay and a feedback on it. DO NOT WRITE ANYTHING EXCEPT YOUR ESSAY. NO GREETINS AND ET CETERA. You need to complete essay based on the feedback and send it back.:
==============================
Context: {context}
==============================
Current conversation: {chat_history}

user: {question}
assistant:`;



export async function POST(req: Request) {
    try {
        // Log the API key to ensure it's being accessed correctly
        console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);

        // Extract the `messages` from the body of the request
        const { messages } = await req.json();

        const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);

        const currentMessageContent = messages[messages.length - 1].content;

        const docs = await loader.load();

        const prompt = PromptTemplate.fromTemplate(PROMPT);

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
            model: 'gpt-4o',
            temperature: 0.3,
            streaming: true,
            verbose: true,
        });

        /**
         * Chat models stream message chunks rather than bytes, so this
         * output parser handles serialization and encoding.
         */
        const parser = new HttpResponseOutputParser();

        const chain = RunnableSequence.from([
            {
                question: (input) => input.question,
                chat_history: (input) => input.chat_history,
                context: () => formatDocumentsAsString(docs),
            },
            prompt,
            model,
            parser,
        ]);

        // Convert the response into a friendly text-stream
        const stream = await chain.stream({
            chat_history: formattedPreviousMessages.join('\n'),
            question: currentMessageContent,
        });

        // Respond with the stream
        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );

    } catch (e: any) {
        console.error('Error processing request:', e);
        console.log(e.message)
        return new Response(JSON.stringify({ error: e.message }), { status: e.status ?? 500 });
    }
}
