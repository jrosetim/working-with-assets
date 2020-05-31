import React, {PropTypes} from 'react'

import './repos.css'

const Repos = ({classname, title, repos}) => (
  <div className={classname}>
    <h2>{title}</h2>
    <ul>
      { repos.map( (repo, index) => (
          <li key={index}><a href={`https://github.com/${repo.full_name}`}> {repo.name}</a></li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps ={
  className: '',
  repos: []
}

Repos.prototype = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
