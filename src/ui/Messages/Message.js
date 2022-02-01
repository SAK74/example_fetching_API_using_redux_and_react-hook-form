import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeMessage } from "./reducer";
import PropTypes from "prop-types";
import { StyledMessage } from "./StyledMessage";

function Message({ message, type, id }) {
  const dispatch = useDispatch();
  const handleRemove = useCallback(() => dispatch(removeMessage(id)), [
    dispatch,
    id
  ]);
  useEffect(() => {
    const timeOut = setTimeout(() => handleRemove(), 5000);
    return () => clearTimeout(timeOut);
  }, [id, handleRemove]);
  return (
    <StyledMessage type={type}>
      {message}
      <span onClick={handleRemove}>X</span>
    </StyledMessage>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
export default Message;
