import { useState } from "react";

export default function NewCard() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const isValidUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const isFormValid =
    title.trim().length >= 2 &&
    title.trim().length <= 30 &&
    isValidUrl(link.trim());

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    setIsSaving(true);
  }

  return (
    <form
      className="submit__form-submit"
      name="card-form"
      id="updateFormS"
      noValidate
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="text"
          placeholder="Título"
          id="title"
          name="title"
          className="submit__name"
          required
          minLength="2"
          maxLength="30"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <span className="form__input-error title-error"></span>
      </label>

      <label>
        <input
          type="url"
          placeholder="Enlace a la imagen"
          id="link"
          name="link"
          className="submit__img"
          required
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />

        <span className="form__input-error link-error">
          {link && !isValidUrl(link.trim())
            ? "Introduce un enlace válido"
            : ""}
        </span>
      </label>

      <button
        id="save"
        type="submit"
        className={`submit__btn-submit ${isFormValid ? "activo" : ""}`}
        disabled={!isFormValid || isSaving}
      >
        {isSaving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}