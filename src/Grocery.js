import React, { useState } from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import grocery1 from './images/grocery1.jpg'
import './modicare.css'
import maggi from './images/maggi.jpg'
import yippee from './images/yippee.jpg'
import toordal from './images/toordal.jpg'
import moongmogar from './images/moongmogar.jpg'
import moongchilka from './images/moongchilka.jpg'
import masoordal from './images/masoordal.jpg'
import chanadal from './images/chanadal.jpg'
import kabulichana from './images/kabulichana.jpg'
import desichana from './images/desichana.jpeg'
import rajma from './images/rajma.jpg'
import haldi from './images/haldi.jpg'
import kissanketchup from './images/kissanketchup.jpg'
import dhaniyapowder from './images/dhaniyapowder.jpg'
import neerajketchup from './images/neerajketchup.jpg'
import pushpMirchi from './images/pushpMirchi.jpg'
import hing from './images/hing.jpg'
import jeera from './images/jeera.jpg'
import souf from './images/souf.jpg'
import rai from './images/rai.jpg'
import ajwain from './images/ajwain.jpg'
import kalimirch from './images/kalimirch.jpg'
import loung from './images/loung.jpg'
import dalchini from './images/dalchini.jpg'
import shahjeera from './images/shahjeera.jpg'
import badamFool from './images/badamFool.jpg'
import tezpan from './images/tezpan.jpg'
import badiElaichi from './images/badiElaichi.jpg'
import hariElaichi from './images/hariElaichi.jpg'
import jaifal from './images/jaifal.jpg'
import javitri from './images/javitri.jpg'
import barikSouf from './images/barikSouf.jpg'
import vaseline from './images/vaseline.jpg'
import ponds from './images/ponds.jpg'
import beerShampoo from './images/beerShampoo.jpg'
import doveShampoo from './images/doveShampoo.jpg'
import clinicPlus from './images/clinicPlus.jpg'
import vatikaShampoo from './images/vatikaShampoo.jpg'
import vicks5 from './images/vicks5.jpg'
import vicks25 from './images/vicks25.jpg'
import apbalm from './images/apbalm.jpg'
import zanduBalm from './images/zanduBalm.jpg'
import iodex from './images/iodex.jpg'
import rinSurf from './images/rinSurf.jpg'
import surfExcel from './images/surfExcel.jpg'
import ariel from './images/ariel.jpg'
import ariel10 from './images/ariel10.png'
import sE10 from './images/sE10.jpg'
import tide10 from './images/tide10.jpg'
import jadugar3 from './images/jadugar3.jpg'
import jadugar500 from './images/jadugar500.jpg'
import rin10 from './images/rin10.jpg'
import ghadi10 from './images/ghadi10.jpg'
import wheel10 from './images/wheel10.jpg'
import tideSoap10 from './images/tideSoap10.jpg'
import burhani from './images/burhani.jpg'
import alpine5 from './images/alpine5.jpg'
import alpine10 from './images/alpine10.jpg'
import alpine25 from './images/alpine25.jpg'
import makka from './images/makka.jpg'
import jwar from './images/jwar.jpg'
import gulabjamunMix from './images/gulabjamunMix.png'
import khamanMix from './images/khamanMix.png'
import idliMix from './images/idliMix.png'
import mahakosh5 from './images/mahakosh5.jpeg'
import setWet from './images/setWet.jpg'
import fogg from './images/fogg.jpg'
import wildStone from './images/wildStone.jpg'
import godrej5 from './images/godrej5.jpg'
import cinthol4 from './images/cinthol4.jpg'
import godrej1 from './images/godrej1.jpg'
import detol5 from './images/detol5.jpg'
import santoor4 from './images/santoor4.jpg'
import dove from './images/dove.jpg'
import pears from './images/pears.jpg'
import VivelAloeVera from './images/VivelAloeVera.jpg'
import lifebuoy4 from './images/lifebuoy4.jpg'
import luxSetOf5 from './images/luxSetOf5.jpg'
// import fogg from './images/fogg.jpg'


const options = [
    {
      label: "Health Drinks",
      value: "healthdrinks",
    },
    {
      label: "Cooking Oil",
      value: "cookingoil",
    },
    {
      label: "Biscuits & Snacks",
      value: "biscuits&snacks",
    },
    {
      label: "Tea & Coffee",
      value: "tea&coffee",
    },
    {
        label: "Noodles",
        value: "noodles",
      },
      {
        label: "Beverages",
        value: "beverages",
      },
      {
        label: "Personal Care",
        value: "personalcare",
      },
      {
        label: "Home Essentials",
        value: "homeessentials",
      },
      {
        label: "Spices & Masala",
        value: "spices&masala",
      },
      {
        label: "Pulses & Rice",
        value: "pulses&rice",
      },
      {
        label: "Breakfast Essentials",
        value: "breakfastessentials",
      },
      {
        label: "Flour",
        value: "flour",
      },
  ];

function Grocery() {
    const [category,setCategory]=useState("healthdrinks");
    const handleChange=(e)=> {
        // console.log(e.target.value)        
        setCategory(e.target.value);
   
      }

    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Groceries by Mahadev General Store
        </div>
        {/* <marquee>Groceries will be delivered on the next day of order placing..</marquee> */}
        <marquee>This Store is under build.</marquee>
        <center><select className="selectModicare" value={category} onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select></center>
        
        {(category==="healthdrinks")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="cookingoil")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Mahakosh Oil (5 litre)" 
            price={640} 
            image={mahakosh5}/>
            {/* <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/> */}
            
        </div>
        </>:""}
        {(category==="biscuits&snacks")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="tea&coffee")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="noodles")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Maggi" 
            price={12} 
            image={maggi}/>
            <Product 
            id="975272"
            title="Yippee" 
            price={10} 
            image={yippee}/>
            
        </div>
        </>:""}
        {(category==="beverages")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="personalcare")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Fogg Deo" 
            price={200} 
            image={fogg}/>
            <Product 
            id="975272"
            title="Wild Stone Deo" 
            price={200} 
            image={wildStone}/>
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Set Wet Deo" 
            price={200} 
            image={setWet}/>
            {/* <Product 
            id="975272"
            title="Ponds Lotion" 
            price={200} 
            image={ponds}/> */}
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Vaseline Lotion (400ml)" 
            price={260} 
            image={vaseline}/>
            <Product 
            id="975272"
            title="Ponds Lotion" 
            price={200} 
            image={ponds}/>
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Beer Shampoo" 
            price={40} 
            image={beerShampoo}/>
            <Product 
            id="975272"
            title="Dove Shampoo" 
            price={50} 
            image={doveShampoo}/>
            </div>
            <div className="shop_row">
            <Product 
            id="975271" 
            title="Clinic Plus Shampoo" 
            price={45} 
            image={clinicPlus}/>
            <Product 
            id="975272"
            title="Vatika Shampoo" 
            price={30} 
            image={vatikaShampoo}/>
            </div>
            {/* Soaps */}
            <div className="shop_row">
            <Product 
            id="975271" 
            title="Dove Soap" 
            price={20} 
            image={dove}/>
            <Product 
            id="975272"
            title="Dettol Soap (set of 5)" 
            price={200} 
            image={detol5}/>
            </div>
            <div className="shop_row">
            <Product 
            id="975271" 
            title="Lifebuoy soap (set of 4)" 
            price={80} 
            image={lifebuoy4}/>
            <Product 
            id="975272"
            title="Pears Soap" 
            price={20} 
            image={pears}/>
            </div>
            <div className="shop_row">
            <Product 
            id="975271" 
            title="Santoor soap (set of 4)" 
            price={90} 
            image={santoor4}/>
            <Product 
            id="975272"
            title="Vivel alovera soap (set of 5)" 
            price={95} 
            image={VivelAloeVera}/>
            </div>
            <div className="shop_row">
            <Product 
            id="975271" 
            title="Lux soap (set of 5)" 
            price={100} 
            image={luxSetOf5}/>
            <Product 
            id="975272"
            title="Cinthol soap (set of 4)" 
            price={80} 
            image={cinthol4}/>
            </div>
            <div className="shop_row">
            <Product 
            id="975271" 
            title="Godrej no. 1 (set of 5)" 
            price={70} 
            image={godrej5}/>
            <Product 
            id="975272"
            title="Godrej shikakai soap" 
            price={20} 
            image={godrej1}/>
            </div>

            {/* Balms */}
            <div className="shop_row">
            <Product 
            id="975271" 
            title="Vicks (5gm)" 
            price={20} 
            image={vicks5}/>
            <Product 
            id="975272"
            title="Vicks (25gm)" 
            price={80} 
            image={vicks25}/>
            </div>
            <div className="shop_row">
            <Product 
            id="975271" 
            title="AP Special Balm" 
            price={30} 
            image={apbalm}/>
            <Product 
            id="975272"
            title="Zandu Balm" 
            price={38} 
            image={zanduBalm}/>
            </div>
            <div className="shop_row">
            <Product 
            id="975271" 
            title="Iodex Balm" 
            price={38} 
            image={iodex}/>
            <Product 
            id="975272"
            title="Zandu Balm" 
            price={38} 
            image={zanduBalm}/>
            </div>
        </>:""}
        {(category==="homeessentials")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Rin Surf (500gm)" 
            price={39} 
            image={rinSurf}/>
            <Product 
            id="975272"
            title="Surf Excel (500gm)" 
            price={50} 
            image={surfExcel}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Ariel (500gm)" 
            price={56} 
            image={ariel}/>
            <Product 
            id="975272"
            title="Surf Excel" 
            price={10} 
            image={sE10}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Ariel" 
            price={10} 
            image={ariel10}/>
            <Product 
            id="975272"
            title="Tide" 
            price={10} 
            image={tide10}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Jadugar Guarantee (3Kg)" 
            price={110} 
            image={jadugar3}/>
            <Product 
            id="975272"
            title="Jadugar Guarantee (500gm)" 
            price={35} 
            image={jadugar500}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Rin Soap" 
            price={10} 
            image={rin10}/>
            <Product 
            id="975272"
            title="Ghadi Soap" 
            price={10} 
            image={ghadi10}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Wheel Soap" 
            price={10} 
            image={wheel10}/>
            <Product 
            id="975272"
            title="Tide Soap" 
            price={10} 
            image={tideSoap10}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Burhani Liquid Soap Material " 
            price={70} 
            image={burhani}/>
            <Product 
            id="975272"
            title="Tide Soap" 
            price={10} 
            image={tideSoap10}/>
            
        </div>
        </>:""}
        {(category==="spices&masala")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Pushp Haldi (500gm)" 
            price={100} 
            image={haldi}/>
            <Product 
            id="975272"
            title="Pushp Dhaniya powder (500gm)" 
            price={90} 
            image={dhaniyapowder}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Pushp Mirchi (500gm)" 
            price={140} 
            image={pushpMirchi}/>
            <Product 
            id="975272"
            title="Pushp Hing (10gm)" 
            price={45} 
            image={hing}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Jeera (100gm)" 
            price={25} 
            image={jeera}/>
            <Product 
            id="975272"
            title="Souf (100gm)" 
            price={15} 
            image={souf}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Rai (100gm)" 
            price={9} 
            image={rai}/>
            <Product 
            id="975272"
            title="Ajwain (100gm)" 
            price={20} 
            image={ajwain}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Kali Mirch (100gm)" 
            price={50} 
            image={kalimirch}/>
            <Product 
            id="975272"
            title="Loung (100gm)" 
            price={100} 
            image={loung}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Dalchini (100gm)" 
            price={40} 
            image={dalchini}/>
            <Product 
            id="975272"
            title="Shahjeera (100gm)" 
            price={80} 
            image={shahjeera}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="BadamFool (100gm)" 
            price={10} 
            image={badamFool}/>
            <Product 
            id="975272"
            title="Tezpan (100gm)" 
            price={20} 
            image={tezpan}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Badi Elaichi (100gm)" 
            price={100} 
            image={badiElaichi}/>
            <Product 
            id="975272"
            title="Hari Elaichi (100gm)" 
            price={300} 
            image={hariElaichi}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Jaifal (per piece)" 
            price={5} 
            image={jaifal}/>
            <Product 
            id="975272"
            title="Javitri (100gm)" 
            price={400} 
            image={javitri}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Barik Souf (100gm)" 
            price={20} 
            image={barikSouf}/>
            
        </div>
        </>:""}
        {(category==="pulses&rice")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Toor Dal (1Kg)" 
            price={110} 
            image={toordal}/>
            <Product 
            id="975272"
            title="Moong Mogar (1Kg)" 
            price={110} 
            image={moongmogar}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Masoor Dal (1Kg)" 
            price={110} 
            image={masoordal}/>
            <Product 
            id="975272"
            title="Chana Dal (1Kg)" 
            price={70} 
            image={chanadal}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Moong Chilka (1Kg)" 
            price={95} 
            image={moongchilka}/>
            <Product 
            id="975272"
            title="Kabuli Chana (1Kg)" 
            price={100} 
            image={kabulichana}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Desi Chana (1Kg)" 
            price={90} 
            image={desichana}/>
            <Product 
            id="975272"
            title="Rajma (1Kg)" 
            price={140} 
            image={rajma}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Moong Chilka (1Kg)" 
            price={95} 
            image={moongchilka}/>
            <Product 
            id="975272"
            title="Kabuli Chana (1Kg)" 
            price={100} 
            image={kabulichana}/>
            
        </div>
        </>:""}
        {(category==="breakfastessentials")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Kissan Ketchup (1kg)" 
            price={125} 
            image={kissanketchup}/>
            <Product 
            id="975272"
            title="Neeraj Ketchup (1kg)" 
            price={75} 
            image={neerajketchup}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Khaman Mix Gangwal (500gm)" 
            price={70} 
            image={khamanMix}/>
            <Product 
            id="975272"
            title="Idli Mix Gangwal (500gm)" 
            price={70} 
            image={idliMix}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="420 Gulabjamun Mix (200gm)" 
            price={70} 
            image={gulabjamunMix}/>
            {/* <Product 
            id="975272"
            title="" 
            price={75} 
            image={neerajketchup}/>
             */}
        </div>
        </>:""}
        {(category==="flour")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Alpine Aata 5kg" 
            price={140} 
            image={alpine5}/>
            <Product 
            id="975272"
            title="Alpine Aata 10kg" 
            price={270} 
            image={alpine10}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Alpine Aata 25kg" 
            price={600} 
            image={alpine25}/>
            <Product 
            id="975272"
            title="Makka Aata (1kg)" 
            price={40} 
            image={makka}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Jowar Aata (1kg)" 
            price={80} 
            image={jwar}/>
            {/* <Product 
            id="975272"
            title="Alpine Aata 10kg" 
            price={750} 
            image={grocery1}/> */}
            
        </div>
        </>:""}

        
    </div>
    </>

    )
}

export default Grocery
