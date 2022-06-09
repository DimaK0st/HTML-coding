import {useEffect, useState} from "react";

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide"/>)}
        </>
    )
}

export default Slide
