import React, { useState } from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import modicare from './images/modicare.png'

import './modicare.css'
import mc1 from './images/mc1.jpg'
import mc2 from './images/mc2.jpg'
import mc3 from './images/mc3.jpg'
import mc4 from './images/mc4.jpg'
import mc5 from './images/mc5.jpg'
import mc6 from './images/mc6.jpg'
import mc7 from './images/mc7.jpg'
import mc8 from './images/mc8.jpg'
import mc9 from './images/mc9.jpg'
import mc10 from './images/mc10.jpg'
import mc11 from './images/mc11.jpg'
import mc12 from './images/mc12.jpg'
import mc13 from './images/mc13.jpg'
import mc14 from './images/mc14.jpg'
import mc15 from './images/mc15.jpg'
import mc16 from './images/mc16.jpg'
import mc17 from './images/mc17.jpg'
import mc18 from './images/mc18.jpg'
import mc19 from './images/mc19.jpg'
import mc20 from './images/mc20.jpg'
import mc21 from './images/mc21.jpg'
import mc22 from './images/mc22.jpg'
import mc23 from './images/mc23.jpg'
import mc24 from './images/mc24.jpg'
import mc25 from './images/mc25.jpg'
import mc26 from './images/mc26.jpg'
import mc27 from './images/mc27.jpg'
import mc28 from './images/mc28.jpg'
import mc29 from './images/mc29.jpg'
import mc30 from './images/mc30.jpg'
import mc31 from './images/mc31.jpg'
import mcw1 from './images/mcw1.jpg'
import mcw2 from './images/mcw2.jpg'
import mcw3 from './images/mcw3.jpg'
import mcw4 from './images/mcw4.jpg'
import mcw5 from './images/mcw5.jpg'
import mcw6 from './images/mcw6.jpg'
import mcw7 from './images/mcw7.jpg'
import mcw8 from './images/mcw8.jpg'
import mcw9 from './images/mcw9.jpg'
import mcw10 from './images/mcw10.jpg'
import mcw11 from './images/mcw11.jpg'
import mch1 from './images/mch1.jpg'
import mch2 from './images/mch2.jpg'
import mch3 from './images/mch3.jpeg'
import mch4 from './images/mch4.jpg'
import mch5 from './images/mch5.jpg'
import mch6 from './images/mch6.jpg'
import mch7 from './images/mch7.jpg'
import mch8 from './images/mch8.jpg'
import mch9 from './images/mch9.jpg'
import mch10 from './images/mch10.jpg'
import mch11 from './images/mch11.jpg'
import mch12 from './images/mch12.jpg'
import mch13 from './images/mch13.jpg'
import mch14 from './images/mch14.jpg'
import mch15 from './images/mch15.jpg'
import mch16 from './images/mch16.jpg'
import mch17 from './images/mch17.jpg'
import mch18 from './images/mch18.jpg'
import mch19 from './images/mch19.jpg'
import mch20 from './images/mch20.jpg'
import mch21 from './images/mch21.jpg'
import mch22 from './images/mch22.jpg'
import mch23 from './images/mch23.jpg'
import mch24 from './images/mch24.jpg'
import mch25 from './images/mch25.jpg'
import mch26 from './images/mch26.jpg'
import mch27 from './images/mch27.jpg'
import mch28 from './images/mch28.jpg'
import mch29 from './images/mch29.jpg'
import mch30 from './images/mch30.jpg'
import mch31 from './images/mch31.jpg'
import mch32 from './images/mch32.jpg'
import mch33 from './images/mch33.jpg'
import mch34 from './images/mch34.jpg'
import mch35 from './images/mch35.jpg'
import mch36 from './images/mch36.jpg'
import mch37 from './images/mch37.jpg'
import mch38 from './images/mch38.jpg'
import mch39 from './images/mch39.jpg'
import mch40 from './images/mch40.jpg'
import mch41 from './images/mch41.jpeg'
import mch42 from './images/mch42.png'
import mch43 from './images/mch43.jpeg'
import mch44 from './images/mch44.jpg'
import mch45 from './images/mch45.jpg'
import mch46 from './images/mch46.jpg'
import mch47 from './images/mch47.jpg'
import mch48 from './images/mch48.jpg'
import mch49 from './images/mch49.jpg'
import mch50 from './images/mch50.jpg'
import mch51 from './images/mch51.jpg'
import mch52 from './images/mch52.jpg'
import mch53 from './images/mch53.jpg'
import mcc1 from './images/mcc1.jpg'
import mcc2 from './images/mcc2.jpg'

const options = [
    {
      label: "Skin Care",
      value: "skincare",
    },
    {
      label: "Home Care",
      value: "homecare",
    },
    {
      label: "Colors",
      value: "colors",
    },
    {
      label: "Watches",
      value: "watches",
    },
  ];
  

function Modicare() {
    const [category,setCategory]=useState("skincare");
    const handleChange=(e)=> {
        // console.log(e.target.value)        
        setCategory(e.target.value);
   
      }
    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Modicare
        </div>
        <marquee>Get 20% discount on becoming a consultant..Delivery will be done within 7 days of order placing!</marquee>
        
        <center><select className="selectModicare" value={category} onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select></center>

        {(category==="skincare")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="FOTE CLEANSING GEL WITH APRICOT & TEA TREE OIL (PH BALANCED) 100 ML" 
            price={275} 
            image={mc1}/>
            <Product 
            id="975272"
            title="FOTE CLEANSING GEL WITH APRICOT & TEA TREE OIL (PH BALANCED) 150 ML" 
            price={347} 
            image={mc2}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="FOTE FACE PACK WITH NEEM & ROSEMARY (SENSITIVE & ACNE PRONE SKIN) 100 ML" 
            price={270} 
            image={mc3}/>
        <Product 
            id="975274"
            title="FOTE FACE PACK WITH NEEM & ROSEMARY (SENSITIVE & ACNE PRONE SKIN) 150 ML" 
            price={365} 
            image={mc4}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="FOTE FAIRNESS GEL WITH LIQUORICE & ALOE VERA (SPF14) 100 ML" 
            price={250} 
            image={mc5}/>
        <Product 
            id="975274"
            title="FOTE FAIRNESS GEL WITH LIQUORICE & ALOE VERA (SPF14) 150 ML" 
            price={316} 
            image={mc6}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="Fruit of earth red obsession hydra nourish scrub" 
            price={399} 
            image={mc7}/>
        <Product 
            id="975274"
            title="FRUIT OF THE EARTH CALMING WHITES" 
            price={599} 
            image={mc8}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="FRUIT OF THE EARTH MOOR MUD FACIAL BAR (25GX4)" 
            price={325} 
            image={mc9}/>
        <Product 
            id="975274"
            title="FRUIT OF THE EARTH PURIFYING MOOR MUD MASK (WITH ACTIVATED CHARCOL & HIJIKI EXTRACT)" 
            price={500} 
            image={mc10}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="FRUIT OF THE EARTH RED OBSESSION - HYDRA NOURISH CREAM" 
            price={399} 
            image={mc11}/>
        <Product 
            id="975274"
            title="FRUIT OF THE EARTH RED OBSESSION - HYDRA NOURISH MASK" 
            price={399} 
            image={mc12}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="FRUIT OF THE EARTH RED OBSESSION" 
            price={599} 
            image={mc13}/>
        <Product 
            id="975274"
            title="FRUIT OF THE EARTH-BLOOMS OF EDEN" 
            price={599} 
            image={mc14}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SCHLOKA 3 IN 1 CLEANSER, TONER AND MAKE UP REMOVER WITH GREEN TEA & CHAMOMILE EXTRA 200ML)" 
            price={315} 
            image={mc15}/>
        <Product 
            id="975274"
            title="SCHLOKA ANTI AGEING NIGHT CREAM WITH COLLAGEN AND VITAMIN E (50 ML)" 
            price={255} 
            image={mc16}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SCHLOKA AVOCADO FACE SCRUB WITH OATMEAL & NEROLI (60 ML)" 
            price={280} 
            image={mc17}/>
        <Product 
            id="975274"
            title="SCHLOKA BODY BUTTER WITH SHEA BUTTER AND ALMOND OIL (100 ML)" 
            price={320} 
            image={mc18}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SCHLOKA D TAN FACE PACK WITH TULSI & CLOVE (60ML)" 
            price={195} 
            image={mc19}/>
        <Product 
            id="975274"
            title="SCHLOKA FAIRNESS CREAM WITH ROSE & HONEY (50ML)" 
            price={260} 
            image={mc20}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SCHLOKA GLOW FACE PACK WITH ORANGE PEEL AND WHITE CLAY (60 ML)" 
            price={224} 
            image={mc21}/>
        <Product 
            id="975274"
            title="SCHLOKA HYDRA - NOURISH FACIAL CREAM WITH SHEA BUTTER, ALMOND & OLIVE OIL (100 ML)" 
            price={317} 
            image={mc22}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SCHLOKA HYDRATING PAPAYA & HIBISCUS MOISTURIZER (100 ML)" 
            price={263} 
            image={mc23}/>
        <Product 
            id="975274"
            title="SCHLOKA MOROCCAN ARGAN OIL CLEANSER (200 ML)" 
            price={445} 
            image={mc24}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SCHLOKA MOROCCAN ARGAN OIL SCRUB (60 ML)" 
            price={219} 
            image={mc25}/>
        <Product 
            id="975274"
            title="SCHLOKA PURIFYING NEEM & GOTUKOLA FACE WASH (60 ML)" 
            price={198} 
            image={mc26}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SCHLOKA REJUVENATING DAY CREAM WITH ALMOND & LAVENDER (50 ML)" 
            price={265} 
            image={mc27}/>
        <Product 
            id="975274"
            title="SCHLOKA SUN SCREEN CREAM SPF 30 PA+++ WITH GOTUKOLA & CUCUMBER (60 ML)" 
            price={265} 
            image={mc28}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SCHLOKA SUN SCREEN CREAM SPF 50 PA+++ WITH VITAMIN E & COMFREY (60 ML)" 
            price={325} 
            image={mc29}/>
        <Product 
            id="975274"
            title="SCHLOKA UNDER EYE CREAM WITH ASHWAGANDHA & GOTUKOLA (20 ML)" 
            price={164} 
            image={mc30}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SCHLOKA WHITENING CREAM WITH LEMON AND TURMERIC (50 ML)" 
            price={270} 
            image={mc31}/>
        {/* <Product 
            id="975274"
            title=""    
            price={240} 
            image={modicare}/> */}
                 </div>
        </>:""}

            {(category==="homecare")?<>
            <div className="shop_row">
            <Product 
            id="975271" 
            title="FRUVEG FRUIT AND VEGETABLE WASH" 
            price={288} 
            image={mcc1}/>
            <Product 
            id="975272"
            title="GERMI BUST MULTI-SURFACE DISINFECTANT SPRAY" 
            price={270} 
            image={mcc2}/>
            
        </div>
            </>:""}
            {(category==="colors")?<>
            <div className="shop_row">
            <Product 
            id="975271" 
            title="BB CREAM" 
            price={495} 
            image={mch1}/>
            <Product 
            id="975272"
            title="GO GLOW 3 IN 1 CLEANSER, MAKEUP REMOVER & HYDRATOR" 
            price={799} 
            image={mch2}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="HIGH DEFINITION EYELINER" 
            price={630} 
            image={mch3}/>
            <Product 
            id="975272"
            title="INFINITE WHITE UV FAIRNESS PRESSED POWDER WITH SPF 18" 
            price={425} 
            image={mch4}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="PRO QUICK DRY NAIL LACQUER" 
            price={140} 
            image={mch5}/>
            <Product 
            id="975272"
            title="PRO WHITE ANTI – WRINKLE & NOURISHING SHEET MASK WITH COLLAGEN" 
            price={199} 
            image={mch6}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="PRO WHITE SUPER SOOTHING & ANTI – AGEING SHEET MASK WITH ALOE" 
            price={199} 
            image={mch7}/>
            <Product 
            id="975272"
            title="SHAPE UP CRYSTAL NAIL FILER – BLACK" 
            price={175} 
            image={mch8}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="SHAPE UP CRYSTAL NAIL FILER – PINK" 
            price={175} 
            image={mch9}/>
            <Product 
            id="975272"
            title="SINDOOR - REAL MAROON" 
            price={120} 
            image={mch10}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="SINDOOR - REAL RED" 
            price={120} 
            image={mch11}/>
            <Product 
            id="975272"
            title="SUPER MATTE 16HRS STAY EYE LINER SUPER BLACK – 01" 
            price={700} 
            image={mch12}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="SUPER MATTE 16HRS STAY EYE LINER SUPER BLUE – 02" 
            price={700} 
            image={mch13}/>
            <Product 
            id="975272"
            title="TOO GOOD TO BE MATTE LIPSTICK 4.2G" 
            price={359} 
            image={mch14}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="UC AGE REDEFINING COLLAGEN BOOSTING SERUM 18ML" 
            price={1299} 
            image={mch15}/>
            <Product 
            id="975272"
            title="UC AGE REDEFINING DAY CREAM 30G" 
            price={2299} 
            image={mch16}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="UC AGE REDEFINING NIGHT CREAM 30G" 
            price={2299} 
            image={mch17}/>
            <Product 
            id="975272"
            title="UC AGE REDEFINING PORE MINIMIZING MIST 100ML" 
            price={999} 
            image={mch18}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="UC AGE REDEFINING POWER LIFT CLEANSER 80ML" 
            price={999} 
            image={mch19}/>
            <Product 
            id="975272"
            title="UC AGE REDEFINING UNDER - EYE RECOVERY CONCENTRATE 12ML" 
            price={1299} 
            image={mch20}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="UC CHERRY LIP BALM" 
            price={199} 
            image={mch21}/>
            <Product 
            id="975272"
            title="UC EXPERT FIRM & LIFT FOUNDATION" 
            price={1199} 
            image={mch22}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="UC FLAWLESS FINISH BEAUTY SPONGE-BLACK" 
            price={199} 
            image={mch23}/>
            <Product 
            id="975272"
            title="UC FLAWLESS FINISH BEAUTY SPONGE-PINK" 
            price={199} 
            image={mch24}/>
            
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="UC HYPNOTEYES EYESHADOW QUAD (NEW MRP)" 
            price={1400} 
            image={mch25}/>
        <Product 
            id="975274"
            title="UC INSTANT RADIANCE ILLUMINATING LOTION 30ML" 
            price={1399} 
            image={mch26}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="UC INTENSE STAY 10HRS KAJAL BLACKEST BLACK 001 (NEW MRP)" 
            price={360} 
            image={mch27}/>
        <Product 
            id="975274"
            title="UC NAIL POLISH REMOVER (NEW MRP)" 
            price={198} 
            image={mch28}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="UC ORANGE LIP BALM" 
            price={199} 
            image={mch29}/>
        <Product 
            id="975274"
            title="UC PRO MICELLAR BI PHASE MAKEUP CLEANSER 150 ML" 
            price={499} 
            image={mch30}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="UC PRO WHITE ANTI – SPOT RADIANCE SERUM" 
            price={499} 
            image={mch31}/>
        <Product 
            id="975274"
            title="UC PRO WHITE FRESH RADIANCE DAY CREAM 30G" 
            price={1599} 
            image={mch32}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="UC PRO WHITE FRESH RADIANCE LOTION 30ML" 
            price={1699} 
            image={mch33}/>
        <Product 
            id="975274"
            title="UC PRO WHITE REPLENISHING NIGHT CREAM 30G" 
            price={1599} 
            image={mch34}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="UC STRAWBERRY LIP BALM" 
            price={199} 
            image={mch35}/>
        <Product 
            id="975274"
            title="UC ULTIMATE LASH MASCARA - BLACK (NEW MRP)" 
            price={595} 
            image={mch36}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="UC ULTIMATE RADIANCE PRIMER 30ML (NEW MRP)" 
            price={600} 
            image={mch37}/>
        <Product 
            id="975274"
            title="UCL GEL NAIL LACQUER" 
            price={155} 
            image={mch38}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="UCL NAIL LACQUER" 
            price={135} 
            image={mch39}/>
        <Product 
            id="975274"
            title="URBAN COLOR CREME GLAM LIPSTICK" 
            price={495} 
            image={mch40}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="URBAN COLOR EXPERT FIRM AND LIFT COMPACT WITH HYALURONIC ACID & UV FILTERS" 
            price={899} 
            image={mch41}/>
        <Product 
            id="975274"
            title="URBAN COLOR FINE TIP PENCIL SHARPENER" 
            price={175} 
            image={mch42}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="URBAN COLOR INTENSE COLOR EYE PENCIL" 
            price={535} 
            image={mch43}/>
        <Product 
            id="975274"
            title="URBAN COLOR INTENSE IMPACT LIPSTICK" 
            price={695} 
            image={mch44}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="URBAN COLOR LOVE ME MATTE LIPCOLOR" 
            price={730} 
            image={mch45}/>
        <Product 
            id="975274"
            title="URBAN COLOR MAKEUP MELTING WIPES" 
            price={255} 
            image={mch46}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="URBAN COLOR NAIL LACQUER" 
            price={215} 
            image={mch47}/>
        <Product 
            id="975274"
            title="URBAN COLOR PERFECT MATTE LIPSTICK" 
            price={495} 
            image={mch48}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="URBAN COLOR PRO WEAR BROW PENCIL 1.08G" 
            price={600} 
            image={mch49}/>
        <Product 
            id="975274"
            title="URBAN COLOR TRAVEL BUDDY NAIL LACQUER REMOVER WIPES (ROSE CRUSH)" 
            price={150} 
            image={mch50}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="URBAN COLOR ULTIMATE RADIANCE BLUSH" 
            price={540} 
            image={mch51}/>
        <Product 
            id="975274"
            title="URBAN COLOR ULTIMATE RADIANCE COMPACT" 
            price={750} 
            image={mch52}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="URBAN COLOR ULTIMATE RADIANCE FOUNDATION" 
            price={550} 
            image={mch53}/>
        {/* <Product 
            id="975274"
            title=""    
            price={240} 
            image={modicare}/> */}
                 </div>
            </>:""}
            {(category==="watches")?<>
            <div className="shop_row">
        <Product 
            id="975273"
            title="HIS AND HER COMBO PACK" 
            price={5500} 
            image={mcw1}/>
        <Product 
            id="975274"
            title="SM LADIES ROSE GOLD WATCH" 
            price={2599} 
            image={mcw2}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SM LADIES ROSE GOLD WITH STONE EMBEDDED BEZEL WATCH" 
            price={2999} 
            image={mcw3}/>
        <Product 
            id="975274"
            title="SM LADIES STONE EMBEDDED BLACK DIAL WATCH" 
            price={2999} 
            image={mcw4}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SM LADIES STONE EMBEDDED TWO TONE GOLD WATCH" 
            price={2599} 
            image={mcw5}/>
        <Product 
            id="975274"
            title="SM LADIES STONE EMBEDDED TWO TONE GOLD WATCH WITH MESH METAL STRAP" 
            price={2999} 
            image={mcw6}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SM MEN'S (DATE) GOLD WATCH" 
            price={2999} 
            image={mcw7}/>
        <Product 
            id="975274"
            title="SM MEN'S (DAY & DATE ) BLACK DIAL LEATHER STRAP WATCH" 
            price={2599} 
            image={mcw8}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SM MEN'S (DAY & DATE) SQUARE TWO TONE GOLD WATCH" 
            price={2999} 
            image={mcw9}/>
        <Product 
            id="975274"
            title="SM MEN'S (DAY & DATE) TWO TONE GOLD WATCH" 
            price={3499} 
            image={mcw10}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SM MEN'S (DAY & DATE)TWO TONE ROSE GOLD WATCH" 
            price={3499} 
            image={mcw11}/>
        {/* <Product 
            id="975274"
            title="" 
            price={} 
            image={mc30}/> */}
                 </div>
            </>:""}

                 
                 {/* <div className="shop_row">
        <Product 
            id="975273"
            title="" 
            price={} 
            image={mc29}/>
        <Product 
            id="975274"
            title="" 
            price={} 
            image={mc30}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="" 
            price={} 
            image={mc29}/>
        <Product 
            id="975274"
            title="" 
            price={} 
            image={mc30}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="" 
            price={} 
            image={mc29}/>
        <Product 
            id="975274"
            title="" 
            price={} 
            image={mc30}/>
                 </div> */}
    </div>
    </>

    )
}

export default Modicare
