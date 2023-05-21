import React, {Suspense} from 'react';
import Loading from "@/app/components/loader/Loading";
import Fetcher from "@/app/[city]/[transit]/fetcher";
import {buildUrl} from "@/app/helper/helper";

const Page = (props) => {

    console.log(props)
    const url = buildUrl({city: props?.params?.city, transit: props?.params?.transit});
    return (
        <div className='text-center m-4'>
            <Suspense fallback={<Loading/>}>
                <Fetcher url={url}/>
            </Suspense>
        </div>
    );
};

export default Page;