import React from 'react'
import "./LineBreakerStyling.css";
import { Link, NavLink } from 'react-router-dom';

interface Props {
    title: string;
    aText: string;
    aLink: string;
}
const LineBreaker = (props: Props) => {
    return (
        <div className='divider border-top'>
            <h2 className='divider__title'>{props.title}</h2>
            {props.aText && <Link to={`${props.aLink}`} className='link-arrow divider__link'>{props.aText}</Link>}
        </div>
    )
}

export default LineBreaker