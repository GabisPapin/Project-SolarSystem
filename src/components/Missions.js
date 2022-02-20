import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions-gallery">
        <Title />
        {missions.map((mission, key) => (<MissionCard
          key={ key }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
