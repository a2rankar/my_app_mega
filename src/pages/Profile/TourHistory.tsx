const TourHistory = ({ data }) => {
    return (
      <div>
        <h3>История туров</h3>
        <ul>
          {data.map((tour) => (
            <li key={tour.id}>
              {tour.title} — {tour.date} ({tour.status})
            </li>
          ))}
        </ul>
      </div>
    )
  }
  export default TourHistory
  