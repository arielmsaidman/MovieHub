import Card from '../Card/Card';
import "./FullList.css";
// import { useFetch } from "../../hooks/useFetch";

const FullList = ({ contenido, loading, error }) => {

    console.log("users:", contenido);
    console.log("loading:", loading);
    console.log("error:", error);

    if (loading) return <p>loading</p>;

    if (error) return <p>{error}</p>;

    return (

      <div className="grid">
        {contenido.map((item) => (
          <Card
            key={item.id}
            data={item}
          />
        ))}
      </div>
    );
}

export default FullList;

