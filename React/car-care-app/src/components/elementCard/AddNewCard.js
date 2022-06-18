import {useState} from "react";
import logo from "../../assets/logo512.png";
import './AddNewCard.scss'
import SelectSearch from 'react-select-search';
import Fuse from "fuse.js";

const AddNewCardAndMillage = () => {
    const [addNewCard, setAddNewCard] = useState(true)

    const showAddNewCard = (type)=>{
        setAddNewCard(type)
    }

    const options = [
        {name: 'Brace', value: 'sv'},
        {name: 'English', value: 'en'},]

    const contentAddCard = addNewCard?
        <div className={'add-new-card'}>
            <img className={'image'} src={logo} />
            <SelectSearch
                    options={options}
                    search
                    value="detail"
                    name="detail"
                    filterOptions={fuzzySearch}
                    emptyMessage="Not found"
                    placeholder="Choose detail"
                />
            <span className={'kilometers'}>
                Start km: <input placeholder='Start' type='number'/>
            </span>
            <span className={'kilometers'}>
                Final km: <input placeholder='Final' type='number'/>
            </span>
            <div className={'button-wrapper'}>
                <button className={'cansel'} onClick={()=>showAddNewCard(false)}>Cansel</button>
                <button className={'submit'}>Submit</button>
            </div>
        </div>: null

    return(
        <div className={'new-card-and-millage'}>
            <div className={'new-card'}>
            {addNewCard ? null: <button onClick={()=>showAddNewCard(true)}>Add new spare part</button> }
            {contentAddCard}
            </div>
            <div className={'add-millage'}>

            </div>
        </div>
    )
}

function fuzzySearch(options) {
    const fuse = new Fuse(options, {
        keys: ['name', 'groupName', 'items.name'],
        threshold: 0.3,
    });

    return (value) => {
        if (!value.length) {
            return options;
        }

        return fuse.search(value).map(({ item }) => item);
    };
}

export default AddNewCardAndMillage