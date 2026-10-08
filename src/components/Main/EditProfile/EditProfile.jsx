import { useState } from "react";

export default function EditProfile({ onSaveProfile }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const isFormValid =
    name.trim().length >= 2 &&
    name.trim().length <= 40 &&
    bio.trim().length >= 2 &&
    bio.trim().length <= 200;

  function handleSubmit(event) {
  event.preventDefault();

  if (!isFormValid) {
    return;
  }

  setIsSaving(true);

  onSaveProfile({
    name: name.trim(),
    bio: bio.trim(),
  });
  
   console.log("Guardando perfil:", {
    name,
    bio,
   });
}

  return (
    <form
      className="editor__form-edit"
      name="profile"
      id="formProfile"
      noValidate
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="text"
          placeholder="Nombre"
          id="name"
          name="name"
          className="editor__text"
          maxLength="40"
          minLength="2"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <span className="form__input-error name-error"></span>
      </label>

      <label>
        <input
          type="text"
          placeholder="Acerca de mí"
          id="bio"
          name="bio"
          className="editor__text"
          maxLength="200"
          minLength="2"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
          required
        />

        <span className="form__input-error bio-error"></span>
      </label>

      <button
        id="save"
        type="submit"
        className={`editor__btn-submit ${isFormValid ? "activo" : ""}`}
        disabled={!isFormValid || isSaving}
      >
        {isSaving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}