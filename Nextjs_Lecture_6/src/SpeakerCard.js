import React from 'react';
import Link from 'next/link';

const SpeakerCard = (props) => {
  return (
    <div>
      <img
        className="card-img-top"
        src={`/static/speakers/Speaker-${props.speaker.id}.jpg`}
      />
      <div className="card-body">
        <Link
          href={{
            pathname: '/speaker',
            query: {
              speakerId: props.speaker.id,
            },
          }}
          as={`speaker/${props.speaker.id}`}
        >
          <a className="btn btn-lg btn-block btn-outline-primary">Details</a>
        </Link>

        <h4 className="card-title">
          {props.speaker.userFirstName}
          {props.speaker.userLastName}{' '}
        </h4>
        <p className="card-text">{props.speaker.bioShort}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
