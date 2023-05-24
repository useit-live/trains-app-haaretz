'use client'

import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const RadioButtons = () => {
    const router = useRouter();
    const params = useParams();
    const [value, setValue] = useState('');
    const onHandleChange = (event) => {
        router.push(`/${params.city}/${event.target.value}`);
    }

    useEffect(() => {
        setValue(params.transit);
    }, [params])

    return (
        <div className='flex justify-evenly py-4'>
            <div className="flex items-center">
                <input
                    checked={value === 'departures'}
                    id="deppartures"
                    type="radio"
                    value="departures"
                    onChange={onHandleChange}
                />
                <label htmlFor="deppartures" className="ml-2">Departures</label>
            </div>
            <div className="flex items-center">
                <input
                    checked={value === 'arrivals'}
                    id="arrivals"
                    type="radio"
                    value="arrivals"
                    name="radio-button"
                    onChange={onHandleChange}
                />
                <label htmlFor="arrivals" className="ml-2">Arrivals</label>
            </div>
        </div>
    );
};

export default RadioButtons;