"use client";
import {useState, useEffect} from "react";
import {format} from "date-fns";
import {useDebounce} from "@/hooks/use-debounce";
import {dateTimeConverter} from "@/helper";

const Table = ({search}) => {
    const [destinations, setDestinations] = useState([]);
    const [searchString, setSearchString] = useState("");
    const debounced = useDebounce(searchString);


    useEffect(() => {
        search("").then((name) => setDestinations(name));
    }, [search]);

    const setFilter = async () => setDestinations(await search(debounced));

    useEffect(() => {
        setFilter().then(() => {
        });
    }, [debounced])

    return (
        <>
            <div className="flex justify-center gap-2 my-5">
                <input
                    type="text"
                    placeholder='Serach'
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    className='border focus:border-transparent px-2'
                />
            </div>
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
                                        {dateTimeConverter(null, item)
                                            ? <td
                                                className="px-6 py-4 text-center font-medium text-gray-800 whitespace-nowrap">
                                                {format(new Date(dateTimeConverter(null, item)), "d MMM yyyy 'at' h:mm bb")}
                                            </td>
                                            : <td
                                                className="px-6 py-4 text-center font-bold whitespace-nowrap text-red-500">
                                                Not final
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