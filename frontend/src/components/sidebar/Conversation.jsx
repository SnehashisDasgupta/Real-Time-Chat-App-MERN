import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  //if userId is present in onlineUsers, then user is online
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-800 rounded p-2 py-1 cursor-pointer
          ${isSelected ? "bg-sky-800" : ""}`}
        // When any conversation clicked, its bg-color will change 
        onClick={() => setSelectedConversation(conversation)}
      >

        {/* to show online status of the user */}
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;

// STARTER CODE FOR CONVERSATION
// const Conversation = () => {
//     return (
//       <>
//           <div className="flex gap-2 items-center hover:bg-sky-800 rounded p-2 py-1 cursor-pointer">
//               <div className="avatar online">
//                   <div className="w-12 rounded-full">
//                       <img src="" alt="avatar" />
//                   </div>
//               </div>

//               <div className="flex flex-col flex-1">
//                   <div className="flex gap-3 justify-between">
//                       <p className="font-bold text-gray-200">SNEHASHIS</p>
//                       <span className="text-xl">😈</span>
//                   </div>
//               </div>
//           </div>

//           <div className="divider my-0 py-0 h-1" />
//       </>
//     );
//   };

//   export default Conversation;
