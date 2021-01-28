import React from 'react';
import ReactDOM from 'react-dom';

import { A } from './components/task1/A';
import UserList from "./components/task2/UserList";

const userList = [
    {
        "active": true,
        "name": {
            "first": "Jeff",
            "last": "Franklin"
        },
        "location": {
            "street": {
                "number": 838,
                "name": "Bruce St"
            },
            "city": "Melbourne",
            "country": "Australia",
        },
        "id": {
            "value": "949822118"
        }
    },
    {
        "active": false,
        "name": {
            "first": "Ömür",
            "last": "Saygıner"
        },
        "location": {
            "street": {
                "number": 1627,
                "name": "Istiklal Cd"
            },
            "city": "Kırklareli",
            "country": "Turkey"
        },
        "id": {
            "value": "43432432523"
        }
    },
    {
        "active": true,
        "name": {
            "first": "Clifford",
            "last": "Price"
        },
        "location": {
            "street": {
                "number": 6518,
                "name": "Forest Ln"
            },
            "city": "Tweed",
            "country": "Australia"
        },
        "id": {
            "value": "423214174"
        }
    },
    {
        "active": false,
        "name": {
            "first": "Bessie",
            "last": "Bennett"
        },
        "location": {
            "street": {
                "number": 733,
                "name": "Cackson St"
            },
            "city": "Albany",
            "country": "Australia"
        },
        "id": {
            "value": "698632454"
        }
    },
    {
        "active": true,
        "name": {
            "first": "Filippa",
            "last": "Jensen"
        },
        "location": {
            "street": {
                "number": 5378,
                "name": "Skansevej"
            },
            "city": "Støvring ",
            "country": "Denmark"
        },
        "id": {
            "value": "260548-3950"
        }
    },
    {
        "active": false,
        "name": {
            "first": "Mikkel",
            "last": "Thomsen"
        },
        "location": {
            "street": {
                "number": 5882,
                "name": "Agervej"
            },
            "city": "Hammel",
            "country": "Denmark"
        },
        "id": {
            "value": "040877-3971"
        }
    },
    {
        "active": true,
        "name": {
            "first": "Archer",
            "last": "Li"
        },
        "location": {
            "street": {
                "number": 9070,
                "name": "Portobello Road"
            },
            "city": "Lower Hutt",
            "country": "New Zealand"
        },
        "id": {
            "value": "8998342425"
        }
    },
    {
        "active": false,
        "name": {
            "first": "Kübra",
            "last": "Pekkan"
        },
        "location": {
            "street": {
                "number": 4104,
                "name": "Maçka Cd"
            },
            "city": "Kars",
            "country": "Turkey"
        },
        "id": {
            "value": "330135123"
        }
    }
];


ReactDOM.render(
    <>
        <A />
        <UserList users={userList}/>
    </>,
    document.getElementById('root'));
