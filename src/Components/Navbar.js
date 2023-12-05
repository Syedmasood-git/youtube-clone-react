import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='search-div'>
            <form>
                <input className='inp' type='text'></input>
                <button className='search-btn'><img alt='' src='https://syedmasood-git.github.io/Youtube-Clone/Assets/search.svg'></img></button>
            </form>
      </div>
    </div>
  )
}

export default Navbar
