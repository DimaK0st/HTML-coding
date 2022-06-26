import {useCallback, useState} from "react";
import logo from "../../assets/logo512.png";
import './AddNewCard.scss'
import Fuse from "fuse.js";
import {TextField} from "@mui/material";
import Select from 'react-select';
import zIndex from "@mui/material/styles/zIndex";
import SelectSearch from "react-select-search";

const AddNewCardAndMillage = (props) => {
    const [form, setForm] = useState({
        option:'',
        Description: '',
        Final: '',
        Start: '',
    })
    const [addNewCard, setAddNewCard] = useState(false)

    const onValueChange = (name, value) => {
        setForm((form) => {
            return {
                ...form,
                [name]: value
            }
        })
    }

    const addCard = () => {
        props.addCard(form)
    }


    const showAddNewCard = (type) => {
        setAddNewCard(type)
    }

    const options = [
        {name: 'Brace', value: 'sv'},
        {name: 'English', value: 'en'},]

    const contentAddCard = addNewCard ?
        <div className={'add-new-card'}>
            <img className={'image'} src={logo} alt={''}/>

            <SelectSearch
                options={options}
                search
                value={form['option']}
                name="option"
                filterOptions={fuzzySearch}
                placeholder="Choose detail"
                onChange={(e) => onValueChange('option', e)}
            />
            <TextField className={'kilometers'}
                       size="small" label="Start km" type="number"
                       variant="outlined" required onChange={(e) => onValueChange('Start', e.target.value)}/>
            <TextField className={'kilometers'}
                       size="small" label="Final km" type="number"
                       variant="outlined" required onChange={(e) => onValueChange('Final', e.target.value)}/>
            <TextField className={'kilometers'}
                       size="small" label="Description" type="number" multiline
                       variant="outlined" rows={3} onChange={(e) => onValueChange('Description', e.target.value)}/>

            <div className={'button-wrapper'}>
                <button className={'cancel'} onClick={() => showAddNewCard(false)}>Cancel</button>
                <button className={'submit'} onClick={() => addCard()}>Submit</button>
            </div>
        </div> : null

    return (
        <div className={'new-card-and-millage'}>
            <div className={'new-card'}>
                {addNewCard ? null :
                    <button className={'add-new-card-btn'} onClick={() => showAddNewCard(true)}>Add new spare
                        part</button>}
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

        return fuse.search(value).map(({item}) => item);
    };
}

export default AddNewCardAndMillage