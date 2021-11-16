import style from './Showcase.module.css';
import ShowcaseInfo from './ShowcaseInfo'

export default function Showcase() {
    return (
        <div className={style.showcase}>
            <ShowcaseInfo/>
        </div>
    )
}
