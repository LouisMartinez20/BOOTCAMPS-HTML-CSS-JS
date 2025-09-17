import { useParams } from "react-router-dom";
import { useMessages } from "../../context/MessagesContext";
import { profiles, groups } from "../../data/data";
import { StyledChatBody, StyledMessageBubble } from "./Content.style";

export const ChatBodyContent = () => {
    // 1. Obtener parámetros de la URL
    const { id, groupId } = useParams();
    // 2. Obtener mensajes del contexto
    const { messages } = useMessages();
    
    // 3. Crear clave única para identificar el chat
    let chatKey = null;
    if (id) {
        chatKey = `chat-${id}`; // Ej: "chat-5"
    } else if (groupId) {
        chatKey = `group-${groupId}`; // Ej: "group-3"
    }
    
    // 4. Buscar datos del perfil o grupo
    let data = null;
    if (id) {
        data = profiles.find((p) => p.id === Number(id));
    } else if (groupId) {
        data = groups.find((g) => g.groupid === Number(groupId));
    }
    
    // 5. Filtrar mensajes para este chat específico
    let chatMessages: any[] = [];
    if (chatKey && messages[chatKey]) {
        chatMessages = messages[chatKey];
    }
    
    // 6. Si no encuentra datos, mostrar error
    if (!data) {
        return (
            <div style={{ padding: "1rem" }}>No se encontró el chat o grupo</div>
        );
    }
    
    // 7. Renderizar los mensajes
    return (
        <StyledChatBody>
            {chatMessages.length === 0 && (
                <div style={{ color: "#aaa" }}>No hay mensajes todavía</div>
            )}
            {chatMessages.length > 0 && chatMessages.map((msg, idx) => (
                <StyledMessageBubble key={idx}>{msg}</StyledMessageBubble>
            ))}
        </StyledChatBody>
    );
};