import { useEffect } from "react";
import "../styles/toast.css";

export default function Toast({message, duration, onClose}){
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration || 3000)
        return () => clearTimeout(timer)
    }, [duration, onClose]);

    return (
        <div className="toast-message toast-success">
            {message}
        </div>
    )
}