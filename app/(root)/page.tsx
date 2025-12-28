import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn ={firstName:'Megane',lastName:'Shinaida' ,email:'stemfackngintedem@gmial.com'}
  return (
    <section  className='home '>
     <div className="home-component">
      <header className="home-header">
     
        <HeaderBox
        type = "greeting"
        title="Welcome"
        user={loggedIn?.firstName || 'Guest'}
        subtext="Access and manage your account and transactions efficiently"
        />
        <TotalBalanceBox
        account={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        />
      </header>
      RECENT TRANSACTIONS
     </div>
     <RightSidebar  
     user={loggedIn}
     transations={[]}
     banks={[{currentBalance:123.50},{currentBalance:500.50}]}
     />
    </section>
  )
}

export default Home
