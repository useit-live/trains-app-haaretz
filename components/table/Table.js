"use client";
import {useState, useEffect, useTransition, useCallback} from "react";
// import {useDebounce} from "@/hooks/use-debounce";
import {dateTimeConverter} from "@/helper";
import debounce from "lodash.debounce";
import Loader from "@/components/loader/Loader";


/**
 * Uncomment following commented code for sorting trains without useTransition
 */
const Table = ({search, pageProps}) => {
    const [destinations, setDestinations] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [isSearching, startSearching] = useTransition();

    const className = (item) => {
        return !item?.stop?.departure || !item?.stop?.prognosis?.arrival
            ? 'px-6 py-4 text-center font-bold text-red-500 whitespace-nowrap r'
            : 'px-6 py-4 text-center font-medium text-gray-800 whitespace-nowrap'
    }

    // const debounced = useDebounce(searchString);

    // useEffect(() => {
    //     search("").then((name) => setDestinations(name));
    // }, [search]);
    //
    // const setFilter = async () => setDestinations(await search(debounced));
    //
    // useEffect(() => {
    //     setFilter().then(() => {
    //     });
    // }, [debounced])


    const debouncedFn = debounce((str) => {
        startSearching(() => {
            console.log('str', str);
            search(str)
                .then(res => {
                    setDestinations(res);
                });
        })
    }, 1000);
    const memorizedFn = useCallback((str) => {
        debouncedFn(str);
    }, [search]);

    useEffect(() => {
        search("").then(res => {
            setDestinations(res);
        });
    }, [search, setDestinations]);

    return (
        <>
            <div className="flex justify-center gap-2 my-5">
                {/*<input*/}
                {/*    type="text"*/}
                {/*    placeholder='Search by City'*/}
                {/*    value={searchString}*/}
                {/*    onChange={(e) => setSearchString(e.target.value)}*/}
                {/*    className='border focus:border-transparent px-2'*/}
                {/*/>*/}
                <input
                    type="text"
                    placeholder='Search by City'
                    value={searchString}
                    onChange={(e) => {
                        setSearchString(e.target.value);
                        memorizedFn(e.target.value);
                    }}
                    className='border focus:border-transparent px-2'
                />
            </div>
            {isSearching && <Loader/>}
            <div className="flex flex-col">
                <div className="overflow-x-auto flex justify-center">
                    <div className="p-1.5 inline-block align-middle w-9/12">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                                        Date / Time
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                                        City
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {destinations?.map((item, index) => (
                                    <tr key={index}>
                                        {pageProps.params.transit === 'departures'
                                            ? <td
                                                className={item.stop?.departure ? 'px-6 py-4 text-center font-medium text-gray-800 whitespace-nowrap' : 'px-6 py-4 text-center font-bold text-red-500 whitespace-nowrap'}>
                                                {item.stop?.departure ? dateTimeConverter(item?.stop?.departure) : 'Not final'}
                                            </td>
                                            : <td
                                                className={item.stop?.prognosis?.arrival ? 'px-6 py-4 text-center font-medium text-gray-800 whitespace-nowrap' : 'px-6 py-4 text-center font-bold text-red-500 whitespace-nowrap'}>
                                                {item.stop?.prognosis?.arrival ? dateTimeConverter(item?.stop?.prognosis?.arrival) : 'Not final'}
                                            </td>
                                        }
                                        <td className="px-6 py-4 text-center text-gray-800 whitespace-nowrap">
                                            {item.to}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Table;