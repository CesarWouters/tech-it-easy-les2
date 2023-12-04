import './App.css';
import amountSold, {amountBought, amountInStock} from "./Helpers/stock.js";
import getName, {numberToCurrency, sizesAvailable} from "./Helpers/specifics.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import minus from './assets/minus.png';
import check from './assets/check.png';
import specsIncluded from "./Helpers/specsIncluded.js";


function App() {
  return (
    <>
     <h1>Tech it easy dashboard</h1>
      <h2>Verkoopoverzicht</h2>
        <article className="outerBox">
        <p className="sold"> Aantal verkochte producten <br/><br/>{amountSold()}</p>
        <p className="bought">Aantal ingekochte producten <br/><br/>{amountBought()}</p>
        <p className="stock">Aantal te verkopen producten <br/><br/>{amountInStock()}</p>
        </article>

        <h2>Best verkochte tv</h2>

      <article className="outerBox2">
          <div className="tvImage">
          <img src={bestSellingTv.sourceImg} alt="samsung crystal tv"/>
          </div>
        <div className="innerBox2">
          <h3>{getName(bestSellingTv)}</h3>
          <h4>{numberToCurrency(bestSellingTv.price)}</h4>
          <h5>{sizesAvailable(bestSellingTv)}</h5>

          <ul className="specs">
              <li className="icons"><img src={check} alt="yes"/>wifi</li>

              <li className="icons"><img src={minus} alt="no"/>speech</li>

              <li className="icons"><img src={check} alt="yes"/>hdr</li>

              <li className="icons"><img src={check} alt="yes"/>bluetooth</li>

              <li className="icons"><img src={minus} alt="no"/>ambilight</li>
          </ul>
        </div>
      </article>

        <h2>All televisions</h2>
  <div className="buttons">
<button>Meest verkocht eerst</button>
<button>Goedkoopste eerst</button>
<button>Meest geschikt voor sport eerst</button>
  </div>

        {inventory.map((television)=>{

            return <article key={television.type} className="outerBox2">
                <div className="tvImage">
                    <img src={television.sourceImg} alt="samsung crystal tv"/>
                </div>
                <div className="innerBox2">
                    <h3>{getName(television)}</h3>
                    <h4>{numberToCurrency(television.price)}</h4>
                    <h5>{sizesAvailable(television)}</h5>
                    <p>{specsIncluded(television)}</p>
                    {/*map door options list true of false*/}
                </div>
            </article>
        })};

        </>
  )
}

export default App
