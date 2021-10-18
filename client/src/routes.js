import Home from './shared/pages/home/home';
import SearchPage from './shared/pages/search/search';
import ProductPage from './shared/pages/product/product';


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
        
    }
];

export default routes