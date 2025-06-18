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
                    <li className='col-12 md:col-3'>
                        <div className="shadow-4 border-round-md">
                            <div className="relative">
                                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className="w-full"/>
                                <h6 className="absolute top-0 right-0 py-1 px-2 border-round-md" style={{backgroundColor: 'var(--blue-800)', marginRight:'4px'}}>4.9</h6>                   
                            </div>
                            <h3 className="mb-0">Bolsa</h3>
                            <h6 className="mt-1 uppercase" style={{color: 'var(--blue-600)'}}>Categoria</h6>
                            <h2>R$ 79,99</h2>

                            
                        </div>
                    </li>
                    <li className='col-12 md:col-3'>
                        <div className="shadow-4 border-round-md" style={{backgroundColor: 'var(--teal-900)'}}>
                            produto2
                        </div>
                    </li>
                    <li className='col-12 md:col-3'>
                        <div className="shadow-4 border-round-md" style={{backgroundColor: 'var(--teal-900)'}}>
                            produto3
                        </div>
                    </li>
                    <li className='col-12 md:col-3'>
                        <div className="shadow-4 border-round-md" style={{backgroundColor: 'var(--teal-900)'}}>
                            produto4
                        </div>
                    </li>
                    <li className='col-12 md:col-3'>
                        <div className="shadow-4 border-round-md" style={{backgroundColor: 'var(--teal-900)'}}>
                            produto5
                        </div>
                    </li>
                </ul>
            </section>
        </>
        
    );
}
 
export default Home;