import React, {useEffect, useState} from 'react';
import './index.scss';
import {Users} from './components/Users';
import {Success} from "./components/Success";

// Тут список пользователей: https://reqres.in/api/users

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [invites, setInvites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        console.log('fetching users...');
        setIsLoading(true);
        fetch('https://reqres.in/api/users').then(r => r.json()).then(data => {
            setUsers(data.data);
        }).catch(err => {
            setUsers(getMockUsers().data);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [])

    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    }

    const onClickSendInvites = () => {
        setSuccess(true);
    }

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id));
        } else {
            setInvites(prev => [...prev, id]);
        }
    }

    console.log(users)
    return (
        <div className="App">
            {success ?
                <Success count={invites.length}/> :
                <Users isLoading={isLoading} items={users} searchValue={searchValue} onClickSendInvites={onClickSendInvites}
                       onChangeSearchValue={onChangeSearchValue} onClickInvite={onClickInvite} invites={invites}/>
            }
        </div>
    );
}

function getMockUsers() {
    return {
        "page": 1,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [{
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        }, {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        }, {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        }, {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        }, {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        }, {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }],
        "support": {
            "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
            "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
        },
        "_meta": {
            "powered_by": "ReqRes",
            "docs_url": "https://app.reqres.in/documentation",
            "upgrade_url": "https://app.reqres.in/upgrade",
            "example_url": "https://app.reqres.in/examples/notes-app",
            "variant": "v1_b",
            "message": "Need more than fake data? Projects give you real CRUD + auth in minutes.",
            "cta": {"label": "Get started", "url": "https://app.reqres.in/upgrade"},
            "context": "legacy_success"
        }
    }
}

export default App;
