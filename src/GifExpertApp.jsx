import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategories = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={ onAddCategories}></AddCategory>
            {
                categories.map( (category) => (
                    <GifGrid key={category} category={ category }/>
                ))
            }
        </>
    )
}
