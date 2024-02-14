import '../styles/notFound.css'

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <h1 className='text404'>404</h1>
      <p className='err-msg'>Oops! Something is wrong.</p>
      <a className="button" href= "/">Go back in initial page, is better.</a>
    </div>
  )
}

export default NotFound