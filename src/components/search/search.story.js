import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Search from './index'

const storie= storiesOf('Search Component', module)

storie.add('Input Search Disabled', () => (
  <Search isDisabled='true' handleSearch={ localKeydown } />
))

storie.add('Input Search Enabled', () => (
  <Search handleSearch={ localKeydown } />
))

function localKeydown () {
  // const value = e.target.value
  // const keyCode = e.which || e.keyCode

  console.log('clicou');
}
