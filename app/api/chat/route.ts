import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT =
  'You are a sales assistant for a local business. Your goal is to convert messages into booked appointments. Be concise, natural, and guide the user to booking. Ask for: service needed, budget range, and timeline if missing.';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.4,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...(messages || [])]
    });

    const reply = completion.choices[0]?.message?.content || '';
    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ reply: 'Unable to generate response.', error }, { status: 500 });
  }
}
