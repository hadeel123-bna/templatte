import React from 'react'
import './header.css'
const Header = () => {
  return (
<header>
    <div className='container'>
    <div className="row">
        <div className="col-lg-12"> 
            <h2>What is Lorem Ipsum?</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <form>
                <input className='a' type="email" placeholder='Welcome enter your email please' id="email" required/>
                <button type='submit' >Subscribe</button>
            </form>

        </div>
    </div>
</div>

</header>  )
}

export default Header