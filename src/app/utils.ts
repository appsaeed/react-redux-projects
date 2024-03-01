//price format

import shopSettings from "../pages/shop/assets/shopSettings";

//@link https://jscurious.com/currency-formatting-in-javascript/
export function formatPrice(price: number, locales?: string | string[] | undefined, options?: Intl.NumberFormatOptions | undefined) {

    const locale = locales ? locales : shopSettings.locale;

    return (
        new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: shopSettings.currency.code,
            ...options
        })
    ).format(price);
}