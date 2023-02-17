import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket);
  // const missions = useSelector((state) => state.missions);
  return (
    <>
      <div className="profile">
        {/* <table>
          <thead>
            <tr className="missions-profile">
              <th>
                <h3>My Missions</h3>
              </th>
            </tr>
          </thead>
          <tbody className="activeMissions">
            {missions
              .filter((mission) => mission.reserved)
              .map((mission) => (
                <tr key={mission.id} className="make-reseversations">
                  <p>{mission.name}</p>
                </tr>
              ))}
          </tbody>
        </table> */}

        <table>
          <thead>
            <tr className="rockets">
              <th>
                <h3>My Rockets</h3>
              </th>
            </tr>
          </thead>
          <tbody className="reserveRocketsLink">
            {rockets
              .filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <tr key={rocket.id} className="activeRockets">
                  <p>{rocket.rocketName}</p>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyProfile;
