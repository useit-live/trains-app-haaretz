export const buildUrl = ({city, transit}) => {
    const station = city;
    const type = transit === 'departures' ? 'departure' : 'arrival';
    return `https://transport.opendata.ch/v1/stationboard?station=${station}&type=${type}&transportations=train`;
}

export const dateTimeConverter = (transit, item) => {
    return transit === 'departures' ? item?.stop?.departure : item?.stop?.prognosis?.arrival
}