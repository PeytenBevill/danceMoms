import React from 'react'
import AppHeader from './AppHeader'
import './phone.css'

const Phone: React.FC = () => {
  const calls = [
    {
      num: '(674) 258-0871',
      duration: '01:24:36',
      missed: false,
      date: '3/26/24'
    },
    {
      num: '(800) 475-3300',
      duration: 'missed',
      missed: true,
      date: '3/24/24'
    },
    {
      num: '(800) 772-1213',
      duration: 'missed',
      missed: true,
      date: '3/23/24'
    },
    {
      num: '(987) 654-3210',
      duration: '00:10:45',
      missed: false,
      date: '3/13/24'
    },
    {
      num: '(776) 431-4313',
      duration: '00:32:12',
      missed: false,
      date: '3/10/24'
    },
    {
      num: '(877) 223-4456',
      duration: 'missed',
      missed: true,
      date: '3/10/24'
    },
    {
      num: '(674) 967-0011',
      duration: 'missed',
      missed: true,
      date: '3/5/24'
    },
    {
      num: '(647) 768-0098',
      duration: '00:54:02',
      missed: false,
      date: '3/3/24'
    },
    {
      num: '(513) 776-2384',
      duration: 'missed',
      missed: 'true',
      date: '3/3/24'
    },
    {
      num: '(776) 431-4313',
      duration: '00:15:03',
      missed: false,
      date: '2/25/24'
    },
  ]
  return (
    <>
    <AppHeader />
    <div className='phoneBody'>
      <h1>Recent</h1>
      <section>
        {calls.map((call) => (
          <div className='callCard'>
            <p className={call.missed === false ? '' : 'red'}>{call.num}</p>
            <p className={call.missed === false ? '' : 'red'}>{call.duration}</p>
          </div>
        ))}
      </section>
    </div>
    </>
  )
}

export default Phone