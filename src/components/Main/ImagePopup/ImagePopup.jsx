export default function ImagePopup(props) {
  const { card } = props;

  return (
       <>
      <img
        className="modal__image"
        src={card.link}
        alt={card.name}
      />
      <p className="modal__footer">{card.name}</p>
    </>
  );
}
