import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn ={firstName:'Megane'}
  return (
    <section  className='home '>
     <div className="home-component">
      <header className="home-header">
     
        <HeaderBox
        type = "greeting"
        title="Welcome"
        user={loggedIn?.firstName || 'Guest'}
        subtext="Access and manage your account snd transactions efficientls"
        />
        <TotalBalanceBox
        account={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        />
      </header>
     </div>
    </section>
  )
}

export default Home
