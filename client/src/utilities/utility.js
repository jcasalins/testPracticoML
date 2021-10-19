
import _ from 'lodash';

export function formatPrice(nNmb) {
    let sRes = "";
    let arRes = [];
    if (!_.isString(nNmb) && _.isNumber(nNmb)) {
        nNmb = nNmb.toString();
        let arNNmb = nNmb.split('.');

        for (let  i = arNNmb[0].length - 1, j = 0; i >= 0; i--, j++)
            sRes = nNmb.charAt(i) + ((j > 0) && (j % 3 === 0) ? "." : "") + sRes;
        
        //sRes = (_.isString(arNNmb[1]))? `${sRes},${arNNmb[1]}`: sRes;
        arRes[0] = sRes;
        arRes[1] = (_.isString(arNNmb[1])) ? arNNmb[1] : '';
    }
    return arRes;
}

export function translate(text) {

    const arr = {
        'used': 'Usado',
        'new':  'Nuevo'
    }

    return arr[text];
}
