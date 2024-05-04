import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";
import { Socket } from "socket.io-client";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("NEW_MESSAGE", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);

      return () => {
        socket.off("NEW_MESSAGE");
      };
    });
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
