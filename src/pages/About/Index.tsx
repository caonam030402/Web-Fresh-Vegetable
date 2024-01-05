import React from 'react'
import AboutUs from './components/AboutUs'
import AboutMe from './components/AboutMe'
import Delviered from './components/Delviered'
import TeamListMember from './components/TeamListMember'

export default function About() {
  return (
    <div className='container'>
      <AboutUs />
      <AboutMe />
      <Delviered />
      <TeamListMember />
    </div>
  )
}
