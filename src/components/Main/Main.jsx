import avatar from "../../../images/avatar.png";
import { useState } from "react";
import Popup from "./Popup/Popup";
import NewCard from "./NewCard/NewCard";
import EditProfile from "./EditProfile/EditProfile";
import EditAvatar from "./EditAvatar/EditAvatar";
import Card from "./Card/Card";
import RemoveCard from "./RemoveCard/RemoveCard"


const initialCards  = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];





export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState(initialCards);
  const [profile, setProfile] = useState({
  name: "Jacques Cousteau",
  bio: "Explorador",
  });
  const [avatarLink, setAvatarLink] = useState(avatar);

function handleAddCard(card) {
  const newCard = {
    ...card,
    isLiked: false,
    _id: Date.now().toString(),
  };

  setCards((currentCards) => [newCard, ...currentCards]);
  handleClosePopup();
}
function handleSaveProfile(newProfile) {
  setProfile(newProfile);
  handleClosePopup();
}
function handleSaveAvatar(newAvatar) {
  setAvatarLink(newAvatar);
  handleClosePopup();
}
function handleLikeCard(cardId) {
  setCards((currentCards) =>
    currentCards.map((card) =>
      card._id === cardId
        ? { ...card, isLiked: !card.isLiked }
        : card
    )
  );
}

const newCardPopup = {
  title: "Nuevo lugar",
  children: <NewCard onAddCard={handleAddCard} />,
  closeClassName: "submit__close",
  popupClassName: "submit",
  formClassName: "submit__form",
  titleClassName: "submit__tiulo",
};

const editProfilePopup = {
  title: "Editar perfil",
  children: <EditProfile onSaveProfile={handleSaveProfile} />,
  closeClassName: "editor__close",
  popupClassName: "editor",
  formClassName: "editor__form",
  titleClassName: "editor__tiulo",
};

const editAvatarPopup = {
  title: "Cambiar foto de perfil",
  children: <EditAvatar onSaveAvatar={handleSaveAvatar} />,
  closeClassName: "avatar__close",
  popupClassName: "avatarEdit",
  formClassName: "avatar__form",
  titleClassName: "avatar__tiulo",
};

function handleOpenPopup(popup, card = null) {
  setPopup(popup);
}
function handleOpenRemovePopup(card) {
  setPopup({
    title: "¿Estás seguro/a?",
    children: (
      <RemoveCard
        onSubmit={() => {
          setCards((currentCards) =>
            currentCards.filter((currentCard) => currentCard._id !== card._id)
          );
          handleClosePopup();
        }}
      />
    ),
    closeClassName: "delet__close",
    popupClassName: "delet",
    formClassName: "delet__card",
    titleClassName: "delet__tiulo",
  });
}
  const handleClosePopup = () => {
    setPopup(null);
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__imagen"
            src={avatarLink}
            alt="imagen de perfil"
          />
          <button
          id="openAvatar"
          type="button"
          className="avatar__btnedit"
          onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
          </div>

        <div className="profile__info">
          <h1 className="profile__usuario" id="usuareProfile">
            {profile.name}
          </h1>
          <button
          id="openEdit"
          type="button"
          className="profile__btnedit"
          onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          
          <p className="profile__description" id="bioProfile">
            {profile.bio}
          </p>

          <button
            id="openSutmit"
            type="button"
            className="profile__btnadd"
            onClick={() => handleOpenPopup(newCardPopup)}
          ></button>
        </div>
      </section>

      <section className="post">
        <ul id="cards-container" className="post__card">
          {cards.map((card) => (
            <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup}
              handleOpenRemovePopup={handleOpenRemovePopup} handleLikeCard={handleLikeCard}
            />))}
        </ul>
      </section>

      {popup && (
        <Popup
  onClose={handleClosePopup}
  title={popup.title}
  closeClassName={popup.closeClassName}
  popupClassName={popup.popupClassName}
  formClassName={popup.formClassName}
  titleClassName={popup.titleClassName}
>
  {popup.children}
</Popup>
      )}
    </main>
  );
}
