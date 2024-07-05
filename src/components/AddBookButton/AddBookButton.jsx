import './AddBookButton.css';

export default function AddBookButton({ onClick }) {
    return <button className="card" onClick={onClick}>Add New</button>
}