import React, {useEffect, useState} from 'react';
import './animComments.scss'
import Carousel from "react-multi-carousel";
import {useParams} from "react-router-dom";
import usePhoneService from "../../services/NumberService";
import AnimComment from "./animComment/AnimComment";

function AnimComments(props) {

    const {commentList} = props
    const [comments, setComments] = useState({
        data: [[], [], [], [], [], [], [], [], [], []],
        loaded: false
    })

    useEffect(() => {
        if (commentList !== undefined) {
            setComments({
                data: commentList,
                loaded: true
            })
        }
    }, [commentList])

    let contentComments = comments.data.map((item, index) => {
        return <AnimComment key={index} avg={item?.last_comment?.rating} description={item?.last_comment?.review}
                            phone={item?.phone}/>
    })

    return (
        <div className={'carousel-comments'}>
            <Carousel
                sliderClass={'carousel-comments-slider'}
                additionalTransfrom={0}
                autoPlay={comments.loaded}
                autoPlaySpeed={1}
                centerMode={false}
                customTransition="all 2s linear"
                draggable
                infinite={true}
                arrows={false}
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                responsive={responsiveSetting}
                rewind={false}
                rewindWithAnimation={false}
                rtl={props?.rtl ?? true}
                shouldResetAutoplay
                showDots={false}
                slidesToSlide={0.1}
                transitionDuration={2000}
            >
                {contentComments}
            </Carousel>
        </div>
    )
}

const responsiveSetting = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1242
        },
        items: 3,
        partialVisibilityGutter: 40,
    },
    tablet: {
        breakpoint: {
            max: 1242,
            min: 828
        },
        items: 2,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: {
            max: 828,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
    },
}

export default AnimComments;
