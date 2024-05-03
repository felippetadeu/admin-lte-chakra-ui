import React, { HTMLAttributes } from 'react';

interface IWrapper extends HTMLAttributes<HTMLDivElement>{

}

function Wrapper({ ...props }: IWrapper){
    return <div className='wrapper' {...props}>

    </div>
}

export default Wrapper;