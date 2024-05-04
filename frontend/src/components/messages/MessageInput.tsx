import { BsSend } from "react-icons/bs";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          type="text"
          placeholder="Send a message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          type="submit"
        >
          {loading ? (
            <span className="loader loader-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
