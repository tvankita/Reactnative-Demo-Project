import React, {useState} from 'react';

export default function FlatListData() {
    const [data, setData] = useState([
        { name: 'Chef Vincent', id: '1', image: require('../src/MyAssets/panjabidish.jpg'),},  
        { name: 'Pine Hill', id: '2', image: require('../src/MyAssets/GuestHouse.jpg'),},
        { name: 'Dhruv Place', id: '3', image: require('../src/MyAssets/island.jpg'),},  
        {name: 'Restuarant', id: '4', image: require('../src/MyAssets/panjabidish.jpg'),}, 
       ]);
}