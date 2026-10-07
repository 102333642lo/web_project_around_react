import ImagePopup from "../ImagePopup/ImagePopup"
export default function Card(props) {
  const { name, link, isLiked } = props.card;  
  const { handleOpenPopup } = props;

  const imageComponent = {
    title: "",
    children: <ImagePopup card={props.card} />,
    closeClassName: "image__close",
    popupClassName: "image_modal ",
    formClassName: "image__container",
  };

  return (
    <li className="card">
      <div className="card__content">
        
      <img className="card__image" 
      src={link} alt={name} 
      onClick={() => handleOpenPopup(imageComponent)}/>

      <button
        aria-label="Delete card"
        className="card__delet"
        type="button"
      />

        <h2 className="card__footer">{name}</h2>

        <button
          aria-label="Like card"
          type="button"
          className={`card__like ${isLiked ? "card__like_active" : ""}`}
        />
      </div>
    </li>
  );
}