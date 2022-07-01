import {useState} from "react";
import logo from "../../assets/logo512.png";
import './AddNewCardAndMillage.scss'
import Fuse from "fuse.js";
import {TextField} from "@mui/material";
import SelectSearch from "react-select-search";

const AddNewCardAndMillage = (props) => {
    const [form, setForm] = useState({
        title:'',
        description: '',
        final: '',
        start: '',
    })
    const [distance, setDistance] = useState(props.distance)
    const [addNewCard, setAddNewCard] = useState(false)
    const [newDistance, setNewDistance] = useState(false)

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
    const saveDistance = () => {
        props.setDistance(distance)
    }

    const showAddNewCard = (type) => {
        setAddNewCard(type)
    }
    const showNewDistance = (type) => {
        setNewDistance(type)
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
                value={form['title']}
                name="option"
                filterOptions={fuzzySearch}
                placeholder="Choose detail"
                onChange={(e) => onValueChange('title', e)}
            />
            <TextField className={'kilometers'}
                       size="small" label="Start km" type="number"
                       variant="outlined" required onChange={(e) => onValueChange('start', e.target.value)}/>
            <TextField className={'kilometers'}
                       size="small" label="Final km" type="number"
                       variant="outlined" required onChange={(e) => onValueChange('final', e.target.value)}/>
            <TextField className={'kilometers'}
                       size="small" label="Description" type="text" multiline
                       variant="outlined" rows={3} onChange={(e) => onValueChange('description', e.target.value)}/>

            <div className={'button-wrapper'}>
                <button className={'cancel'} onClick={() => showAddNewCard(false)}>Cancel</button>
                <button className={'submit'} onClick={() => addCard()}>Submit</button>
            </div>
        </div> : null

    const contentSetDistance = newDistance?
        <>
            <TextField className={'distance'}
                       size="small" label="Start km" type="number"
                       variant="outlined" required onChange={(e) => setDistance(Number(e.target.value))}/>
            <div className={'button-wrapper'}>
                <button className={'cancel'} onClick={() => showNewDistance(false)}>Cancel</button>
                <button className={'submit'} onClick={() => saveDistance()}>Submit</button>
            </div>
        </> : null

    return (
        <div className={'new-card-and-millage'}>
            <div className={'new-card'}>
                {addNewCard ? null :
                    <button className={'add-new-card-btn'} onClick={() => showAddNewCard(true)}>
                        Add new spare part</button>}
                {contentAddCard}
            </div>
            <div className={'add-millage'}>
                {newDistance ? null :
                <button className={'add-distance-btn'} onClick={() => showNewDistance(true)}>
                    Set Distance</button>}
                {contentSetDistance}
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