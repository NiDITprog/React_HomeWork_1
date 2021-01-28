import React from 'react';
import ReactDOM from 'react-dom';

import { A } from './components/task1/A';
import UserList from "./components/task2/UserList";

const userList = [
    {
        "active": true,
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Jeff",
            "last": "Franklin"
        },
        "location": {
            "street": {
                "number": 838,
                "name": "Bruce St"
            },
            "city": "Melbourne",
            "state": "Western Australia",
            "country": "Australia",
            "postcode": 7089,
            "coordinates": {
                "latitude": "-84.8420",
                "longitude": "-157.3956"
            },
            "timezone": {
                "offset": "+3:00",
                "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
            }
        },
        "email": "jeff.franklin@example.com",
        "login": {
            "uuid": "748119e3-3507-4d76-8f10-0cdde1e92619",
            "username": "bigbear139",
            "password": "weed",
            "salt": "nwcC1CyH",
            "md5": "bfd6a2c1491a0e255841b757470012dc",
            "sha1": "14edfa8803b6b47893c204cab7fa465d1ee06669",
            "sha256": "f15015a04bf5b0e923da1dacaaecf0ac9370e89e9e3857ee6b184dc6cf730f7f"
        },
        "dob": {
            "date": "1986-02-23T09:54:58.207Z",
            "age": 35
        },
        "registered": {
            "date": "2017-02-17T21:02:20.487Z",
            "age": 4
        },
        "phone": "08-0951-4051",
        "cell": "0413-481-187",
        "id": {
            "name": "TFN",
            "value": "949822118"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/82.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
        },
        "nat": "AU"
    },
    {
        "active": false,
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Ömür",
            "last": "Saygıner"
        },
        "location": {
            "street": {
                "number": 1627,
                "name": "Istiklal Cd"
            },
            "city": "Kırklareli",
            "state": "Yalova",
            "country": "Turkey",
            "postcode": 19752,
            "coordinates": {
                "latitude": "-59.7152",
                "longitude": "-111.5154"
            },
            "timezone": {
                "offset": "-3:00",
                "description": "Brazil, Buenos Aires, Georgetown"
            }
        },
        "email": "omur.sayginer@example.com",
        "login": {
            "uuid": "57d21ccf-7fd4-4423-9beb-dba5277f1fbc",
            "username": "beautifulwolf675",
            "password": "macaroni",
            "salt": "7QYxXSe3",
            "md5": "3655b45e39097b04e4e725f1f7711a67",
            "sha1": "b69c1717819775a9d20df4996156359344383484",
            "sha256": "9fc96e3fcc3f76b2b406cdb96af24662ee9e6e3015f1b6746646b37fc5c02002"
        },
        "dob": {
            "date": "1980-09-19T09:38:13.359Z",
            "age": 41
        },
        "registered": {
            "date": "2005-01-15T10:59:27.055Z",
            "age": 16
        },
        "phone": "(683)-609-6362",
        "cell": "(551)-677-6685",
        "id": {
            "name": "erf",
            "value": "43432432523"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/4.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
        },
        "nat": "TR"
    },
    {
        "active": true,
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Clifford",
            "last": "Price"
        },
        "location": {
            "street": {
                "number": 6518,
                "name": "Forest Ln"
            },
            "city": "Tweed",
            "state": "Queensland",
            "country": "Australia",
            "postcode": 6633,
            "coordinates": {
                "latitude": "-21.3228",
                "longitude": "105.5554"
            },
            "timezone": {
                "offset": "+5:45",
                "description": "Kathmandu"
            }
        },
        "email": "clifford.price@example.com",
        "login": {
            "uuid": "b1e81faa-209d-45a0-ba5b-38839cc9ae80",
            "username": "bigtiger731",
            "password": "2002",
            "salt": "3OZYcH17",
            "md5": "7ebed36f44583efcd7ca2c9d27b6050a",
            "sha1": "a73b6c74bbbdad96d75ad998de9a8cb609069fc8",
            "sha256": "6ba540ec359bd5a2e5b1edb51ef18139a680acacb6bf49aa0aa22ab9484809db"
        },
        "dob": {
            "date": "1991-05-09T13:22:47.929Z",
            "age": 30
        },
        "registered": {
            "date": "2015-04-21T08:10:07.533Z",
            "age": 6
        },
        "phone": "00-6504-7928",
        "cell": "0493-687-655",
        "id": {
            "name": "TFN",
            "value": "423214174"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/56.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
        },
        "nat": "AU"
    },
    {
        "active": false,
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Bessie",
            "last": "Bennett"
        },
        "location": {
            "street": {
                "number": 733,
                "name": "Cackson St"
            },
            "city": "Albany",
            "state": "Australian Capital Territory",
            "country": "Australia",
            "postcode": 5897,
            "coordinates": {
                "latitude": "-58.8448",
                "longitude": "-113.6233"
            },
            "timezone": {
                "offset": "+2:00",
                "description": "Kaliningrad, South Africa"
            }
        },
        "email": "bessie.bennett@example.com",
        "login": {
            "uuid": "bca4e64e-adc0-48df-81eb-db819807be4e",
            "username": "angrybird416",
            "password": "thunder",
            "salt": "dFcEsCSh",
            "md5": "ee09286e23d88fded412b538e0f26474",
            "sha1": "1621d09c872d86aa92513f69936a181f50404d59",
            "sha256": "037e554c958c0dc221bd623cfa1cf99f3af0393bc8bbe6033e42cae8851bb36b"
        },
        "dob": {
            "date": "1953-12-20T04:55:19.116Z",
            "age": 68
        },
        "registered": {
            "date": "2002-08-14T02:44:24.651Z",
            "age": 19
        },
        "phone": "03-6459-9176",
        "cell": "0417-585-292",
        "id": {
            "name": "TFN",
            "value": "698632454"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/24.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
        },
        "nat": "AU"
    },
    {
        "active": true,
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Filippa",
            "last": "Jensen"
        },
        "location": {
            "street": {
                "number": 5378,
                "name": "Skansevej"
            },
            "city": "Støvring ",
            "state": "Nordjylland",
            "country": "Denmark",
            "postcode": 28172,
            "coordinates": {
                "latitude": "88.3913",
                "longitude": "-71.8048"
            },
            "timezone": {
                "offset": "+11:00",
                "description": "Magadan, Solomon Islands, New Caledonia"
            }
        },
        "email": "filippa.jensen@example.com",
        "login": {
            "uuid": "9ec98873-5427-42c6-a0a1-0681100a0807",
            "username": "bluesnake241",
            "password": "jayhawks",
            "salt": "xq5dREIS",
            "md5": "49640751351476d5bd2c6213d360db2e",
            "sha1": "545ce56a5025faccf91583f7ad5b4d60be1293f7",
            "sha256": "fb6bb53a47734861427e68549f12b4615644643d35bbc6694179fe6a7e8dc159"
        },
        "dob": {
            "date": "1948-05-26T19:24:04.746Z",
            "age": 73
        },
        "registered": {
            "date": "2005-10-31T23:10:11.309Z",
            "age": 16
        },
        "phone": "69809368",
        "cell": "09622346",
        "id": {
            "name": "CPR",
            "value": "260548-3950"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/32.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/32.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/32.jpg"
        },
        "nat": "DK"
    },
    {
        "active": false,
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Mikkel",
            "last": "Thomsen"
        },
        "location": {
            "street": {
                "number": 5882,
                "name": "Agervej"
            },
            "city": "Hammel",
            "state": "Syddanmark",
            "country": "Denmark",
            "postcode": 21675,
            "coordinates": {
                "latitude": "-38.7595",
                "longitude": "-32.4751"
            },
            "timezone": {
                "offset": "-11:00",
                "description": "Midway Island, Samoa"
            }
        },
        "email": "mikkel.thomsen@example.com",
        "login": {
            "uuid": "8795b43f-f8bd-4936-8e0b-78b73d2135ae",
            "username": "purpleleopard258",
            "password": "zxcv",
            "salt": "t01p9zot",
            "md5": "642961f15f85a989112a5d8a118c0be0",
            "sha1": "9cbf1c7bc46ed2d80d8476e8363bea8d7eb9bc97",
            "sha256": "23bc7e629c6d3e05d64a752722181d749d93165b2b25b4a6838454eeb18939e8"
        },
        "dob": {
            "date": "1977-08-04T17:25:53.487Z",
            "age": 44
        },
        "registered": {
            "date": "2003-08-10T08:08:05.797Z",
            "age": 18
        },
        "phone": "89461556",
        "cell": "89119210",
        "id": {
            "name": "CPR",
            "value": "040877-3971"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/54.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
        },
        "nat": "DK"
    },
    {
        "active": true,
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Archer",
            "last": "Li"
        },
        "location": {
            "street": {
                "number": 9070,
                "name": "Portobello Road"
            },
            "city": "Lower Hutt",
            "state": "Southland",
            "country": "New Zealand",
            "postcode": 18965,
            "coordinates": {
                "latitude": "62.2803",
                "longitude": "-155.6700"
            },
            "timezone": {
                "offset": "-12:00",
                "description": "Eniwetok, Kwajalein"
            }
        },
        "email": "archer.li@example.com",
        "login": {
            "uuid": "f6ad1fa4-3579-44e9-9bd5-3157b84a77ca",
            "username": "greenbutterfly125",
            "password": "tight",
            "salt": "jyvBeLBE",
            "md5": "d237f8427c9c905983aebf8d79e69ee1",
            "sha1": "8c8f98abf654c6debcca2db6abbb36067d3ed5ab",
            "sha256": "2c4dcd54f4eb7ba2d8eab3a48952ddd34eb4825112913f9fe6da2284ee28bdcb"
        },
        "dob": {
            "date": "1988-06-06T09:36:50.772Z",
            "age": 33
        },
        "registered": {
            "date": "2003-06-27T14:36:46.583Z",
            "age": 18
        },
        "phone": "(669)-525-9039",
        "cell": "(944)-975-1214",
        "id": {
            "name": "fsfs",
            "value": "8998342425"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/40.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
        },
        "nat": "NZ"
    },
    {
        "active": false,
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Kübra",
            "last": "Pekkan"
        },
        "location": {
            "street": {
                "number": 4104,
                "name": "Maçka Cd"
            },
            "city": "Kars",
            "state": "Muğla",
            "country": "Turkey",
            "postcode": 86972,
            "coordinates": {
                "latitude": "-23.3237",
                "longitude": "114.0891"
            },
            "timezone": {
                "offset": "+9:30",
                "description": "Adelaide, Darwin"
            }
        },
        "email": "kubra.pekkan@example.com",
        "login": {
            "uuid": "a3dfa921-c0ab-4c5f-8eab-27bed784c50a",
            "username": "bigkoala759",
            "password": "inside",
            "salt": "127gAhxR",
            "md5": "634ce181e581a1c12ec7d5d903b92e99",
            "sha1": "0b35156927f95a6e0d8bf823a250f567620087bc",
            "sha256": "6fdceaace9354a140df12659dbb34cd5f915db2aaacbb1f6b7e48a0369dfe057"
        },
        "dob": {
            "date": "1951-03-26T05:15:08.328Z",
            "age": 70
        },
        "registered": {
            "date": "2008-04-07T06:17:46.910Z",
            "age": 13
        },
        "phone": "(836)-807-0508",
        "cell": "(881)-611-6683",
        "id": {
            "name": "ddsa",
            "value": "330135123"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/67.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
        },
        "nat": "TR"
    }
];


ReactDOM.render(
    <>
        <A />
        <UserList users={userList}/>
    </>,
    document.getElementById('root'));
