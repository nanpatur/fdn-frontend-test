import Text from "../../atoms/Text";

const Modal = ({ title, content, isOK, isCancel }) => {
  return (
    <div>
      <div>
        <Text>{title}</Text>
      </div>
      <div>{content}</div>
      <div>
        <button onClick={isOK}>OK</button>
        <button onClick={isCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
