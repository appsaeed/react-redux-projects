import { useEffect } from "react";

export default function useScript(url: string, _async: boolean = true) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = _async;

        document.body.appendChild(script);

        return () => { document.body.removeChild(script); }

    }, [url, _async]);
}
