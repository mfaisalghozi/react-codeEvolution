import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello World</h1>
    //     </div>
    // )
    return React.createElement(
            'div', 
            {id: 'hello', className : 'iniNamaKelas'}, 
            React.createElement('h1', null, 'Callback in react'))

}

export default Hello