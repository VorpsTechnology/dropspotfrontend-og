import React from 'react';

function Dashboardfooter() {
  return (
    <div className='footer pt-3' style={{bottom:'0',zIndex:'100'}}>
      <div className='conntainer-fluid'>
        <div className='row align-items-center justify-content-lg-between'>
            <div className='col-lg-6'>
                <div className='copyright text-center text-sm text-muted text-lg-start'>
                    © &nbsp;&nbsp;
                <script>
                  document.write(new Date().getFullYear()) 
                </script>
                2023,made with &nbsp;&nbsp;
                <i class="fa fa-heart" aria-hidden="true"></i>
                &nbsp;&nbsp; "by" &nbsp;&nbsp;
                <a href="https://vorpstech.com/" class="font-weight-bold" target="_blank" style={{color:'rgba(253, 227, 26, 1)'}}>vorpstechnologies</a>
                
                &nbsp;&nbsp; for a better web. &nbsp;&nbsp;


                </div>

            </div>
            <div className='col-lg-6 '>
            <ul className='nav nav-footer justify-content-center justify-content-lg-end'>
            <li className='nav'>
                <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Term & Conditions</a>
                </li>
                <li className='nav'>
                <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">About US</a>
                </li>
                <li className='nav'>
                <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Contact US</a>
                </li> 
                <li className='nav'>
                <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Privacy Policy</a>
                </li> 
            </ul>
              
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardfooter;
