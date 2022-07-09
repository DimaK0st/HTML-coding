import './AddCard.scss'
import SelectSearch from "react-select-search";
import {TextField} from "@mui/material";
import {useState} from "react";
import logo from "../../assets/logo512.png";
import Fuse from "fuse.js";
import {useSelector} from "react-redux";

const AddCard = (props) => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        final: '',
        start: '',
    })
    const [options, setOptions] = useState(props.options)

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

    return (
        <div className={'add-new-card'}>
            <img className={'image'} src={logo} alt={''}/>

            <SelectSearch
                options={options.map(item => {


                    console.log( item.name)
                    console.log( item.name.split(' '))
                    console.log( item.name.split(' ')[0])
                    console.log( item.name.split(' ')[0].length)
                    console.log( item.name.slice(form['title'].split(' ')[0].length))
                    console.log( item.name.slice(form['title'].split(' ')[0].length))
                    return{
                    name: item.name.slice(form['title'].split(' ')[0].length),
                    value: item.value
                }})}
                search
                value={form['title'].substr(form['title'].split(' ')[0].length)}
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
                <button className={'cancel'} onClick={() => props.showAddNewCard(false)}>Cancel</button>
                <button className={'submit'} onClick={() => addCard()}>Submit</button>
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

export default AddCard