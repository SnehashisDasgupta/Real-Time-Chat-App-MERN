import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';
 
const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-700' : '';
  const formatedTime = extractTime(message.createdAt);

  // newMessage bubble will shake when user receive a newMessage 
  const shakeClass = message.shouldShake? "shake" : "";
  
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="avatar" />
            </div>
        </div>

        <div className={`chat-bubble text-white pb-2 ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatedTime}</div>
    </div>
  )
}

export default Message




// STARTER CODE
// const Message = () => {
//     return (
//       <div className="chat chat-end">
//           <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//                   <img src="" alt="avatar" />
//               </div>
//           </div>
  
//           <div className={`chat-bubble text-white bg-blue-500`}>Hi! WHat is Up?</div>
//           <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">23:43</div>
//       </div>
//     )
//   }
  
//   export default Message
  

