import React from 'react';
import UserList from '../../_shared/UserList/UserList';

const Home = (props) => (
  <div className="HomeWrapper">
    <UserList></UserList>
  </div>
);

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
