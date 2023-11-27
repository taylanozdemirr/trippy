import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/6.jpg";
import Mountain1 from "../assets/5.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt.Daguldul, Batangas"
        text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
