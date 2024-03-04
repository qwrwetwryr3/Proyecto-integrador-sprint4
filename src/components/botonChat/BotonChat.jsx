import React, { useState } from 'react';
import './BotonChat.css';

function BotonChat() {
  const [chatVisible, setChatVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    'Administrador: ¡Hola! ¿En qué puedo ayudarte?',
  ]);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      setChatMessages([...chatMessages, `Usuario: ${message}`]);
      setMessage('');
    }
  };

  return (
    <>
      <div className="content">
        <h1>Bienvenido a mi página</h1>
      </div>
      <button id="chatButton" onClick={toggleChat}>
        Chat
      </button>
      {chatVisible && (
        <div id="chatBox" className="chat-box">
          <div id="chatHeader" className="chat-header">
            <span id="closeChat" onClick={toggleChat}>
              &times;
            </span>
            <h2>Chat con el Administrador</h2>
          </div>
          <div id="chatMessages" className="chat-messages">
            {chatMessages.map((msg, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: msg }} />
            ))}
          </div>
          <input
            type="text"
            id="userInput"
            placeholder="Escribe tu mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage} id="botonDeChat">
            Enviar
          </button>
        </div>
      )}
    </>
  );
}

export default BotonChat;