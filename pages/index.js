import Link from 'next/link';
import useAuth from '../hooks/useAuth';

function Home(){
    const { user, signin } = useAuth();
    console.log('user', user);

    return (
    <div>
        <h1>Home</h1>
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
        
        <button onClick={() => signin()}>Entrar com github</button>
    </div>
    )
}

export default Home