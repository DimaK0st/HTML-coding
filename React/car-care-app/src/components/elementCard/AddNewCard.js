import {useState} from "react";
import logo from "../../assets/logo512.png";
import './AddNewCard.scss'
import SelectSearch from 'react-select-search';
import Fuse from "fuse.js";
import {TextField} from "@mui/material";

const AddNewCardAndMillage = () => {
    const [addNewCard, setAddNewCard] = useState(false)

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

            <TextField className={'kilometers'}
                       size="small" label="Start km" type="number"
                       variant="outlined" required/>
            <TextField className={'kilometers'}
                       size="small" label="Final km" type="number"
                       variant="outlined" required/>
            <TextField className={'kilometers'}
                       size="small" label="Description" type="number" multiline
                       variant="outlined" rows={3}/>

            <div className={'button-wrapper'}>
                <button className={'cancel'} onClick={()=>showAddNewCard(false)}>Cancel</button>
                <button className={'submit'}>Submit</button>
            </div>
        </div>: null

    return(
        <div className={'new-card-and-millage'}>
            <div className={'new-card'}>
            {addNewCard ? null: <button className={'add-new-card-btn'} onClick={()=>showAddNewCard(true)}>Add new spare part</button> }
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