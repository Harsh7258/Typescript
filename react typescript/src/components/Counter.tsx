import { ReactNode } from 'react'

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
}

const Counter = ({ setCount, children }: CounterProps) => {

    return (
        <>
            
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <h6>{children}</h6>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </>
    )
}
export default Counter