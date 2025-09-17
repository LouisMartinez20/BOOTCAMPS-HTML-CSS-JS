import { createContext, useContext, useState, ReactNode } from "react";
type MessagesContextType = {
    messages: Record<string, string[]>; 
    addMessage: (key: string, text: string) => void;
};
const MessagesContext = createContext<MessagesContextType | undefined>(undefined);
export const MessagesProvider = ({ children }: { children: ReactNode }) => {
    const [messages, setMessages] = useState<Record<string, string[]>>({});
    const addMessage = (key: string, text: string) => {
        setMessages((prev) => {
            const updated = {
                ...prev,
                [key]: [...(prev[key] || []), text],
            };
            return updated;
        });
    };
    return (
        <MessagesContext.Provider value={{ messages, addMessage }}>
            {children}
        </MessagesContext.Provider>
    );
};
export const useMessages = () => {
    const context = useContext(MessagesContext);
    if (!context) {
        throw new Error("useMessages debe usarse dentro de MessagesProvider");
    }
    return context;
};
