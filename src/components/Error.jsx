import React from 'react'

function Error({ children }) {
    return (

        <div className="bg-red-700 text-white text-center p-3 font-bold">
            <p>{children}</p>
        </div>

    )
}

export default Error
