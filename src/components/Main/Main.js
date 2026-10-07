import avatar from "../../../images/avatar.png";
import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./form/NewCard/NewCard";
import EditProfile from "./form/EditProfile/EditProfile";
import EditAvatar from "./form/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";


const cards = [
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

console.log(cards);




export default function Main() {
  const [popup, setPopup] = useState(null);

const newCardPopup = {
  title: "Nuevo lugar",
  children: <NewCard />,
  closeClassName: "submit__close",
  popupClassName: "submit",
  formClassName: "submit__form",
  titleClassName: "submit__tiulo",
};

const editProfilePopup = {
  title: "Editar perfil",
  children: <EditProfile />,
  closeClassName: "editor__close",
  popupClassName: "editor",
  formClassName: "editor__form",
  titleClassName: "editor__tiulo",
};

const editAvatarPopup = {
  title: "Cambiar foto de perfil",
  children: <EditAvatar />,
  closeClassName: "avatar__close",
  popupClassName: "avatarEdit",
  formClassName: "avatar__form",
  titleClassName: "avatar__tiulo",
};

  function handleOpenPopup(popup) {
    setPopup(popup);
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
            src={avatar}
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
            Jacques Cousteau
          </h1>
          <button
          id="openEdit"
          type="button"
          className="profile__btnedit"
          onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          
          <p className="profile__description" id="bioProfile">
            Explorador
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
