import React, { useEffect, useState } from 'react';

const AnimatedNumber = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev < target) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return target;
                }
            });
        }, 100); // Update every 50ms

        return () => clearInterval(interval); 
    }, [target]);

    return <h3>{count}</h3>;
};

export default AnimatedNumber;
