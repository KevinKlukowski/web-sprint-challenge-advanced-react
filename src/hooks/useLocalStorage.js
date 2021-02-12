import React, { useState } from 'react';

export const useLocalStorage = (key, initialValues) => {
    const [storedValue, setStoredValue] = useState(() => {

        const local = window.localStorage.getItem(key)
        return local ? JSON.parse(local) : initialValues
    })
    const setValues = (values) => {
        setStoredValue(values);
        window.localStorage.setItem(key, JSON.stringify(values))
    }
    return [storedValue, setValues];
}