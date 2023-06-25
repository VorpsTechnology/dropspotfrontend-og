import React from 'react'
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import Footer from '../../components/Footer/Footer'
import './StoreAutherizationAgreement.css'

function StoreAutherizationAgreement() {
  return (
    <div>
      <div> 
    <Navbar/>
    <Shopnavbar/>
    
 <div className='container'>
 <div align='center' className='prihead' > <h4>Store Authorization Agreement
</h4> </div>
  <p style={{ padding:"5px 20px 20px 2px;"  }}>
  You are about to log in and authorize your sales stores with your Dropspot Account. Please read this agreement carefully before clicking to agree to this commitment and letter of authorization. In the process of reading, if you do not agree with this authorization, commitment, or any of the terms and conditions, please do not make any subsequent operations. Please stop logging in or log out immediately. If you click to agree, it means that you have fully read, understood, and accepted all the contents of the letter of authorization and letter of commitment.
  </p>
  <p style={{ padding:"5px 20px 20px 2px;"  }}>
  Whereas Dropspot.in(hereinafter referred to as "Dropspot") has entered the service market and open platform of the sales service platform (hereinafter referred to as "the sales platform"), in order to have access to the products and services to be sold (hereinafter referred to as the "services"), you (individuals or companies) hereby agree and authorize Dropspot and the sales platform as follows:
  </p>
  <p style={{ padding:"5px 20px 20px 2px;"  }}>
  1.When you purchase services from Dropspot, you agree and authorize Dropspot to use the data interface of the open platform to call your sales platform account and the relevant information data of the store or system associated with the account. The scope of the data interface is subject to the service you ordered and the data interface you need to use to have access to Dropspot tools. If you do not agree with the authorization, you may not be able to use Dropspot 's services normally, and Dropspot may also be unable to fully perform the agreement with you. The sales platform will open the data interface based on the minimum principle required by Dropspot services.</p>
  <p style={{ padding:"5px 20px 20px 2px;"  }}>
  The data interfaces that you authorize the sales platform to open to Dropspot include but are not limited to the following:
  <br />
  
<table id="customers">
  <tr>
    <th> Product Scene</th>
    <th>Contents of Authorization</th>
   
  </tr>
  <tr>
    <td>Product Scene</td>
    <td>Products and marketing information</td>
    <td>List, delete, and edit products to stores; Manage stores products.</td>
    
  </tr>
  <tr>
    <td>Transaction Scenario</td>
    <td>
    Orders transaction (desensitization), seller's goods and orders’ information, Consignee transaction information
    </td>
    <td>
    Fulfill and deliver the products after synchronizing the order and consignee information. Send shipping information.
    </td>
    
  </tr>
</table>
  </p>
 
  <p style={{ padding:"5px 20px 20px 2px;"  }}>
  2. When you purchase services from Dropspot, you authorize Dropspot to provide your order information, product price information, downstream platform transaction information, and other data to the sales platform to meet Dropspot’s functions.
  </p>
  <p style={{ padding:"5px 20px 20px 2px;"  }}>
  3. The sales platform is independently responsible for the quality and quality of the sales site and software. If your relevant rights and interests are damaged due to loopholes, flaws, malfunctions, viruses, and other reasons in the sales site or 
  software, you may ask Dropspot to coordinate, but Dropspot shall not be liable for the consequences of your login and use of the sales platform site or software.
  </p>
  <p style={{ padding:"5px 20px 20px 2px;"  }}>
  4. To protect your rights and interests, Dropspot will regularly clear the store data of your sales platform, such as order, shipping address, product information, etc.
  </p>
  <p style={{ padding:"5px 20px 20px 2px;"  }}>
  5. Internet fraud often imitates the style of this login page to create a page with a similar visual sense to lure users to enter account numbers, passwords, and other information. Dropspot reminds you to guard against network risks and not to disclose member account numbers, passwords, and other related information to sites other than the CJ platform or to anyone not a member of the Dropspot platform. Dropspot assumes no responsibility for any loss arising therefrom
  </p>
 </div>

 <Footer/>
    </div>
    </div>
  )
}

export default StoreAutherizationAgreement
