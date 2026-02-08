import React, { useEffect } from 'react';

const SplineScene = () => {
    useEffect(() => {
        // Check if the script is already loaded to avoid duplicates
        if (!document.querySelector('script[src="https://cdn.spline.design/@splinetool/hana-viewer@1.2.44/hana-viewer.js"]')) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://cdn.spline.design/@splinetool/hana-viewer@1.2.44/hana-viewer.js';
            document.head.appendChild(script);
        }
    }, []);

    return (
        <div className="w-full h-full relative flex items-center justify-center bg-transparent">
            {/* We use a web component here, so we suppress React warning if any (React 19 handles this well) */}
            <hana-viewer
                url="https://prod.spline.design/LXr9lILYWJwhqDSG-6mE/scene.hanacode"
                style={{ width: '100%', height: '100%', background: 'transparent' }}
            />
        </div>
    );
};

export default SplineScene;
