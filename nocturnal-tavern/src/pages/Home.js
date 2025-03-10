import InstagramFeed from "../components/InstagramFeed";

function Home() {
    return (
        <div className="container">
            <h2>Welcome to Nocturnal Tavern</h2>
            <p>
                Darlings of the dark and devotees of the divine, your search for the perfect evening ends here. 
                Step into <strong>Nocturnal Tavern</strong>, where the air hums with the warmth of candlelight, the clink of glasses, and the 
                unmistakable melody of a night well spent. Whether you're in the mood for an artfully crafted cocktail, 
                a deep pour of your favorite spirit, or a cold pint of something local, we pride ourselves on serving 
                <em> libations as bold as the company you keep.</em>
            </p>

            <p>
                But Nocturnal Tavern is more than a bar—it’s a haven. A place where <strong>friendly service meets an atmosphere of effortless cool</strong>, 
                where every guest is welcomed like an old friend. Whether you're cozied up in a shadowy booth for an 
                intimate conversation or gathered around the bar swapping stories with fellow night owls, you’ll find 
                 <em> a home among the moonlit misfits of Tuscaloosa.</em>
            </p>

            <h3>🎷 Live Jazz, Unforgettable Nights 🎷</h3>
            <p>
                The night comes alive with more than just drinks—we host <strong>regular jazz nights, live performances, and special events </strong> 
                that bring a touch of vintage glamour to your evening. Lose yourself in the sultry sounds of saxophones, 
                sip on something smooth, and let the music carry you away. From pop-up tastings to curated theme nights, 
                <strong>there’s always something happening at Nocturnal Tavern</strong>—the only question is, are you ready to join the revelry?
            </p>

            <h3>✨ Join Us Under the Golden Glow ✨</h3>
            <p>
                No matter what brings you through our doors, Nocturnal Tavern promises <strong>an evening of intrigue, indulgence, and impeccable hospitality. </strong> 
                So stay awhile, sip something delicious, and revel in the magic of the night.
            </p>

            <p>Check out our latest Instagram posts!</p>
            <InstagramFeed />
        </div>
    );
}

export default Home;
