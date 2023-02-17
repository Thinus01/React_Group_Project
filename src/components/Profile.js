import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket);
  // const missions = useSelector((state) => state.missions);
  return (
    <>
      <div>
        {/* <table>
          <thead>
            <tr>
              <th>
                <h3>My Missions</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {missions
              .filter((mission) => mission.reserved)
              .map((mission) => (
                <tr key={mission.id}>
                  <p>{mission.name}</p>
                </tr>
              ))}
          </tbody>
        </table> */}

        <table>
          <thead>
            <tr>
              <th>
                <h3>My Rockets</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {rockets
              .filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <tr key={rocket.id}>
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
