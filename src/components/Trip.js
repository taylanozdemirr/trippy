import "./TripStyles.css"
import TripData from './TripData'
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/8.jpg'
import Trip3 from '../assets/6.jpg'

function Trip(){
    return(
        <div className="trip" >
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard" >
                <TripData 
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <TripData 
                    image={Trip2}
                    heading="Trip in Spain"
                    text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <TripData 
                    image={Trip3}
                    heading="Trip in France"
                    text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
            </div>
        </div>
    )
}

export default Trip;