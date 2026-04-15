const Field = (props) => {
  const { placeHolder, className, name, id, onChange, value, onKeyDown } =
    props;
  return (
    <input
      className={className}
      placeholder={placeHolder}
      name={name}
      id={id}
      onChange={onChange}
      value={value}
      onKeyDown={onKeyDown}
    ></input>
  );
};
export default Field;
