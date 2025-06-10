import { Link } from 'react-router-dom';
import imageNotFound from '/not-found.png'

const NotFound = () => {
    return (
        <div className='h-screen w-full flex items-center px-24'>
            <div>
                <img
                    src={imageNotFound}
                    alt="Personagem de mangá triste"
                    className='w-1/2'
                />
            </div>
            <div className='flex flex-col gap-2 text-center'>
                <h1 className='font-black text-7xl'>404</h1>
                <h2 className='text-4xl'>Essa página não existe :(</h2>
                <Link
                    to="/"
                    className='mt-5 text-md underline'
                >
                    Volte para a página inicial
                </Link>
            </div>
        </div>
    );
}

export default NotFound;