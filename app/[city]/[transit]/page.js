import React, {Suspense} from "react";
import Trains from "@/components/trains/Trains";
import Loader from "@/components/loader/Loader";
import {buildUrl} from "@/helper";

const loadDataFromServer = async (url) => {
    const response = await fetch(url, {next: {tags: ['collection']}, revalidate: 360})
    return response.json()
}

export default function Page(props) {
    const url = buildUrl({city: props.params.city, transit: props.params.transit});

    async function search(search) {
        "use server";
        const trainsData = await loadDataFromServer(url);
        return trainsData.stationboard
            .filter((item) => item.to.toLowerCase().includes(search.toLowerCase()))
            .map((item) => item)
            .slice(0, 50);
    }

    return (
        <div className="p-5">
            <Suspense fallback={<Loader/>}>
                <Trains search={search} props={props}/>
            </Suspense>
        </div>
    );
}