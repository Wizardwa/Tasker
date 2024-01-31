import { GoogleGenerativeAI }  from  "../genai.js"

const API_KEY = "AIzaSyDwwVvpdHSiH-u0EZ0o_hH8I_UnOsxxs0Q"
const genAI = new GoogleGenerativeAI(API_KEY)


async function run() {  

  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"})

  const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  console.log(text)
}

run()