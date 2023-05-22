'use client'

import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const RadioButtons = () => {
    const router = useRouter();
    const params = useParams();
    const [value, setValue] = useState('');
    const onHandleChange = (event) => {
        setValue(event.target.value);
        router.push(`/${params.city}/${event.target.value}`);
    }

    useEffect(() => {
        setValue(params.transit);
    }, [])

    return (
        <div className='flex justify-evenly py-4'>
            <div className="flex items-center mb-4">
                <input
                    checked={value === 'departures'}
                    id="radio-1"
                    type="radio"
                    value="departures"
                    name="radio-button"
                    onChange={onHandleChange}
                />
                <label htmlFor="radio-2" className="ml-2">Departures</label>
            </div>
            <div className="flex items-center">
                <input
                    checked={value === 'arrivals'}
                    id="radio-2"
                    type="radio"
                    value="arrivals"
                    name="radio-button"
                    onChange={onHandleChange}
                />
                <label htmlFor="radio-2" className="ml-2">Arrivals</label>
            </div>
        </div>
    );
};

export default RadioButtons;