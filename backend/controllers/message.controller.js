import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: reciverId} = req.params;
        const senderId = req.res.user._id;

       
        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, reciverId]
            }
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, reciverId],
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // this will run in parallel
        await Promise.all[conversation.save(), newMessage.save()];

        res.status(201).json(newMessage);

    } catch (error) {
        console.error(`Error in sendMessage controller: ${error.message}`);
        res.status(500).json({error: `Internal server error: ${error}`})
    }
}