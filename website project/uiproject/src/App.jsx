import React from 'react'
import Section01 from './section01/Section01'
import Section02 from './section02/section02'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1628102162550-34b6d12c341e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      tag: 'Underserved',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1783318940411-4943eb27c3d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      tag: 'Underserved',
    },
  ]
  return (
    <div >
      <Section01  user={users} />
      <Section02 />
    </div>
  )
}

export default App