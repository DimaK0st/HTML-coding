import NUMBER_CLASS_NAME from "../../../../_CONST";
import Skeleton from "react-loading-skeleton";
import {useEffect, useState} from "react";

const RatingLine = (props) => {
    const {count, current, total, width} = props;
    let [content, setContent] = useState(null);

    useEffect(() => {
        setContent(current !== 0 ?
            <>
                <div className={`rating-line__item bg-${NUMBER_CLASS_NAME[count - 1]}`}
                     style={{width: `${current / total * 100}%`}}></div>
            </> : null)
    }, [props]);

    return (
        <div className={'rating-line'}>
            <div className={'rating-line__bg'} style={{width: width ? `${width}px` : '100%'}}>
                {content}
            </div>
            <span className={'rating-line__text'}> {current ??
                <Skeleton height={15} width={30} baseColor={'#663ef5'} inline={true}/>}×</span>
        </div>
    )
}

export default RatingLine
