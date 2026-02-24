const Button = (props) => {
  const { children, className, onClick, id, disabled, title } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      id={id}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};
export default Button;
