import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Mail,
  Send,
  User,
  CheckCheck,
  Search,
  MessageSquare
} from 'lucide-react';

export const MessagesPage = () => {
  const { messages, addToast } = useApp();
  const [selectedMsgId, setSelectedMsgId] = useState(messages[0]?.id);
  const [replyText, setReplyText] = useState('');

  const activeMsg = messages.find(m => m.id === selectedMsgId) || messages[0];

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    activeMsg.replies.push({
      sender: "Surbhi Vaidya",
      time: "Just now",
      text: replyText
    });
    setReplyText('');
    addToast('Reply sent successfully!', 'success');
  };

  return (
    <div className="space-y-5 sm:space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Communication & Messages</h2>
        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
          In-app direct messaging with Department Heads, Principal, and Parents (BRD §25, §38, §40).
        </p>
      </div>

      {/* Messages Layout */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-[500px]">
        {/* Left: Message List */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col max-h-64 lg:max-h-none">
          <div className="p-3.5 sm:p-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">Inbox Conversations</h3>
          </div>
          <div className="divide-y divide-slate-100 overflow-y-auto flex-1 touch-scroll">
            {messages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => setSelectedMsgId(msg.id)}
                className={`p-3.5 sm:p-4 cursor-pointer transition-colors ${
                  selectedMsgId === msg.id
                    ? 'bg-blue-50/70 border-l-4 border-blue-600'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={msg.avatar}
                    alt={msg.sender}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-slate-200 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-slate-900 truncate">{msg.sender}</h4>
                      <span className="text-[10px] text-slate-400 flex-shrink-0">{msg.time}</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-700 truncate mt-0.5">{msg.subject}</p>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Active Conversation Thread */}
        <div className="lg:col-span-8 flex flex-col justify-between p-4 sm:p-6 bg-slate-50/30">
          <div>
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200 gap-2">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <img
                  src={activeMsg.avatar}
                  alt={activeMsg.sender}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-slate-200 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-sm text-slate-900 truncate">{activeMsg.sender}</h3>
                  <span className="text-xs text-slate-500 font-medium truncate block">{activeMsg.role}</span>
                </div>
              </div>
              <span className="text-[11px] text-slate-400 flex-shrink-0">{activeMsg.time}</span>
            </div>

            <div className="my-4 sm:my-5">
              <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-2">{activeMsg.subject}</h4>
              <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed">
                {activeMsg.content}
              </div>
            </div>

            {/* Replies Thread */}
            {activeMsg.replies?.length > 0 && (
              <div className="space-y-3 mt-4">
                {activeMsg.replies.map((reply, idx) => (
                  <div key={idx} className="flex flex-col items-end">
                    <div className="p-3 sm:p-3.5 bg-blue-600 text-white rounded-2xl rounded-tr-none text-xs max-w-lg shadow-sm">
                      <p>{reply.text}</p>
                      <span className="text-[10px] text-blue-200 block text-right mt-1">{reply.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Reply Input Box */}
          <form onSubmit={handleSendReply} className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200 flex items-center gap-2 sm:gap-3">
            <input
              type="text"
              placeholder="Type your response..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="flex-1 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md shadow-blue-600/30 transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Reply</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
