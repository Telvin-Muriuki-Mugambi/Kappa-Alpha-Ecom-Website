import { useEffect } from "react";

export default function Toast({message, duration, onClose}){
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration, 3000)
        return () => clearTimeout(timer)
    }, [duration, onClose]);

    return (
        <div style={{
            position: 'fixed', bottom: '20px', right: '20px',
            backgroundColor: '#333', color: '#fff', padding: '12px 24px',
            borderRadius: '4px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
            {message}
        </div>
    )
}