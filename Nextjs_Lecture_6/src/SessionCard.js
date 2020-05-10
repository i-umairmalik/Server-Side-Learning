import React from 'react';

const SessionCard = (props) => {
  return (
    <div className="card-body">
      <h4 className="card-title"></h4>
      <h6 className="card-title">{props.session.speakersNamesCsv}</h6>
      <p className="card-text">{props.session.descriptionShort}</p>
    </div>
  );
};

export default SessionCard;
