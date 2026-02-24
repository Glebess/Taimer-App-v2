const Field = (props) => {
  const { placeHolder, className, name, id, onChange, value } = props;
  return (
    <input
      className={className}
      placeholder={placeHolder}
      name={name}
      id={id}
      onChange={onChange}
      value={value}
    ></input>
  );
};
export default Field;
