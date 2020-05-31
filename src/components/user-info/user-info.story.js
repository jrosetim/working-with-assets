import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Userinfo from './index'

const storie = storiesOf('User-info', module)

storie.add('empty info', () => (
  <Userinfo
    userinfo={{
      username: 'Teste',
      photo: 'Teste',
      login: 'Teste',
      repos: 0,
      followers: 0,
      following: 0
    }}
  />
  )
)

storie.add('User Info', () => (
  <Userinfo
    userinfo={{
      username: 'Julio Cesar Rosetim',
      photo: 'https://avatars1.githubusercontent.com/u/33268673?v=4',
      login: 'jrosetim',
      repos: 15,
      followers: 1,
      following: 2
    }}
  />
  )
)
