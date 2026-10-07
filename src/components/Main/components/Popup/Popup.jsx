export default function Popup({
  onClose,
  title,
  children,
  closeClassName,
  popupClassName,
  formClassName,
  titleClassName,
}) {
  return (
    <div
      className={`popup popup_opened  ${popupClassName}`}
    >
      <div className={formClassName}>
        <span
          className={`${closeClassName} popup__close`}
          onClick={onClose}
        ></span>

        {title && <h2 className={titleClassName}>{title}</h2>}
        {children}
      </div>
    </div>
  );
}