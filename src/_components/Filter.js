import React from "react";

export const Filter = ({filter,setFilter}) => {
    return (
        <span>
            search : {' '}
            <input value={filter || ''} onChange={e=>setFilter(e.target.value)} />
        </span>
    )
}