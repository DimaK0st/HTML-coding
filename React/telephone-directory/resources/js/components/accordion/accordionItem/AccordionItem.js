import React, {useEffect, useState} from 'react';
import './accordionItem.scss'
import chevron from '/assets/chevron.svg'

function AccordionItem (props) {
    const {title, className, data, id, setData} = props

    let selected = data===id;

    return (
        <div className={'accordion-wrapper border-bot'} >
            <label className={`accordion-wrapper-title ${selected?'selected':''}`} onClick={()=>setData(selected?'':id)}>
                <span className={'accordion-wrapper-title-text'}>{title}</span>
                <img className={'accordion-wrapper-title-img'} src={chevron}/>
            </label>

            <div className={`accordion-wrapper-content ${className} ${selected?'hui da':'hidden'}`}>
                {props.children}

                <div className={'accordion-wrapper-content-wrapper'}>
                    <button className={'accordion-wrapper-content-wrapper-btn'}>Часті питання</button>
                </div>
            </div>

        </div>
    )
}

export default AccordionItem;
