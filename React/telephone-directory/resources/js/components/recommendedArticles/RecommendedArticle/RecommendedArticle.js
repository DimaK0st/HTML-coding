import React from 'react';
import './recommendedArticle.scss'

function RecommendedArticle(props) {
    const {url, domain, title, date} = props

    return (
        <div className={'recommended-article'}>
            <a className={'recommended-article-title'}
               href={url} target="_blank">
                {title}
            </a>
            <div className="recommended-article-info">
                <span className={'recommended-article-info-date'}>
                    {date}
                </span>
                <span className={'recommended-article-info-domain'}>
                    {domain}
                </span>
            </div>
            <span className={'recommended-article-description'}>
                {props.children}
            </span>
        </div>
    )
}

export default RecommendedArticle;
