
import _ from 'lodash';

export function formatPrice(nNmb) {
    let sRes = "";
    if (!_.isString(nNmb) && _.isNumber(nNmb)) {
        nNmb = nNmb.toString();
        for (let  i = nNmb.length - 1, j = 0; i >= 0; i--, j++)
            sRes = nNmb.charAt(i) + ((j > 0) && (j % 3 === 0) ? "." : "") + sRes;
        
    }
    return sRes;
}

export function translate(text) {

    const arr = {
        'used': 'Usado',
        'new':  'Nuevo'
    }

    return arr[text];
}
