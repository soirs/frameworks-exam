import React from 'react';
import GithubCorner from 'react-github-corner';
// import Header from '../organisms/Header';

const Fullpage = ({ children }) => {
  return (
    <div className="uk-container uk-padding">
      <GithubCorner
        href={'https://github.com/soirs/frameworks-exam'}
        bannerColor="#000"
        octoColor="#fff"
        size={80}
        direction="left"
      />
      {children}
    </div>
  );
};

export default Fullpage;
