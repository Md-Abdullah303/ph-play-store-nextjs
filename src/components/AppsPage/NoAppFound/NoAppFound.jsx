import React from 'react';

const NoAppFound = () => {
    return (
        <div className='my-10 bg-base-200 p-20 rounded-xl flex flex-col justify-center items-center text-center gap-3'>
            <h1 className='text-2xl sm:text-4xl font-bold'>This is Empty</h1>
            <p className='text-lg sm:text-xl text-gray-400'>Go and installed something..</p>
        </div>
    );
};

export default NoAppFound;