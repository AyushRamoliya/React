import React from 'react'
import { useState } from 'react'

export default function Function() {
    const [count, setCount] = useState(0)
    const reset = () => setCount(0)

    return (
        <div className='b1'>
            <div class="container">
                <div class="row">
                    <div className='c1' class=" text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <h3 class="animate-charcter">COUNTER OF USE STATE</h3>
                        <h1 class="animate-charcter">{count}</h1>
                    </div>
                </div>
            </div>
                <button onClick={() => setCount(count + 1)} style={{ height: "50px", width: "150px", margin: "20px",}}>INCRASE</button>
                <button onClick={() => setCount(count - 1)} style={{ height: "50px", width: "150px", margin: "20px" }}>Decreace</button>
                <button onClick={reset} style={{ height: "50px", width: "150px", margin: "20px" }}>Reset</button>
        </div>
    )
}