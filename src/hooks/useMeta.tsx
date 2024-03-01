import { useEffect } from "react";

export default function useMeta(name: string, content: string) {
    useEffect(() => {

        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;

        document.body.appendChild(meta);

        return () => { document.body.removeChild(meta); }

    }, [name, content]);
}
