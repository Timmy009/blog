import React from 'react'
import background from '../assets/background-one.png'
import logo from '../assets/logo.png'
import search from '../assets/search.png'

function Home() {
  return (
    <div style={{overflow: 'hidden', marginTop:-60}} >
    
     <div style={{backgroundImage:`url(${background})`, width:1350, height:600, padding:60, paddingRight:100 }} >
     <div style={{margin:50, display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
      <div  >
       <img src={logo} style={{width:150, height:40}} />
       </div>
       <div style={{marginRight:100}} >
       <img src={search} />
       <input placeholder='Search' type="text" style={{width:90, height:90}} />
       </div>
     </div>
     </div>
    </div>
  )
}

export default Home
