import React, { useState } from 'react'

export default function useFromFields(initialState = {}) {
    const [fields , setFields] = useState(initialState);
    const handleChange = (e) => {
        setFields({...fields , [e.target.name] : e.target.value});
    }
    return [fields,handleChange,setFields];
}
