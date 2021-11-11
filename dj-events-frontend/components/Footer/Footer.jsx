import Link from 'next/link';
import  style from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <p>Copyright &copy; Alterwego 2021</p>
            <p>
                <Link href='/about'>
                    Best Quality services
                </Link>
            </p>
        </footer>
    )
}
