/* eslint-disable react/prop-types */
export default function InputForm({handleFormSubmit}) {
  return (
    <form className="add-ingredient-form" onSubmit={handleFormSubmit}>
      <input
        className="add-ingredient-input"
        placeholder="eg. oregano"
        aria-label="Add ingredient"
        type="text"
        name="ingredient"
      />
      <button className="add-ingredient-btn">+ Add ingredient</button>
    </form>
  );
}
