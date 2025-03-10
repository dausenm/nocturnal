function About() {
    return (
        <div className="container">
            <h2>About Us</h2>
            <p>Nocturnal Tavern, located in the heart of downtown Tuscaloosa, is the city's premier location for craft cocktails, friendly faces,
                and an atmosphere you won't forget. Founded in [MONTH YEAR], Nocturnal Tavern has been a staple of the Tuscaloosa nightlife scene
                for years, offering a unique blend of vintage glamour and modern hospitality that keeps our guests coming back for more.
                </p>
                <p>The Tavern's founder, Scott Harless, had a passion for the bar and downtown Tuscaloosa. Our goal is to uphold his legacy and continue
                to provide the best experience for our guests. Whether you're looking for a quiet evening with friends, a lively night out, or a
                memorable event, Nocturnal Tavern is the place to be.
            </p>
            <h3>📍 Find Us Here</h3>
            <div className="map-container">
                <iframe
                    title="Nocturnal Tavern Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.1094415267257!2d-87.56916112368957!3d33.211226961668515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88860304ad881037%3A0x3557006c7d78425e!2sNocturnal%20Tavern!5e0!3m2!1sen!2sus!4v1741593017060!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
        </div>

        </div>
    );
}

export default About;
