import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleRockets } from '../../redux/rockets/rocketSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    rocketName, description, flickrImages, reserved, id,
  } = rocket;
  return (
    <div>
      <img src={flickrImages} alt="rockets img" />
      <div>
        <h2>{rocketName}</h2>
        <p>
          {
            reserved ? (
              <span>Reserved</span>
            )
              : ('')
          }
          {description}
        </p>
        {
            reserved ? (
              <button type="button" onClick={() => { dispatch(toggleRockets(id)); }}>Cancel Reservation</button>
            )
              : (
                <button type="button" onClick={() => { dispatch(toggleRockets(id)); }}>Reserve Rocket</button>
              )
          }
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImages: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default Rocket;
