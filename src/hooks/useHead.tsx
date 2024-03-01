import React, { useEffect } from 'react';

type Meta = {
    html?: React.HtmlHTMLAttributes<HTMLHtmlElement>,
    title?: string;
    keywords?: string,
    description?: string;
    links?: Array<React.LinkHTMLAttributes<HTMLLinkElement>>;
    scripts?: Array<React.ScriptHTMLAttributes<HTMLScriptElement>>
};

export default function useHead(params: Meta) {
    const { title, html, links, scripts } = params;




    //update document title if exists
    useEffect(() => {
        if (title) document.title = title;
    }, [title])

    //update document html attributes if exists
    useEffect(() => {
        if (html?.className) document.documentElement.className = html.className
        if (html?.lang) document.documentElement.lang = html.lang
    }, [html])

    //create link tags
    useEffect(() => {
        if (links) {

            const fragment = document.createDocumentFragment();

            const tags = links.map((item) => {
                const link = document.createElement('link');
                link.rel = item.rel || 'stylesheet';
                link.href = item.href || '';

                if (item?.id) link.id = item.id

                return fragment.appendChild(link);
            })

            document.head.append(...tags)

            return () => {
                tags?.forEach((item) => document.head.removeChild(item))
            }
        }
    }, [links])

    //create scripts
    useEffect(() => {
        if (scripts) {

            const fragment = document.createDocumentFragment();

            const tags = scripts.map((item) => {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = item.async || true;
                if (script.src) script.src = item.src as string
                fragment.appendChild(script);
                return script;
            })

            document.head.append(...tags)

            return () => {
                tags?.forEach((item) => document.head.removeChild(item))
            }
        }
    }, [scripts])
}
