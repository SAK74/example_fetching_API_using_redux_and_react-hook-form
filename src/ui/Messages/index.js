import { useSelector } from "react-redux";
import Message from "./Message";
import "./styles.css";

export default function Messages() {
  const messages = useSelector((state) => state.ui.messages);
  return (
    <div className="messages">
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
}
