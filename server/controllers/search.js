const searchCtrl = {}
const axios = require('axios');
const _ = require('lodash');

const URL = process.env.API_URL;

fnCategories = async (id) => {
    const configCatg = {
        method: 'get',
        url: `${URL}categories/${id}`,
        headers: {}
    };
    categories = await axios(configCatg)
        .then((response) => response.data.path_from_root)
        .catch(function (error) {
            console.log(error);
            return error;
        });


    return categories;
}

searchCtrl.search = async (req, res, next) => {
    const ENDPOINT = process.env.API_LOCATION;

    const query = (req.query.s || req.query.search);
    let result = {};
    console.log(query);
    if (query) {
        const config = {
            method: 'get',
            url: `${URL}${ENDPOINT}search?q=${encodeURI(query)}&limit=4`,
            headers: {}
        };


        result.products = await axios(config)
            .then((response) => response.data.results)
            .catch((error) => error.response.data);
        if (_.isArray(result.products)) {
            result.categories = await fnCategories(result.products[0].category_id);
        } else {
            result.products = []
            result.categories = []
        }
    }

    res.status(200).json(result);
}

searchCtrl.product = async (req, res, next) => {
    const id = req.params.id;
    let result = {};

    const config = {
        method: 'get',
        url: `${URL}items/${id}`,
        headers: {}
    };
    const configDesc = {
        method: 'get',
        url: `${URL}items/${id}/description`,
        headers: {}
    };

    item = await axios(config)
        .then((response) => response.data)
        .catch((error) => error.response.data);

    if (_.isUndefined(item.status)) {
        return res.status(400).json({});
    }

    description = await axios(configDesc)
        .then((response) => response.data)
        .catch((error) => error.response.data);

    /**
     * 
     */
    result.id = item.id;
    result.image = item.pictures[0].url;
    result.title = item.title;
    result.price = item.price;
    result.condition = item.condition;
    result.description = description.plain_text
    result.sold_quantity = item.sold_quantity;
    if (item.category_id) {
        result.categories = await fnCategories(item.category_id);
    }

    res.status(200).json(result);

}



module.exports = searchCtrl