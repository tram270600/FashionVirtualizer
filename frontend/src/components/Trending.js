import React, {useState} from 'react'
import '../styles/trending.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function Trending() {

    const [name, setName] = useState('Ubyie._');
    const [prodname, setProdname] = useState("Product's Name");
    const [description, setDecription] = useState('Description of product');
    const [price, setPrice] = useState('300.000 VND');

    
    return (
      <div className=" trend"><h1>Trending Items</h1>
       <div className ="contenttrend">Pick one to buy or saved it to your collection for later Mix n Match</div>
        <div className="ProdCard1">
            <div className="prodimage1">
              <img src={process.env.PUBLIC_URL + `/Images/product.png`} alt="" height="434px" width="400px"/>
            </div>
                <div className="avatar">
                 <img src={process.env.PUBLIC_URL + `/Images/avatar.jpg`}  alt="" height="50px" width="50px"/>
                </div>
            <div className="detailbox1">
                <p>{name}</p>
                <h3>View profile</h3>
                <h4>{ prodname }</h4>
                
                <h5>{ description }</h5>
                <h6>{ price }</h6>
                <button>Collect</button>
                </div>
            <div class="view_Item1"><button><ArrowForwardIcon style={{ fill: '#025588'}}/></button></div>
        </div>
        
        <div className="ProdCard_2">
            <div className="prodimage2">
              <img src={process.env.PUBLIC_URL + `/Images/product.png`} alt="" height="434px" width="400px"/>
            </div>
                <div className="avatar">
                 <img src={process.env.PUBLIC_URL + `/Images/avatar.jpg`}  alt="" height="50px" width="50px"/>
                </div>
            <div className="detailbox2">
                <p>{name}</p>
                <h3>View profile</h3>
                <h4>{ prodname }</h4>

                <h5>{ description }</h5>
                <h6>{ price }</h6>
                <button>Collect</button>
            </div>
            <div class="view_Item2"><button><ArrowForwardIcon style={{ fill: '#025588'}}/></button></div>
           
        </div>
        <div className="ProdCard3">
            <div className="prodimage3">
              <img src={process.env.PUBLIC_URL + `/Images/product.png`} alt="" height="434px" width="400px"/>
            </div>
                <div className="avatar">
                 <img src={process.env.PUBLIC_URL + `/Images/avatar.jpg`}  alt="" height="50px" width="50px"/>
                </div>
            <div className="detailbox3">
                <p>{name}</p>
                
                <h3>View profile</h3>
                
                <h4>{ prodname }</h4>
                
                <h5>{ description }</h5>
                <h6>{ price }</h6>
                <button>Collect</button>    
            </div>
            <div class="view_Item3"><button><ArrowForwardIcon style={{ fill: '#025588'}}/></button></div>
        </div>
     </div>     
    )
}

export default Trending
