import React from 'react';
import './recommendedArticles.scss'
import RecommendedArticle from "./RecommendedArticle/RecommendedArticle";

function RecommendedArticles(props) {

    return (
        <div className={'recommended-articles'}>
            <span className={'recommended-articles-title'}>Рекомендовані статті</span>
            <div className={'recommended-articles-items'}>
                <RecommendedArticle url={'https://promo.bank.gov.ua/stopfraud/'} domain={'promo.bank.gov.ua'}
                                     title={'Телефонне шахрайство'} date={'30 серпня 2022 р.'}>
                    UKRSIBBANK BNP Paribas Group продовжує нагадувати про принципи платіжної безпеки та способи протидії
                    телефонному шахрайству, підтримуючи Всеукраїнську інформаційну кампанію з протидії платіжному
                    шахрайству від НБУ.
                    Телефонне шахрайство — це вид шахрайства, коли шахрай телефонує і переконує жертву повідомити
                    особисту, фінансову чи конфіденційну інформацію або переказати гроші.
                    Шахрай може назватися будь-ким: працівником банку, працівником НБУ, пенсійного фонду, фіскальної
                    служби, працівником поліції, працівником комунальних служб, працівником мобільного оператора,
                    покупцем вашого товару тощо.
                </RecommendedArticle>

                <RecommendedArticle
                    url={'https://zaxid.net/dvoye_lvivyan_vid_imeni_politsiyi_vimagali_groshi_u_meshkantsiv_ivano_frankivska_n1528370'}
                    domain={'zaxid.net'} title={'Двоє львів\'ян від імені поліції вимагали...'} date={'3 вересня 2022 р.'}>
                    Двох мешканців Львівщини затримали за телефонне шахрайство на Прикарпатті. Затримані під виглядом
                    поліцейських телефонували переважно літнім людям та вимагали гроші за непритягнення їхніх родичів до
                    кримінальної відповідальності. В такий спосіб шахраям вдалося виманити в постраждалих близько 100
                    тис. грн.
                </RecommendedArticle>
            </div>
        </div>
    )
}

export default RecommendedArticles;
