import LeftSide from "../../sidePanel/leftSide/LeftSide";
import RightSide from "../../sidePanel/rightSide/RightSide";
import './mainContent.scss';

const MainContent = (props) => {
    console.log('mainContent', props)
    return (
        <>
            <div className={'left-side'}>
                <LeftSide/>
            </div>
            <div className={'main-content'}>
                {props.children}
            </div>
            <div className={'right-side'}>
                <RightSide typeForm={props.typeForm}/>
            </div>
        </>
    )
}

export default MainContent