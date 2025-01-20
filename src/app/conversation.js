import React from "react";
import ReactMarkdown from "react-markdown";

const Conversation = ({ conversations, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
      <div className="bg-white p-4 rounded-lg shadow-lg w-4/5 max-w-3xl h-auto max-h-[80%] overflow-auto">
        <h2 className="text-lg font-semibold mb-2">Previous Conversations</h2>
        {conversations.length === 0 ? (
          <p>No previous conversations found.</p>
        ) : (
          <ul className="space-y-4">
            {conversations.map((conv, index) => (
              <li key={index} className="border p-2 rounded">
                <strong>Context:</strong> {conv.context}
                <br />
                <strong>Question:</strong> {conv.question}
                <br />
                <strong>Response:</strong>
                <ReactMarkdown>{conv.response}</ReactMarkdown>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={onClose}
          className="w-full mt-4 bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Conversation;
