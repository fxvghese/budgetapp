export default function Form({ onSubmit, btnText, children }) {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type="submit">{btnText}</button>
    </form>
  );
}
