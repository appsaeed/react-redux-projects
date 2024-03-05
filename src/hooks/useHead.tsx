import React, { useEffect } from 'react';
import settings from '../app/settings';

type Meta = {
    html?: React.HtmlHTMLAttributes<HTMLHtmlElement>,
    title?: string;
    favicon?: {
        type?: string;
        href: string;
    };
    keywords?: string,
    description?: string;
    links?: Array<React.LinkHTMLAttributes<HTMLLinkElement>>;
    scripts?: Array<React.ScriptHTMLAttributes<HTMLScriptElement>>
};

export default function useHead(params: Meta) {
    const { title, html, links, scripts, favicon, description, keywords } = params;




    //update document title if exists
    useEffect(() => {
        if (title) document.title = title + ' | ' + settings.name;
    }, [title])


    //update meta discription
    useEffect(() => {
        if (description) {

            if (document.querySelector('meta[name="description"]')) {
                document.querySelector('meta[name="description"]')?.setAttribute('content', description)
            } else {

                const meta = document.createElement('meta');
                meta.setAttribute('name', 'description');
                meta.setAttribute('content', description)
                document.head.appendChild(meta);

                return () => {
                    document.head.removeChild(meta);
                }
            }
        }
    }, [description])

    //update meta keywords
    useEffect(() => {
        if (keywords) {

            if (document.querySelector('meta[name="keywords"]')) {
                document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords)
            } else {

                const meta = document.createElement('meta');
                meta.setAttribute('name', 'keywords');
                meta.setAttribute('content', keywords)
                document.head.appendChild(meta);

                return () => {
                    document.head.removeChild(meta);
                }
            }
        }
    }, [keywords])

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

    //update favicon 
    useEffect(() => {

        if (favicon) {
            const fi = document.querySelector('link[rel="favicon"]')
                || document.querySelector('link[rel="shortcut icon"]');

            const type = favicon.type || fi?.getAttribute('type');

            fi?.setAttribute('href', favicon.href)

            if (type) fi?.setAttribute('type', type)
        }

    }, [favicon])

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
