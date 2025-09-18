import { createContext, useContext, useState, useCallback } from "react";
const MessagesContext = createContext(null);
export function MessagesProvider({ children }) {
    const [messages, setMessages] = useState({});
    const addMessage = useCallback((chatId, text) => {
        setMessages((prev) => ({
            ...prev,
            [chatId]: [...(prev[chatId] || []), text],
        }));
    }, []);
    const value = { messages, addMessage };
    return (
        <MessagesContext.Provider value={value}>
            {children}
        </MessagesContext.Provider>
    );
}
export function useMessages() {
    const context = useContext(MessagesContext);
    return context;
}
