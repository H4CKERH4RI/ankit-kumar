
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI Professional Assistant for Ankit Kumar. 
Your goal is to answer questions from potential clients or recruiters about Ankit.

About Ankit Kumar:
- Origin: Jaipur, Rajasthan, India.
- Profession: Software Developer and Project Manager.
- Current Company: softserv.in, Jaipur.
- Contact Details: Phone: 8290039141, Email: officialakki555@gmail.com.
- Key strengths: Leading development teams, full-stack software development, architectural design, and project lifecycle management.
- Personality: Professional, solution-oriented, and highly collaborative.

When answering:
1. Be polite and professional.
2. If asked about contact, provide his phone or email.
3. If asked about his current role, mention softserv.in.
4. Keep answers concise.
5. If you don't know a specific detail about his personal life, redirect them to contact him directly.
`;

export async function getGeminiResponse(userMessage: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please try again or contact Ankit directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently unavailable. Please reach out to Ankit via email at officialakki555@gmail.com.";
  }
}
