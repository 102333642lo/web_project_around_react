import { useState } from "react";

export default function EditAvatar({ onSaveAvatar }) {
  const [avatarLink, setAvatarLink] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const isValidUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const isFormValid = isValidUrl(avatarLink.trim());

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    setIsSaving(true);
    
    onSaveAvatar(avatarLink.trim());

    console.log("Guardando avatar:", {
      avatarLink,
    });
  }

  return (
    <form
      action=""
      id="avatarForm"
      className="avatar__form-submit"
      noValidate
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="url"
          placeholder="Image link"
          id="avatarLink"
          name="avatar"
          className="avatar__img"
          required
          value={avatarLink}
          onChange={(event) => setAvatarLink(event.target.value)}
        />

        <span className="form__input-error avatarLink-error"></span>
      </label>

      <button
       id="saveAvatar"
       type="submit"
       className={`avatar__btn-submit ${isFormValid ? "activo" : ""}`}
      disabled={!isFormValid || isSaving}
      >
        {isSaving ? "Guardando..." : "Guardar"}
        </button>
    </form>
  );
}