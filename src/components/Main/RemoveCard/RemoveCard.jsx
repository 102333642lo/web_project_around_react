export default function RemoveCard({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
      onSubmit();
    }


  return (
    <form className="delet__form-delet" onSubmit={handleSubmit}>
      <button type="submit" className="delet__btn-delet">
        Si
      </button>
    </form>
  );
}