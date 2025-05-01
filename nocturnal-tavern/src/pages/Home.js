import { useNavigate } from "react-router-dom";
import menuImg from "../assets/menu.jpg";
import aboutImg from "../assets/about.jpg";
import contactImg from "../assets/contact.jpg";

function Home() {
    const navigate = useNavigate();

    const sections = [
        { title: "Menu", image: menuImg, path: "/menu" },
        { title: "About", image: aboutImg, path: "/about" },
        { title: "Contact", image: contactImg, path: "/contact" }
    ];

    return (
        <div className="home-wrapper">
            <div className="home-sections">
                {sections.map((section, index) => (
                    <div 
                        key={index} 
                        className="home-panel"
                        style={{ backgroundImage: `url(${section.image})` }}
                        onClick={() => navigate(section.path)}
                    >
                        <div className="overlay">
                            <h2>{section.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            <div className="home-description">
                <h1>
                    Nocturnal Tavern
                </h1>
                <p>
                    Welcome to Nocturnal Tavern – your favorite downtown destination for bold drinks, smooth jazz, 
                    and late-night magic. Scroll, sip, and explore what we have in store.
                </p>
                <h1>
                    Happy Hour: Weekdays 5-8
                </h1>
                <p>
                    Enjoy happy hour Monday - Friday, with deals like:
                        -$5 Well Liquor Pours
                        -$8 Classic Cocktails
                </p>
                <h1>
                    Join us for Whiskey Wednesday!
                </h1>
                <p>
                    Venture into the tavern on any Wednesday night and enjoy an excellent old fashioned with any buffalo trace product (Sazerac Rye, Buffalo Trace, Eagle Rare, 1792) for $5 off regular price!
                </p>
                <h1>
                    Thursdays: Jazz Night
                </h1>
                <p>
                    Join us on Thursday nights for live music. Head over to our Instagram page for more information on who is playing and when. Also, bring that special someone and split a bottle of wine for half off any Thursday night.
                </p>
            </div>
        </div>
    );
}

export default Home;
