import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Showcase from '../Showcase/Showcase'
import style from './Layout.module.css'
import { Container } from 'react-bootstrap';


export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='decription' content={description}/>
                <meta name='keywords' content={keywords}
                />
            </Head>
           
            <Header />
            <div className={style.container}>
                {children}
            </div>
            <Showcase/>
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Cars Events | find the best car that is suits your needs',
    description: 'Add options and other layouts',
    keywords: 'Tyres, color, speed'
}