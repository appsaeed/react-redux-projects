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



//make item pritty look like todo, tood no 
export const grammarlyItem = (count: number, items: [string, string, string | undefined]) => {

    switch (count) {
        case 0:
            return items[2] ? items[2] : 'Empty';
        case 1:
            return count + ' ' + items[0]
        default:
            return count + ' ' + items[1]
    }
}