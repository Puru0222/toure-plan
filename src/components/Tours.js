import Card from "./Card";

function Tours({ tours, onRemove }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan with Puru</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id } {...tour} onRemove={onRemove}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
