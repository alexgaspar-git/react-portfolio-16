import React from 'react'

export default function Footerr() {
    return (
      <footer>
        <div className='foot1'>
          <span className='init'>AG<span className='poin'>.</span></span>
        </div>
        <div className='foot2 row'>
          <div className='col-3 footcol'>
            <h5>About Me</h5>
            <a  href=''>Address</a>
            <a href=''>About</a>
            <a href=''>Contact </a>
          </div>
          <div className='col-3 footcol'>
            <h5>Social</h5>
            <a href=''>Community</a>
            <a href=''>Github</a>
            <a href=''>Twitter</a>
            <a href=''>Facebook</a>
          </div>
          <div className='col-6 footcol'>
            <h5>Newsletter</h5>
            <p>We handpicked the most interesting content for you. No spam. It takes one click to unsubscribe. Give it a try!</p>
            <div className='footInput'>
              <input type="text"/>
              <button type="button" class="btn btn-light">Send</button>
            </div>
          </div>
        </div>
        <hr/>
        <div className='foot3 text-center'>
          <p>Copyright @2021 All right reserved | by <span>CodingSchool</span></p>
        </div>
      </footer>
    );
}
