/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ recipe }) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <p
        style={{
          textAlign: "center",
          height: "15px",
        }}
      >
        <u>Chef-AI Recommends:</u>
      </p>
      <ReactMarkdown children={recipe} />
    </section>
  );
}
