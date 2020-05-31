import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

const storie = storiesOf('Repos', module)


storie.add('With Title prop', () => (
  <Repos title='Favoritos' />
))

storie.add('With title and Repository', () =>(
  <Repos
    title='Favoritos'
    repos={[{
      full_name: '/repo/jrosetim',
      name: 'Julio Rosetim'
    },
    {
      full_name: '/repos/da2k',
      name: 'Fernando Daciuk'
    }
  ]}
  />
) )
