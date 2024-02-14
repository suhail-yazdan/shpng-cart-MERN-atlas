import '../styles/navBar.css'

const Navbar = () => {
  return (
    <div className='w-100 nav-container bg-secondary-subtle position-fixed'>
        <div className='container mx-auto h-100 d-flex justify-content-between align-items-center '>
          <h4 className='appName m-0 p-0'><a href= "/">Shopping Cart</a></h4>
             
          <ul className='links d-flex justify-content-start m-0 p-0 list-unstyled'>
              <li className='nav-item mx-2'>
                  <a href="/offers" className='nav-link'>Offers</a>
              </li>
              <li className='nav-item mx-2'>
                  <a href="/account" className='nav-link'>My Account</a>
              </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar