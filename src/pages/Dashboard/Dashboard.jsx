import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <div className="card-container">
      <div className="card" style={{width: "18rem", marginBottom: "1rem"}}>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{width: "18rem", marginBottom: "1rem"}}>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{width: "18rem", marginBottom: "1rem"}}>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
