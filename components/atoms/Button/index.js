const Button = ({ label, isDisabled, ...props }) => {
  return (
    <button disabled={isDisabled} {...props}>
      {label}
    </button>
  );
};

export default Button;
