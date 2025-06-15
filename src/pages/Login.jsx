import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import {Button} from 'primereact/button';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
        
        

const Login = () => {
    const[mostraSenha,setMostrarSenha] = useState(false);
    
    const{register, handleSubmit} = useForm();

    const {setLogado} = useContext(Context)
    
    const navigate = useNavigate();

    function logar(dados){
        if(dados.email == "joaozinho@gmail.com" && dados.senha == "joaozinho123")
        {
            setLogado(true);
            navigate('/home');
        }
    }

    return (
        <>
            <div style={{ backgroundColor: 'var(--cyan-900)' }}  className=' min-h-screen flex align-items-center justify-content-center px-3'>
                <form onSubmit={handleSubmit(logar)} className='col-12 md:col-3 p-3 border-round-md'  style={{ backgroundColor: 'var(--gray-900)' }}>

                    <h2 style={{color: 'var(--primay-50)'}} className='text-center'>Seja Bem-Vindo</h2>
                    <label htmlFor="email" className='block uppercase font-bold text -sm mb-1' style={{color: 'var(--primay-50)'}}>Email</label>
                    <InputText
                        id='email'
                        type='email'
                        placeholder='email@email.com'
                        className='mb-3 w-full'
                        {...register('email', {required:true} )}
                    />
                    <label htmlFor="senha " className='block uppercase font-bold text -sm mb-1' style={{color: 'var(--primay-50)'}}>Senha</label>
                    <div className='mb-3'>
                        <IconField>
                            <InputIcon 
                            className={`pi ${mostraSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                            onClick={() => setMostrarSenha(!mostraSenha)}
                            /> 
                            <InputText 
                                id='senha'
                                type={mostraSenha ? 'text' : 'password'}
                                placeholder='********'
                                className='w-full'
                                {...register('senha', {required:true} )}
                            />
                        </IconField>
                    </div>
                    
                    <Button label='Entrar'
                    type='submit'
                    className='w-full'
                    />
                </form>
            </div>
        </>
    );
}
 
export default Login;