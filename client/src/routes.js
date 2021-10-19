import Home from './shared/pages/home/home';
import SearchPage from './shared/pages/search/search';
import ProductPage from './shared/pages/product/product';
import NotFoundPage from './shared/pages/notFound/notFound';


const routes = [
    {
        path: "/",
        component: Home,
        exact: true
        
    },
    {
        path: "/items",
        component: SearchPage,
        exact: true
        
    },
    {
        path: "/items/:id",
        component: ProductPage,
        exact: true
        
    }, {
        component: NotFoundPage
    }
];

export default routes