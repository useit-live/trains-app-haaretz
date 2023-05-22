import {Suspense} from "react";
import Trains from "@/components/trains/Trains";
import Loader from "@/components/loader/Loader";

export default function Page(props) {
    return (
        <div className="p-5">
            <Suspense fallback={<Loader/>}>
                <Trains {...props}/>
            </Suspense>
        </div>
    );
}