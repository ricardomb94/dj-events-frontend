import style from './ShowcaseInfo.module.css'

export default function ShowcaseInfo() {
    return (
       <div className={style.showcaseinfo}>
            <div className={style.subscribe}>
                <h1>La voiture par abonnement, <br/>
                + d'économies <br/>
                + de flexibilité
                </h1>
            </div>
            <div className={style.vote}>
                <img src="/images/satisfaction_client_alterwego.png" alt="like" className={style.like}/>
            </div>
       </div>
    )
}
