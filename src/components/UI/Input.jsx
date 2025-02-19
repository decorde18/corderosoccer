function Input({ label, id, className, ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
    </div>
  );
}

export default Input;
