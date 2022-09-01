import "./popup.css";

const Popup = (props) => {
  return (
    <div className="container">
      <div className="card popup-card">
        <div className="header">
          <h2>Header</h2>
        </div>
        <div className="body">
          <p>Message</p>
          <button>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
