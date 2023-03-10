import { useContext } from "react";
import { AppContext } from "../../context";
import { Link } from "react-router-dom";
import "./orphanagesList.css";

const OrphanagesList = () => {
  const { orphanages, setCurrentPage } = useContext(AppContext);

  const handlePageReset = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(id);
  };
  if (orphanages.length < 1) {
    return <h1 className="no_result">Oops! No Orphanage With That Name</h1>;
  }
  return (
    <section className="container">
      {orphanages.map((items) => {
        const { id, title, description, image } = items;
        return (
          <Link
            to={`/orphanages/${id}`}
            key={id}
            className="each_ophanage"
             onClick={()=> handlePageReset(id)}
          >
            <section>
              <img src={image} alt={title} className="img" />
              <h2>{title}</h2>
              <p>{description}</p>
            </section>
          </Link>
        );
      })}
    </section>
  );
};

export default OrphanagesList;
