import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';

export const dynamic = 'force-dynamic'

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

const TEMPLATE = `

Prompt:
{prom}

Current conversation:
{chat_history}

user: {input}
assistant:`;

export async function POST(req: Request) {
    try {
        // Extract the `messages` from the body of the request
        const { messages } = await req.json();

        const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);

        const currentMessageContent = messages.at(-1).content;

        const prom = `You are a master of college essay writing. You have a database of the most successful and unique essays that got students into top universities in the United States. Answer user's questions based on the following context. If user does NOT give you an essay, do NOT respond. Give an extended answer. You have access to a successful college essays database and can assist according to them. If the answer is not in the context, reply politely that you do not have that information available. Analyze the following essay and provide feedback in JSON format with the following details:
        
        1. Strength: Determine all the strong traits of the essay, give a reason, and description why these are the strong parts of the essay.
        2. Areas of improvment: Determine all the flaws and weaknesses of the essay. Show where it needs to be improved and how. Provide a reason and a description of that reason. 
        3. Final Thoughts: Give an overall feedback about the essay. Summarize all the strong and weak points of the essay.
        
        DO NOT ANSWER IF IT IS NOT AN ESSAY

        DONT USE ''' JSON {}
        ''' AT YOUR RESPONSE, I AM GETTING ERROR BECAUSE OF THAT

        THE STRUCTURE SHOULD BE LIKE THAT, DON'T CHANGE THE STRUCTURE OF JSON

        this is json template example:

        {{
          "Strengths": [
            {
              "Reason": "Engaging Introduction",
              "Description": "Your opening paragraph captures attention by setting up the challenge and your initial confidence. This creates a compelling narrative arc."
            },
            {
              "Reason": "Vivid Descriptions",
              "Description": "You effectively describe the rigorous nature of the program and the emotional and physical toll it took on you and your peers. This helps the reader understand the depth of your experience."
            },
            {
              "Reason": "Personal Growth",
              "Description": "You clearly articulate how the program changed you, both academically and personally. This is crucial for college essays as it shows your ability to reflect and grow from experiences."
            }
          ],
          "Areas for Improvement": [
            {
              "Reason": "Grammar and Punctuation",
              "Description": "There are several grammatical errors and inconsistencies in capitalization. For example, 'ThIS pAST SUmmEr' should be 'This past summer.' Consistent capitalization and proper grammar will make your essay more professional."
            },
            {
              "Reason": "Flow and Structure",
              "Description": "While your essay is engaging, it could benefit from smoother transitions between paragraphs. For instance, the shift from describing the MITES program to listing your school-year activities could be more seamless."
            },
            {
              "Reason": "Specificity and Depth",
              "Description": "While you mention the subjects you studied and the activities you participated in, adding specific anecdotes or examples can make your experiences more vivid. For example, you could describe a particular problem set that was especially challenging or a moment when you felt particularly supported by your peers."
            },
            {
              "Reason": "Conclusion",
              "Description": "Your conclusion could be stronger. Instead of just stating that MITES was the most challenging experience, you could reflect on how it has prepared you for future challenges and your aspirations for college and beyond."
            }
          ],
          "Final Thoughts": {
            "score": "8/10",
            "comments": "Your essay has a strong foundation, and with some polishing, it can become even more compelling. Focus on refining the grammar, enhancing the flow, and adding more specific details to make your experiences come alive. Remember, the goal is to show your unique perspective and how your experiences have shaped you. Feel free to ask any further questions or for additional assistance on specific parts of your essay!"
          }
        }}`

        const prompt = PromptTemplate.fromTemplate(TEMPLATE);

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
            model: 'gpt-3.5-turbo',
            temperature: 0.8,
        });

        /**
       * Chat models stream message chunks rather than bytes, so this
       * output parser handles serialization and encoding.
       */
        const parser = new HttpResponseOutputParser();

        const chain = prompt.pipe(model).pipe(parser);

        // Convert the response into a friendly text-stream
        const stream = await chain.stream({
            chat_history: formattedPreviousMessages.join('\n'),
            input: currentMessageContent,
            prom: prom
        });


        // Respond with the stream
        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (e: any) {
        return Response.json({ error: e.message }, { status: e.status ?? 500 });
    }
}