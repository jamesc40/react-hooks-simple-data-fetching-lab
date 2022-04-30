import { useEffect, useState } from 'react';

const url = 'https://dog.ceo/api/breeds/image/random'

export default function App() {
    const [dog, setDog] = useState(undefined);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setDog(data.message)) 
    } , [])
    
    if (dog === undefined) return <p>Loading....</p>

    return(
        <img
            src={dog}
            alt='A Random Dog'
        />
    )
}