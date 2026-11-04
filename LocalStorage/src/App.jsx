import React from 'react'

// local Storage is kind of browsers memoery

const App = () => {
  localStorage.setItem("name" , "megha")
  localStorage.getItem('name')
  localStorage.clear('name')
  sessionStorage.setItem('key' , 'megha')

  const user = {
    user:'megha',
    age:24,
    city:"faridabad"

  }
  // in localstorge if we have to store object inside the localstroage we have tp store that in string
  localStorage.setItem('user' , JSON.stringify(user))
  localStorage.getItem(JSON.parse('user'))
  return (
    <div>App</div>
  )
}

export default App