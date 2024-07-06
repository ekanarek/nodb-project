import "./AddBookButton.css";

export default function AddBookButton({ onClick }) {
  return (
    <button className="card add-button" onClick={onClick}>
      <span className="material-symbols-outlined add-circle">add_circle</span>
    </button>
  );
}
