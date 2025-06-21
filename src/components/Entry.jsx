function Entry(props) {
    console.log(props)
    return (
        <article className="journal-entry">
            <div className="animal-img-container">
                <img 
                    className="animal-img" 
                    src={props.img.src} 
                    alt={props.img.alt} />
            </div>
            <div className="info-container">
                <img className="pin-img" src="src/assets/pin.png" alt="pin photo" />
                <span className="country">{props.location}</span>
                <a href={props.map}>View location on Google Maps</a>           
                <h2 className="species-name">{props.name}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="description">{props.description}</p>
            </div>
        </article>
    )
}

export default Entry;