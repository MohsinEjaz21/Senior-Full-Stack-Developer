import { store$ } from '@src/store'
import React from 'react'

function HomePage() {
    const color = store$.color.use();
    return (
        <>
            {`Color :: ` + color}
            <CompGreen />
            <CompBlue />
        </>
    )
}

function CompGreen() {
    const color$ = store$.color;
    return (
        <button onClick={() => color$.set('green')}>Green</button>
    )
}

function CompBlue() {
    const color$ = store$.color;
    return (
        <button onClick={() => color$.set('blue')}>Blue</button>
    )
}

export default HomePage