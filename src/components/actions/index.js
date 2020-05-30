import React, {PropTypes} from 'react'

import './actions.css'

const Actions = ({handlerRepos, handlerStarred}) => (
  <div className='actions'>
    <button onClick={handlerRepos}>Ver repositórios</button>
    <button onClick={handlerStarred} >Ver favoritos</button>
  </div>
)

Actions.proptype ={
  handlerRepos: PropTypes.func.isRequired,
  handlerStarred: PropTypes.func.isRequired
}

export default Actions
