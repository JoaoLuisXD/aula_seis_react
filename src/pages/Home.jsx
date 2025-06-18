import { useEffect, useState } from "react";
import { API } from "../services";

const Home = () => {

    const [products, setProducts] = useState([]);

    async function buscarProdutos(){
        const request = await API.get('/products');
        setProducts(request.data);
    }

    useEffect(() => {
        buscarProdutos();
    }, [])

    console.log(products);
    



    return (
        <>
            <section className="overflow-hidden px-5">
                <h1>Lista de Produtos</h1>

                <ul className="grid list-none p-0">
                    {
                        products.map((product) => (
                        <li className='col-12 md:col-3'>
                        <div className="shadow-4 border-round-md">
                            <div className="relative">
                                <img src={product.image} alt={product.tittle} className="w-full" style={{height: '300px', objectFit: 'contain'}}/>
                                <h6 className="absolute top-0 right-0 py-1 px-2 border-round-md" style={{backgroundColor: 'var(--blue-800)', marginRight:'4px'}}>{product.rating.rate}</h6>                   
                            </div>
                            <h3 className="mb-0">{product.title}</h3>
                            <h6 className="mt-1 uppercase" style={{color: 'var(--blue-600)'}}>{product.category}</h6>
                            <h2>$ {product.price}</h2>
                        </div>
                    </li>
                    ))
                    }
                </ul>
            </section>
        </>
        
    );
}
 
export default Home;