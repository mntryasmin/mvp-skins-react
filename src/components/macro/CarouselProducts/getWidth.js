import React, { useState, useEffect } from 'react'

function WidthScreen() {
    const { innerWidth: width } = window;
    
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return (
            width
        );
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default WidthScreen