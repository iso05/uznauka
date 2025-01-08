import React, { useEffect } from 'react';

const GoogleAds = () => {
    useEffect(() => {
        const loadAds = () => {
            try {
                if (typeof window !== "undefined") {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                }
            } catch (error) {
                console.log('AdSense error:', error);
            }
        };

        loadAds();
    }, []);

    return (
        <ins 
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-5047998189921732"  // Replace with your publisher ID
            data-ad-slot="5554813692"               // Optional - remove if using Auto ads
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
};

export default GoogleAds;