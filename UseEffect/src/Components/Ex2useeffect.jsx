import React , {useEffect, useState} from 'react'

export default function Ex2useeffect() {

    const [count,setCount] = useState(0)
    useState(() =>{
        console.log("Use Effect Running....");
    },[count])

  return (
    <div>
        <h1>UseEffect Of Example</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add The Number</button>
    </div>
  )
}
