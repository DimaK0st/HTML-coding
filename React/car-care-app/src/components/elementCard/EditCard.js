import {useState} from "react";
import logo from "../../assets/logo512.png";
import './EditCard.scss'
import SelectSearch from 'react-select-search';
import Fuse from "fuse.js";
import {TextField} from "@mui/material";

const EditCard = (props) => {
    const [editForm, setEditForm] = useState(props.props.data)
    const onValueChange = (name, value) => {
        setEditForm((editForm) => {
            return {
                ...editForm,
                [name]: value
            }
        })
    }

    const editCard = () => {
        props.editCard(editForm)
    }

    const options = [
        {name: 'Brace', value: 'sv'},
        {name: 'English', value: 'en'},]

    return (
        <div className={'edit-card'}>
            <input type={'hidden'}/>
            <img className={'image'} src={logo}/>
            <SelectSearch
                options={options}
                search
                value={editForm.title}
                name="detail"
                filterOptions={fuzzySearch}
                emptyMessage="Not found"
                placeholder="Choose detail"
                onChange={(e) => onValueChange('title', e)}
            />

            <TextField className={'kilometers'}
                       size="small" label="Start km" type="number" value={editForm.start}
                       variant="outlined" required onChange={(e) => onValueChange('start', e.target.value)}/>
            <TextField className={'kilometers'}
                       size="small" label="Final km" type="number" value={editForm.final}
                       variant="outlined" required onChange={(e) => onValueChange('final', e.target.value)}/>
            <TextField className={'kilometers'}
                       size="small" label="Description" type="number" multiline value={editForm.description}
                       variant="outlined" rows={2} onChange={(e) => onValueChange('description', e.target.value)}/>

            <div className={'button-wrapper'}>
                <button className={'cancel'} onClick={() => props.showEditCard()}>Cancel</button>
                <button className={'submit'} onClick={() => editCard()}>Submit</button>
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

export default EditCard