import {format} from "date-fns";

export const buildUrl = ({city, transit}) => {
    const station = city;
    const type = transit === 'departures' ? 'departure' : 'arrival';
    return `https://transport.opendata.ch/v1/stationboard?station=${station}&type=${type}&transportations=train`;
}

export const dateTimeConverter = (date) => {
    return format(new Date(date), "d MMM yyyy 'at' h:mm bb")
}