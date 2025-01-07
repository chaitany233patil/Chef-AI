import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they 
could make with some or all of those ingredients. You don't need to use every ingredient they mention 
in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include 
too many extra ingredients. 

Format your response as valid Markdown, starting directly with the recipe content. 
Do not include extra titles, notes, or non-Markdown code blocks. 
Your response must look like this:

## Recipe Title

### Ingredients
- Ingredient 1
- Ingredient 2

### Instructions
1. Step 1
2. Step 2
...
`;

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

export default async function getRecipeFromMistral(ingredientsArr, onUpdate) {
  const generateBtn = document.querySelector(".get-recipe-btn");
  generateBtn.innerText = "Generating...";
  generateBtn.style.backgroundColor = "grey";
  generateBtn.style.opacity = "0.7";
  generateBtn.disabled = true;

  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.3",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });

    const result = response.choices[0].message.content;
    let currContent = "";
    for (let i = 0; i < result.length; i++) {
      currContent += result[i];
      onUpdate(currContent);
      await new Promise((resolve) => setTimeout(resolve, 10));
    }

    generateBtn.innerText = "Generate New Recipe";
    generateBtn.style.backgroundColor = "#d17557";
    generateBtn.style.opacity = "1";
    generateBtn.disabled = false;
  } catch (err) {
    console.error(err.message);
  }
}
