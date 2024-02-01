import { GoogleGenerativeAI }  from  "../genai.js"

const API_KEY = "AIzaSyDwwVvpdHSiH-u0EZ0o_hH8I_UnOsxxs0Q"
const genAI = new GoogleGenerativeAI(API_KEY)


async function run(prompt) {  

  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"})

  //const prompt = "Who is a gemini?"

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  console.log(text)
  return text
}

//copy input
//const text = document.getElementById("prompt")
//const selectValue = text.select()
//document.execCommand("copy")
//console.log(selectValue.value)




const generateCapture = document.getElementById("btn-2-2")
generateCapture.addEventListener("click", function (){
  //copy input
  const text = document.getElementById("prompt")
  text.select()
  document.execCommand("copy")
  prompt = text.value
  async function response(){
    const response = await run(prompt)
    document.getElementById("response").innerHTML = response
  }
  response()
})