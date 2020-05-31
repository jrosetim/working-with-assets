import React, {PropTypes} from 'react'

import  './search.css'

const Search = ({isDisabled, handleSearch}) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.defaultProps = {
  isDisabled: false
}

Search.proptype ={
  isDisabled: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search
