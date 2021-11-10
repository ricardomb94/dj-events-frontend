import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'


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
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Cars Events | find the best car that is suits your needs',
    description: 'Add options and other layouts',
    keywords: 'Tyres, color, speed'
}