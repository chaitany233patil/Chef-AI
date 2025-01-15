# Chef-AI

**Chef-AI** is a recipe suggestion app powered by AI. It takes a list of ingredients provided by the user and generates a recipe recommendation with instructions, leveraging an AI language model.

## Features

- **AI-Powered Recipe Suggestions**: Uses Hugging Face's `mistralai/Mistral-7B-Instruct-v0.3` model to suggest recipes.
- **User-Friendly Interface**: Responsive design for seamless usage across devices.
- **Ingredient-Based Filtering**: Suggests recipes based on the ingredients entered by the user.
- **Markdown Support**: Recipes are formatted in Markdown for better readability.

## Technologies Used

- **Frontend**: React (Vite)
- **API**: Hugging Face Inference API
- **Deployment**: Vercel

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chaitany233patil/Chef-AI.git
   cd chef-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add a `.env` file:
   ```
   VITE_HF_ACCESS_TOKEN=your-hugging-face-access-token
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production (optional):
   ```bash
   npm run build
   ```

## Deployment

Chef-AI is deployed on Vercel. To deploy:

1. Connect your GitHub repository to Vercel.
2. Set up the `VITE_HF_ACCESS_TOKEN` environment variable in Vercel's project settings.
3. Trigger a deployment and access your live app!

**Live Link**: [https://chef-ai-rho.vercel.app/]

## Usage

1. Enter a list of ingredients in the input field.
2. Submit the ingredients to receive a Markdown-formatted recipe.
3. View the recipe on the webpage.

## Example Recipe Output

```markdown
## Quick and Simple Maggie Cheese Tomato Recipe

### Ingredients
- Maggie noodles (1 cup)
- Water (2 cups)
- Cheese (grated)
- Tomato (diced)

### Instructions
1. Boil water and cook the noodles for 2 minutes.
2. Add diced tomatoes and stir.
3. Sprinkle grated cheese and mix until melted.
4. Serve hot and enjoy!
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

Developed with ❤️ by Chaitanya Patil.
