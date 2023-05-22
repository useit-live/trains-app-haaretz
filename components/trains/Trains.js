import {buildUrl} from "@/helper";
import Table from "@/components/table/Table";

const loadDataFromServer = async (url) => {
    const response = await fetch(url, {next: {tags: ['collection']}, revalidate: 360})
    return response.json()
}
export default async function Trains(props) {
    const url = buildUrl({city: props.params.city, transit: props.params.transit});

    async function search(search) {
        "use server";
        const trainsData = await loadDataFromServer(url);
        return trainsData.stationboard
            .filter((item) => item.to.toLowerCase().includes(search.toLowerCase()))
            .map((item) => item)
    }

    return (
        <Table search={search} pageProps={props}/>
    );
}