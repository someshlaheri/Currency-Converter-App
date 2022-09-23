import React from 'react'
import Heading from './ContainerHeader/Heading'
import ChildContainer from './ContainerBody/ChildContainer'
import './MainContainer.css'

const MainContainer = () => {

  return (
    <>
      <div className="container">
        <Heading/>
        <ChildContainer/>
      </div>
      {/* About divison */}
      <div className='aboutDiv'>
        <p style={{textTransform:"none"}}>Developed by Somesh Laheri</p>
      </div>
      {/* Social Media Links */}
      <div class="wrapper">

         <a className='facebook' href='https://www.facebook.com/profile.php?id=100008163376297' target="_blank" rel="noreferrer">
         <div class="button">
            <div class="icon">
               <i class="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div>
         </a>

        <a className='twitter' href='https://twitter.com/SOMESHLAHERI' target="_blank" rel="noreferrer">
        <div class="button">
            <div class="icon">
               <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
        </a>

        <a className='instagram' href='https://www.instagram.com/someshlaheri' target="_blank" rel="noreferrer">
        <div class="button">
            <div class="icon">
               <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
        </a>

        <a className='github' href='https://github.com/someshlaheri' target="_blank" rel="noreferrer">
        <div class="button">
            <div class="icon">
               <i class="fab fa-github"></i>
            </div>
            <span>GitHub</span>
         </div>
        </a>

        <a className='linkedin' href='https://www.linkedin.com/in/somesh-laheri-85b36817b/' target="_blank" rel="noreferrer">
          <div class="button">
              <div class="icon">
                <i class="fab fa-linkedin"></i>
              </div>
              <span>LinkedIn</span>
          </div>
        </a>
      </div>
    </>
  )
}

export default MainContainer