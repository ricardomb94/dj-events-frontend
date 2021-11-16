import Link from 'next/Link'
import Layout from '../components/Layout'
import styles from '../styles/404.module.css'
export default function NotFound() {
    return (
        <Layout>
            <div className={styles.error}>
                <h2>404</h2>
                <h4>Sorry, there is nothing here</h4>
                <Link href='/'>Go back Home</Link>
            </div>
        </Layout>
    )
}
