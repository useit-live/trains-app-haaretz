import React from 'react';

const Fetcher = async ({ url }) => {
    const data = await (await fetch(url)).json();
    return (
        <div>
            {JSON.stringify(data, null, 2)}
        </div>
    );
};

export default Fetcher;