const searchCtrl = {}
const axios = require('axios');


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
    const ENDPOINT = process.env.API_ENDPOINT;

    const query = (req.query.s || req.query.search);
    let result = {};

    if (query) {
        const config = {
            method: 'get',
            url: `${URL}${ENDPOINT}search?q=${query}&limit=4`,
            headers: {}
        };


        result.products = await axios(config)
            .then((response) => response.data.results)
            .catch(function (error) {
                console.log(error);
            });
        if (result.products.length > 0) {
            result.categories = await fnCategories(result.products[0].category_id);
        }
    }

    res.json(result);
    //res.status(200).send('hola');
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

    console.log(`${URL}items/${id}`);
    item = await axios(config)
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
        });
    description = await axios(configDesc)
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
        });

    /**
     * 
     */
    result.id = item.id;
    result.image = item.pictures[0].url;
    result.title = item.title;
    result.price = item.price;
    result.condition = item.condition;
    result.description = description.plain_text

    if (item.category_id) {
        result.categories = await fnCategories(item.category_id);
    }

    res.json(result)

}



module.exports = searchCtrl