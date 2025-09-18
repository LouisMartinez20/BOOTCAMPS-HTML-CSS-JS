import { createContext, useContext, useState } from "react";
const MessagesContext = createContext();
export const MessagesProvider = ({ children }) => {
    const [messages, setMessages] = useState({});
    const addMessage = (key, text) =>
        setMessages((prev) => ({
            ...prev,
            [key]: [...(prev[key] || []), text],
        }));
    return (
        <MessagesContext.Provider value={{ messages, addMessage }}>
            {children}
        </MessagesContext.Provider>
    );
};
export const useMessages = () => {
    const context = useContext(MessagesContext);
    if (!context) throw new Error("useMessages debe usarse dentro de MessagesProvider");
    return context;
};
