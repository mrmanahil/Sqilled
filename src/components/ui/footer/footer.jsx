import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.css';

const Footer = (props) => {

  return (
    <footer>
 <div className="footer_top">
  <div className="container">
  <div className="row">
   <div className="col-sm-4 logo_footer">
     <div className="footer_box">
       <h3>Sqilled</h3>
       <p>Lorem Ipsum is simply dummy text of the printing</p>
     </div>
   </div>
   <div className="col-sm-4">
     <div className="footer_box">
       <h3>Links</h3>
       <ul>
         <li><a href="/terms">Terms & Conditions</a></li>
         <li><a href="/privacy">Privacy Policy</a></li>
         <li><a href="/contact">Contact</a></li>
       </ul>
     </div>
   </div>
   <div className="col-sm-4">
     <div className="footer_box">
       <h3>Social Links</h3>
       <ul className="social-icons">
         {/* <li>
           <a href="#"><i className="lab la-facebook-f"></i></a>
         </li>
         <li>
           <a href="#"><i className="lab la-twitter"></i></a>
         </li>
         <li>
           <a href="#"><i className="lab la-instagram"></i></a>
         </li> */}
         <li>
          <a href="#"><i className="lab la-linkedin-in"></i></a>
         </li>
       </ul>
     </div>
   </div>
 </div>
</div>
</div>
<div className="footer-bottom">
  <p>Copyrights &copy; all Reserved</p>
</div>
</footer>

  );
};


export default withStyles(styles)(Footer);
