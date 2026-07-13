import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Saloni Gupta" img='https://images.unsplash.com/photo-1782174177406-d36704027953?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' />
      <Card user='Shivani Gupta'  img='https://plus.unsplash.com/premium_photo-1692641346414-02a56f346626?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' />
      <Card user= 'Srishti Gupta' img='https://images.unsplash.com/photo-1782307260494-1b1c80a16d60?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App