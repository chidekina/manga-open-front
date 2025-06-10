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
            <div className=''>
                <h1 className='font-black text-5xl'>404</h1>
            </div>
        </div>
    );
}

export default NotFound;