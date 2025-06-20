function Entry() {
    return (
        <article className="journal-entry">
            <div className="animal-img-container">
                <img className="animal-img" src="src\assets\1.jpg" alt="lizard in the atacama dessert" />
            </div>
            <div className="info-container">
                <img className="pin-img" src="src\assets\pin.png" alt="location pin" />
                <span className="country">Chile</span>
                <a href="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D">View location on Google Maps</a>           
                <h2 className="species-name">Black-spotted Lizard</h2>
                <p className="trip-dates">September 2018</p>
                <p className="description">Liolaemus nigromaculatus is a species of lizard that belongs to the family Liolaemidae. This species is part of a large and diverse group of lizards found in South America, particularly in Argentina and Chile. The species is characterized by its distinctive color pattern, which includes black spots or markings on its body, hence the name "nigromaculatus," meaning "black-spotted" in Latin.</p>
            </div>
        </article>
    )
}

export default Entry;