import Link from 'next/link';
import style from './Header.module.css';
import { Button, Container } from 'react-bootstrap';

export default function Header() {
    return (
        <header className={style.header}>
            <Container   className={style.container}>
                <div >
                    <Link href='/'>
                       <a> <img src="/images/logo.svg" className={style.logo}/></a>
                    </Link>
               </div>
                <div>
                    <ul>
                        <li>
                            <Link href='/events'>
                                <Button   className={style.button} variant="outline-none"><i className="bi bi-person"></i></Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </header> 
    )
}
