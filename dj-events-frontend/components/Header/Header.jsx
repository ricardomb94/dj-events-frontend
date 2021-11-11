import Link from 'next/link';
import style from './Header.module.css';
import { Button, Container } from 'react-bootstrap';

export default function Header() {
    return (
        <header className={style.header}>
            <Container   className={style.container}>
                <div >
                    <Link href='/'>
                        <img src="/images/logo.svg" className={style.logo}/>
                    </Link>
               </div>
                <div>
                    <ul>
                        <li>
                            <Link href='/events'>
                                <Button   className={style.button} variant="outline-secondary">Events</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </header> 
    )
}
