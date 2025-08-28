import { useState } from 'react';
import { MessageCircleIcon, XIcon, SendIcon } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy el asistente virtual de TOREM. ¿En qué puedo ayudarte hoy?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedOptions = [
    { text: "Reservar zonas sociales", action: "reservas" },
    { text: "Enviar PQRS", action: "pqrs" },
    { text: "Estado de cuenta", action: "pagos" },
    { text: "Actualizar datos", action: "actualizar" },
    { text: "Contacto administración", action: "contacto" }
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        isBot: false,
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      // Simular respuesta del bot
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Entiendo tu consulta. Te redirigiré al servicio correspondiente.",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleOptionClick = (action: string) => {
    const optionMessage = {
      id: messages.length + 1,
      text: predefinedOptions.find(opt => opt.action === action)?.text || '',
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages([...messages, optionMessage]);
    
    // Redirigir según la acción
    setTimeout(() => {
      switch (action) {
        case 'pqrs':
          window.location.href = '#/pqrs';
          break;
        case 'reservas':
        case 'pagos':
        case 'actualizar':
        case 'contacto':
          console.log(`Redirigiendo a: ${action}`);
          break;
        default:
          break;
      }
    }, 500);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircleIcon className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-bold">Asistente TOREM</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-blue-700 p-1 rounded"
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-blue-600 text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}

        {/* Opciones predefinidas */}
        {messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-medium">Opciones rápidas:</p>
            {predefinedOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.action)}
                className="block w-full text-left p-2 text-sm bg-blue-50 hover:bg-blue-100 rounded border border-blue-200 transition-colors"
              >
                {option.text}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Escribe tu mensaje..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
          >
            <SendIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
