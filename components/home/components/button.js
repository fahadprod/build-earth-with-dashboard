import React from 'react'
import Link from 'next/link';

const Button = ()=>{
    return(
        <div>
        <Link href= "/addproperty" as="/addproperty">
        <a type = "submit" className="btn">Add property</a>
        </Link>
        </div>
    )
}

export default Button