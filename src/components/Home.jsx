import React from 'react'
import Explore from './Explore'
import Category from './Category'
import Products from './Products'
import Special from './Special'
import Benefits from './Benefits'
import Testimonials from './Testimonials'
import Subscribe from './Subscribe'


const Home = () => {

    
  return (
    <section className='home'>
       <Explore />
       <Category />
       <Products />
       <Special />
       <Benefits />
       <Testimonials />
       <Subscribe />
    </section>
  )
}

export default Home