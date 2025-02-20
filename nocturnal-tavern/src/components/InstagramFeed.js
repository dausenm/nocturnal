import { useEffect } from "react";

function InstagramFeed() {
    useEffect(() => {
        // Load Tagembed script dynamically
        const script = document.createElement("script");
        script.src = "https://widget.tagembed.com/embed.min.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="instagram-feed">
            <div
                align="center"
                className="tagembed-widget"
                style={{ width: "60%", height: "100%" }}
                data-widget-id="2154825"
                data-tags="false"
                view-url="https://widget.tagembed.com/2154825"
            ></div>
        </div>
    );
}

export default InstagramFeed;
