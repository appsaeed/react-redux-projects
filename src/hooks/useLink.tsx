import { useEffect } from "react";

export default function useLink(url: string, rel = "stylesheet") {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = url;
        link.rel = rel;

        document.body.appendChild(link);

        return () => { document.head.removeChild(link); }

    }, [url, rel]);
}
