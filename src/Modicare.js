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
import mcc3 from './images/mcc3.jpg'
import mcc4 from './images/mcc4.jpg'
import mcc5 from './images/mcc5.jpg'
import mcc6 from './images/mcc6.jpg'
import mcc7 from './images/mcc7.jpg'
import mcc8 from './images/mcc8.jpg'
import mcc9 from './images/mcc9.jpg'
import mcc10 from './images/mcc10.jpg'
import mcc11 from './images/mcc11.jpg'
import mcc12 from './images/mcc12.jpg'
import mcc13 from './images/mcc13.jpg'
import mcc14 from './images/mcc14.jpg'
import mcc15 from './images/mcc15.jpg'
import mcc16 from './images/mcc16.jpg'
import mcc17 from './images/mcc17.jpg'
import mcc18 from './images/mcc18.jpg'
import mcc19 from './images/mcc19.jpg'
import mcc20 from './images/mcc20.jpg'
import mcj1 from './images/mcj1.jpg'
import mcj2 from './images/mcj2.jpg'
import mcj3 from './images/mcj3.jpg'
import mcj4 from './images/mcj4.jpg'
import mcj5 from './images/mcj5.jpg'
import mcj6 from './images/mcj6.jpg'
import mcj7 from './images/mcj7.jpg'
import mcj8 from './images/mcj8.jpg'
import mcj9 from './images/mcj9.jpg'
import mcj10 from './images/mcj10.jpg'
import mcj11 from './images/mcj11.jpg'
import mcj12 from './images/mcj12.jpeg'
import mcj13 from './images/mcj13.jpeg'
import mcj14 from './images/mcj14.jpeg'
import mcj15 from './images/mcj15.jpeg'
import mcj16 from './images/mcj16.jpg'
import mcj17 from './images/mcj17.jpg'
import mcj18 from './images/mcj18.jpeg'
import mcj19 from './images/mcj19.jpg'
import mcj20 from './images/mcj20.jpg'
import mcj21 from './images/mcj21.jpeg'
import mcj22 from './images/mcj22.jpg'
import mcj23 from './images/mcj23.jpg'
import mcj24 from './images/mcj24.jpg'
import mcj25 from './images/mcj25.jpg'
import mcj26 from './images/mcj26.jpg'
import mcj27 from './images/mcj27.jpg'
import mcj28 from './images/mcj28.jpg'
import mcj29 from './images/mcj29.jpg'
import mcj30 from './images/mcj30.jpg'
import mcj31 from './images/mcj31.jpg'
import mcj32 from './images/mcj32.jpg'
import mcj33 from './images/mcj33.jpg'
import mcj34 from './images/mcj34.jpg'
import mcj35 from './images/mcj35.jpg'
import mcj36 from './images/mcj36.jpg'
import mcj37 from './images/mcj37.jpg'
import mcj38 from './images/mcj38.jpg'
import mcj39 from './images/mcj39.jpg'
import mcj40 from './images/mcj40.jpg'
import mcj41 from './images/mcj41.jpg'
import mcj42 from './images/mcj42.jpg'
import mcj43 from './images/mcj43.jpg'
import mcj44 from './images/mcj44.jpg'
import mcj45 from './images/mcj45.jpg'
import mcj46 from './images/mcj46.jpg'
import mcp1 from './images/mcp1.jpg'
import mcp2 from './images/mcp2.jpg'
import mcp3 from './images/mcp3.jpg'
import mcp4 from './images/mcp4.jpg'
import mcp5 from './images/mcp5.jpg'
import mcp6 from './images/mcp6.jpg'
import mcp7 from './images/mcp7.jpg'
import mcp8 from './images/mcp8.jpg'
import mcp9 from './images/mcp9.jpg'
import mcp10 from './images/mcp10.jpg'
import mcp11 from './images/mcp11.jpg'
import mcp12 from './images/mcp12.jpg'
import mcp13 from './images/mcp13.jpg'
import mcp14 from './images/mcp14.jpg'
import mcp15 from './images/mcp15.jpg'
import mcp16 from './images/mcp16.jpg'
import mcp17 from './images/mcp17.jpg'
import mcp18 from './images/mcp18.jpg'
import mcp19 from './images/mcp19.jpg'
import mcp20 from './images/mcp20.jpg'
import mcp21 from './images/mcp21.jpg'
import mcp22 from './images/mcp22.jpg'
import mcp23 from './images/mcp23.jpg'
import mcp24 from './images/mcp24.jpg'
import mcp25 from './images/mcp25.jpg'
import mcp26 from './images/mcp26.jpg'
import mcp27 from './images/mcp27.jpg'
import mcp28 from './images/mcp28.jpg'
import mcp29 from './images/mcp29.jpg'
import mcp30 from './images/mcp30.jpg'
import mcp31 from './images/mcp31.jpg'
import mcp32 from './images/mcp32.jpg'
import mcp33 from './images/mcp33.jpg'
import mcp34 from './images/mcp34.jpg'
import mcp35 from './images/mcp35.jpg'
import mcp36 from './images/mcp36.jpg'
import mcp37 from './images/mcp37.jpg'
import mcp38 from './images/mcp38.jpg'
import mcp39 from './images/mcp39.jpg'
import mcp40 from './images/mcp40.jpg'
import mcp41 from './images/mcp41.jpg'
import mcp42 from './images/mcp42.jpg'
import mcp43 from './images/mcp43.jpg'
import mcp44 from './images/mcp44.jpg'
import mcp45 from './images/mcp45.jpg'
import mcp46 from './images/mcp46.jpg'
import mcp47 from './images/mcp47.jpg'
import mcp48 from './images/mcp48.jpg'
import mcp49 from './images/mcp49.jpg'
import mcp50 from './images/mcp50.jpg'
import mcp51 from './images/mcp51.jpg'
import mcp52 from './images/mcp52.jpg'
import mcp53 from './images/mcp53.jpg'
import mcp54 from './images/mcp54.jpg'
import mcp55 from './images/mcp55.jpg'
import mcp56 from './images/mcp56.jpg'
import mcp57 from './images/mcp57.jpg'
import mcp58 from './images/mcp58.jpg'
import mcp59 from './images/mcp59.jpg'
import mcp60 from './images/mcp60.jpg'
import mcp61 from './images/mcp61.jpg'
import mcp62 from './images/mcp62.jpg'
import mcp63 from './images/mcp63.jpg'
import mcp64 from './images/mcp64.jpg'
import mcp65 from './images/mcp65.jpg'
import mcp66 from './images/mcp66.jpg'
import mcp67 from './images/mcp67.jpg'
import mcp68 from './images/mcp68.jpg'
import mcp69 from './images/mcp69.jpg'
import mcp70 from './images/mcp70.jpg'
import mcp71 from './images/mcp71.jpg'
import mcp72 from './images/mcp72.jpg'
import mcp73 from './images/mcp73.jpg'
import mcp74 from './images/mcp74.jpg'
import mcp75 from './images/mcp75.jpg'
import mcp76 from './images/mcp76.jpg'
import mcp77 from './images/mcp77.jpg'
import mcp78 from './images/mcp78.jpg'
import mcp79 from './images/mcp79.jpg'
import mcp80 from './images/mcp80.jpg'
import mcp81 from './images/mcp81.jpg'
import mcp82 from './images/mcp82.jpg'
import mcp83 from './images/mcp83.jpg'
import mcp84 from './images/mcp84.jpg'
import mcp85 from './images/mcp85.jpg'
import mcp86 from './images/mcp86.jpg'



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
    {
        label: "Personal Care",
        value: "personalcare",
      },
      {
        label: "Jewellery",
        value: "jewellery",
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
            title="AUTO GLOW AUTO POLISH - FOR CAR, APPLIANCES AND OTHERS (500ML)" 
            price={450} 
            image={mcc1}/>
            <Product 
            id="975272"
            title="AUTO WASH ADVANCED - AUTO SHAMPOO WITH COLOUR PROTECTANTS (250ML)" 
            price={125} 
            image={mcc2}/>
            
        </div>
            <div className="shop_row">
            <Product 
            id="975271" 
            title="BEYOND BLUE (750 ML)" 
            price={162} 
            image={mcc3}/>
            <Product 
            id="975272"
            title="FRUVEG FRUIT AND VEGETABLE WASH" 
            price={288} 
            image={mcc4}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="GERMI BUST MULTI-SURFACE DISINFECTANT SPRAY" 
            price={270} 
            image={mcc5}/>
            <Product 
            id="975272"
            title="HD HEAVY DUTY FLOOR CLEANER (500 ML)" 
            price={160}     
            image={mcc6}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="MIGHTY IN-ONE MULTIPURPOSE CLEANER (250 ML)" 
            price={130} 
            image={mcc7}/>
            <Product 
            id="975272"
            title="ONE DER DROP ADVANCED CONCENTRATED DISH WASHING LIQUID (BIOSAFE FORMULA) (500 ML)" 
            price={202} 
            image={mcc8}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="ONE DER DROP ADVANCED ORIGINAL FORMULA(500 ML)" 
            price={202} 
            image={mcc9}/>
            <Product 
            id="975272"
            title="ONE DER SCRUB (PACK OF 4 PCS)" 
            price={135} 
            image={mcc10}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="SILVER DIP INSTANT SILVER CLEANER (300 ML)" 
            price={225} 
            image={mcc11}/>
            <Product 
            id="975272"
            title="SPARKLE ADVANCED CONCENTRATED GLASS CLEANER WITH ANTIFOG EFFECT (BIOSAFE FORMULA 500 ML)" 
            price={175} 
            image={mcc12}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="SPIC ‘N’ SPAN SCALE & BATHROOM CLEANER 250ML" 
            price={135} 
            image={mcc13}/>
            <Product 
            id="975272"
            title="STERICLEAN POWERFUL DISINFECTANT CLEANER ADVANCE (500 ML)" 
            price={220} 
            image={mcc14}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="STERICLEAN POWERFUL DISINFECTANT CLEANER KHUS (500 ML)" 
            price={213} 
            image={mcc15}/>
            <Product 
            id="975272"
            title="STERICLEAN POWERFUL DISINFECTANT CLEANER LIME (500 ML)" 
            price={213} 
            image={mcc16}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="WASHMATE MATIC CONCENTRATED DETERGENT POWDER (500 G)" 
            price={150} 
            image={mcc17}/>
            <Product 
            id="975272"
            title="WASHMATE POPULAR DETERGENT POWDER (1 KG)" 
            price={157} 
            image={mcc18}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="WASHMATE POWERCLEAN DETERGENT BAR (200GX3)" 
            price={108} 
            image={mcc19}/>
            <Product 
            id="975272"
            title="WASHMATE PRE WASH DIRT & STAIN REMOVER (250ML)" 
            price={175} 
            image={mcc20}/>
            
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

            {(category==="personalcare")?<>
            <div className="shop_row">
        <Product 
            id="975273"
            title="ALL PURE HAND SANITIZER – ALOE VERA (250 ML)" 
            price={125} 
            image={mcp1}/>
        <Product 
            id="975274"
            title="ALL PURE HAND SANITIZER (60 ML)" 
            price={30} 
            image={mcp2}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ALL PURE HAND SANITIZER (250 ML)" 
            price={125} 
            image={mcp3}/>
        <Product 
            id="975274"
            title="ALL PURE HAND SANITIZER- ALOE VERA (500 ML)" 
            price={250} 
            image={mcp4}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ALL PURE HAND SANITIZER- MORINGA (250 ML)" 
            price={125} 
            image={mcp5}/>
        <Product 
            id="975274"
            title="ALL PURE HAND SANITIZER- MORINGA (500 ML)" 
            price={250} 
            image={mcp6}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="BABY SPA 2 IN 1 BUBBLE BATH & WASH (200 ML)" 
            price={221} 
            image={mcp7}/>
        <Product 
            id="975274"
            title="BABY SPA DIAPER RASH CREAM (50 G)" 
            price={140} 
            image={mcp8}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="BABY SPA MASSAGE OIL (200 ML)" 
            price={195} 
            image={mcp9}/>
        <Product 
            id="975274"
            title="BABY SPA MILK CREAM (50 G" 
            price={90} 
            image={mcp10}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="BABY SPA MOISTURISING LOTION (200 ML)" 
            price={161} 
            image={mcp11}/>
        <Product 
            id="975274"
            title="BABY SPA NO-TEARS SHAMPOO (200 ML)" 
            price={175} 
            image={mcp12}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="BABY SPA NOURISHING SOAP (75 G)" 
            price={65} 
            image={mcp13}/>
        <Product 
            id="975274"
            title="BABY SPA SOFT CLEANSING WIPES (80 PCS)" 
            price={225} 
            image={mcp14}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="BABY SPA TALC POWDER (100 G)" 
            price={75} 
            image={mcp15}/>
        <Product 
            id="975274"
            title="ESSENSUAL BODY PUFF - ULTRA SOFT & GENTLE" 
            price={88} 
            image={mcp16}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ESSENSUAL HAND & BODY LOTION (ALLANTOIN & VITAMIN E) (100 ML)" 
            price={165} 
            image={mcp17}/>
        <Product 
            id="975274"
            title="ESSENSUAL HAND & BODY LOTION (ALLANTOIN & VITAMIN E) (200 ML)" 
            price={264} 
            image={mcp18}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ESSENSUAL HAND & BODY LOTION (GLYCERINE & HONEY) (100 ML)" 
            price={165} 
            image={mcp19}/>
        <Product 
            id="975274"
            title="ESSENSUAL HAND & BODY LOTION (GLYCERINE & HONEY) (200 ML)" 
            price={264} 
            image={mcp20}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ESSENSUAL INSTANTE TEA TREE OIL WITH VITAMIN E (15 ML)" 
            price={330} 
            image={mcp21}/>
        <Product 
            id="975274"
            title="ESSENSUAL PERFUMED BODY TALC-DREAMS (100G)" 
            price={72} 
            image={mcp22}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ESSENSUAL PERFUMED BODY TALC-DREAMS (400G)" 
            price={193} 
            image={mcp23}/>
        <Product 
            id="975274"
            title="ESSENSUAL PERFUMED BODY TALC-WILD FLOWER (100G)" 
            price={72} 
            image={mcp24}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ESSENSUAL PERFUMED BODY TALC-WILD FLOWER (400G)" 
            price={193} 
            image={mcp25}/>
        <Product 
            id="975274"
            title="ESSENSUAL PERFUMED DEO SPRAY-INDULGE (150ML)" 
            price={190} 
            image={mcp26}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ESSENSUAL PERFUMED DEO SPRAY-MOMENTUM (150ML)" 
            price={190} 
            image={mcp27}/>
        <Product 
            id="975274"
            title="ESSENSUAL PERFUMED DEO SPRAY-OCEAN BLUE (150ML)" 
            price={190} 
            image={mcp28}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ESSENSUAL PERFUMED DEO SPRAY-ORIENTAL SPICE (150 ML)" 
            price={190} 
            image={mcp29}/>
        <Product 
            id="975274"
            title="ESSENSUAL POCKET PERFUME DUSKY DESIRE" 
            price={80} 
            image={mcp30}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ESSENSUAL POCKET PERFUME SPICE WOODS" 
            price={80} 
            image={mcp31}/>
        <Product 
            id="975274"
            title="ESSENSUAL POCKET PERFUME WILD GIRL" 
            price={80} 
            image={mcp32}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ESSENSUAL SOFT & SMOOTH INTENSIVE FOOT CARE CREAM (100 ML)" 
            price={225} 
            image={mcp33}/>
        <Product 
            id="975274"
            title="FOTE CONDITIONER WITH ALOE VERA & ALMOND OIL (SMOOTH & SHINE) (100 ML)" 
            price={140} 
            image={mcp34}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="FOTE CONDITIONER WITH ALOE VERA & ALMOND OIL (SMOOTH & SHINE) (150 ML)" 
            price={198} 
            image={mcp35}/>
        <Product 
            id="975274"
            title="FOTE SHAMPOO WITH ARNICA & TEA TREE OIL (DANDRUFF CONTROL) (100 ML)" 
            price={120} 
            image={mcp36}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="FOTE SHAMPOO WITH ARNICA & TEA TREE OIL (DANDRUFF CONTROL) (200 ML)" 
            price={195} 
            image={mcp37}/>
        <Product 
            id="975274"
            title="FOTE SHAMPOO WITH HENNA & JOJOBA OIL (HAIR FALL CONTROL) (100 ML)" 
            price={120} 
            image={mcp38}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="FOTE SHAMPOO WITH HENNA & JOJOBA OIL (HAIR FALL CONTROL) (200 ML)" 
            price={195} 
            image={mcp39}/>
        <Product 
            id="975274"
            title="FRESH MOMENTS AYURVEDIC HERBAL TOOTHPASTE" 
            price={58} 
            image={mcp40}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="FRESH MOMENTS DEEP CLEAN ANTI-CAVITY TOOTHPASTE" 
            price={48} 
            image={mcp41}/>
        <Product 
            id="975274"
            title="FRESH MOMENTS GEL TOOTHPASTE (100G)" 
            price={90} 
            image={mcp42}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="FRESH MOMENTS TOOTHBRUSH (PACK OF 4)" 
            price={176} 
            image={mcp43}/>
        <Product 
            id="975274"
            title="FRESH MOMENTS TOOTHPASTE (100G)" 
            price={75} 
            image={mcp44}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SALON PROFESSIONAL ADVANCE FORMULA HAIR FALL DEFENSE SHAMPOO - 288ML(6ML48 SACHETS)" 
            price={192} 
            image={mcp45}/>
        <Product 
            id="975274"
            title="SALON PROFESSIONAL ADVANCE FORMULA NOURISH & SHINE HAIR OIL (100 ML)" 
            price={115} 
            image={mcp46}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SALON PROFESSIONAL ADVANCED FORMULA DANDRUFF CARE SHAMPOO" 
            price={280} 
            image={mcp47}/>
        <Product 
            id="975274"
            title="SALON PROFESSIONAL ADVANCED FORMULA HAIR FALL DEFENSE SHAMPOO" 
            price={280} 
            image={mcp48}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SALON PROFESSIONAL ADVANCED FORMULA RADIANT SHINE CONDITIONER" 
            price={295} 
            image={mcp49}/>
        <Product 
            id="975274"
            title="SALON PROFESSIONAL ADVANCED FORMULA SMOOTH & SHINE SHAMPOO" 
            price={280} 
            image={mcp50}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SALON PROFESSIONAL AMLA HAIR OIL" 
            price={65} 
            image={mcp51}/>
        <Product 
            id="975274"
            title="SALON PROFESSIONAL ARGAN OIL OF MOROCCO - HAIR TREATMENT OIL" 
            price={725} 
            image={mcp52}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SALON PROFESSIONAL COOL HERBAL OIL" 
            price={90} 
            image={mcp53}/>
        <Product 
            id="975274"
            title="SALON PROFESSIONAL HAIR COLOR-BROWN (3)" 
            price={450} 
            image={mcp54}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SALON PROFESSIONAL HAIR COLOR-CHOCOLATE (4)" 
            price={450} 
            image={mcp55}/>
        <Product 
            id="975274"
            title="SALON PROFESSIONAL HAIR COLOR-DARK BLOND (6)" 
            price={450} 
            image={mcp56}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SALON PROFESSIONAL HAIR COLOR-DARK BROWN (2)" 
            price={450} 
            image={mcp57}/>
        <Product 
            id="975274"
            title="SALON PROFESSIONAL HAIR COLOR-LIGHT BROWN (5)" 
            price={450} 
            image={mcp58}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SALON PROFESSIONAL HAIR COLOR-NATURAL BLACK (1)" 
            price={450} 
            image={mcp59}/>
        <Product 
            id="975274"
            title="SANITARY NAPKIN - LARGE 290 MM (15 PADS)" 
            price={245} 
            image={mcp60}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SANITARY NAPKIN - REGULAR 245 MM (15 PADS)" 
            price={225} 
            image={mcp61}/>
        <Product 
            id="975274"
            title="SANITARY NAPKIN - X-LARGE 320 MM (15 PADS)" 
            price={265} 
            image={mcp62}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SOFWASH 3 IN 1 HAND WASH, SHOWER GEL & BUBBLE BATH - BERRY STRAWBERRY (250 ML)" 
            price={163} 
            image={mcp63}/>
        <Product 
            id="975274"
            title="SOFWASH 3 IN 1 HAND WASH, SHOWER GEL & BUBBLE BATH - CITRUSY LIME (250 ML)" 
            price={162} 
            image={mcp64}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SOFWASH 3 IN 1 HAND WASH, SHOWER GEL & BUBBLE BATH - GREEN APPLE (250 ML)" 
            price={162} 
            image={mcp65}/>
        <Product 
            id="975274"
            title="SOFWASH ALOE VERA, NEEM & TULSI SOAP" 
            price={30} 
            image={mcp66}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SOFWASH ANTIBACTERIAL SOAP" 
            price={45} 
            image={mcp67}/>
        <Product 
            id="975274"
            title="SOFWASH GLYCERIN & HONEY BAR (100G X 2)" 
            price={170} 
            image={mcp68}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SOFWASH KIDS 3 IN 1 HANDWASH, SHOWERGEL & BUBBLE BATH" 
            price={275} 
            image={mcp69}/>
        <Product 
            id="975274"
            title="SOFWASH LIME SOAP" 
            price={30} 
            image={mcp70}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SOFWASH ORANGE SOAP" 
            price={30} 
            image={mcp71}/>
        <Product 
            id="975274"
            title="SOFWASH SANDAL SOAP" 
            price={30} 
            image={mcp72}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SOFWASH WHITE PEARL SOAP (75GX4)" 
            price={180} 
            image={mcp73}/>
        <Product 
            id="975274"
            title="VELOCITY MEN 7 IN 1 BEARD GROWTH OIL (30ML)" 
            price={340} 
            image={mcp74}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="VELOCITY MEN AFTER SHAVE SPLASH (100 ML)" 
            price={215} 
            image={mcp75}/>
        <Product 
            id="975274"
            title="VELOCITY MEN BODY SPRAY (125 ML  88 G)" 
            price={199} 
            image={mcp76}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="VELOCITY MEN DEODORISING BODY TALC (100 G)" 
            price={72} 
            image={mcp77}/>
        <Product 
            id="975274"
            title="VELOCITY MEN ENERGISING SHOWER GEL (150 ML)" 
            price={240} 
            image={mcp78}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="VELOCITY MEN FAIRNESS CREAM (50 G)" 
            price={140} 
            image={mcp79}/>
        <Product 
            id="975274"
            title="VELOCITY MEN FORTIFYING HAIR CONDITIONER (100ML)" 
            price={176} 
            image={mcp80}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="VELOCITY MEN FORTIFYING SHAMPOO" 
            price={193} 
            image={mcp81}/>
        <Product 
            id="975274"
            title="VELOCITY MEN HAIR STYLING GEL (50 G)" 
            price={90} 
            image={mcp82}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="VELOCITY MEN OIL CLEAR FACE WASH (50 G)" 
            price={129} 
            image={mcp83}/>
        <Product 
            id="975274"
            title="VELOCITY MEN PREMIUM SHAVING CREAM (70 G)" 
            price={115} 
            image={mcp84}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="VELOCITY MEN TWIN BLADE PLUS READYSHAVER (PACK OF 5)" 
            price={130} 
            image={mcp85}/>
        <Product 
            id="975274"
            title="VELOCITY MWN COOL MENTHOL SHAMPOO" 
            price={193} 
            image={mcp86}/>
                 </div>
            </>:""}
            {(category==="jewellery")?<>
            <div className="shop_row">
        <Product 
            id="975273"
            title="ADA ANTIQUE (CUFF 1N)" 
            price={3999} 
            image={mcj1}/>
        <Product 
            id="975274"
            title="ADA EMERALD GREEN (CUFF 1N)" 
            price={3999} 
            image={mcj2}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ADA RUBY RED (CUFF 1N)" 
            price={3999} 
            image={mcj3}/>
        <Product 
            id="975274"
            title="AZRA RUBY RED (EARRING 2N)" 
            price={1799} 
            image={mcj4}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="CHAND BALA (EARRING 2N)" 
            price={1799} 
            image={mcj5}/>
        <Product 
            id="975274"
            title="CHANDINI (NECKLACE 1N + EARRING 2N)" 
            price={3349} 
            image={mcj6}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="DIA (NECKLACE 1N + EARRING 2N)" 
            price={2000} 
            image={mcj7}/>
        <Product 
            id="975274"
            title="DIVYA (NECKLACE 1N + EARRING 2N)" 
            price={2399} 
            image={mcj8}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="FIZA (EARRING 2N)" 
            price={899} 
            image={mcj9}/>
        <Product 
            id="975274"
            title="HANSANI (PENDENT 1N + EARRING 2N)" 
            price={1699} 
            image={mcj10}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="HEER EARRING 2N" 
            price={1399} 
            image={mcj11}/>
        <Product 
            id="975274"
            title="JAHAAN (NECKLACE & EARRING SET)" 
            price={3999} 
            image={mcj12}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="Kiran Earring" 
            price={1500} 
            image={mcj13}/>
        <Product 
            id="975274"
            title="KOHINOOR (BANGLE 2.4" 
            price={1899} 
            image={mcj14}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="Kohinoor Bangle 2'6" 
            price={1899} 
            image={mcj15}/>
        <Product 
            id="975274"
            title="KUNDAN KANGAN GREEN (BANGLES 2N - 2.4)" 
            price={1599} 
            image={mcj16}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="KUNDAN KANGAN RED (BANGLES 2N - 2.4)" 
            price={1599} 
            image={mcj17}/>
        <Product 
            id="975274"
            title="MAHI (HATH PAN)" 
            price={1999} 
            image={mcj18}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="MAYA (EARRING 2N)" 
            price={1399} 
            image={mcj19}/>
        <Product 
            id="975274"
            title="MEHAR (BRACELET 1N)" 
            price={949} 
            image={mcj20}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="MOH (BRACELET)" 
            price={1099} 
            image={mcj21}/>
        <Product 
            id="975274"
            title="MOTI MALA NECLACE 1N EARRING 2N" 
            price={2199} 
            image={mcj22}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="NAAZ BLUE SAPPHIRE (EARRING 2N)" 
            price={1699} 
            image={mcj23}/>
        <Product 
            id="975274"
            title="NAAZ RUBY RED (EARRING 2N " 
            price={1699} 
            image={mcj24}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="NAUSHEEN (BRACELET 1N" 
            price={1999} 
            image={mcj25}/>
        <Product 
            id="975274"
            title="NAYANTARA (NECKLACE 1N + EARRING 2N)" 
            price={2200} 
            image={mcj26}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="NAZIA ONYX BLUE (EARRING 2N)" 
            price={1299} 
            image={mcj27}/>
        <Product 
            id="975274"
            title="NAZIA ONYX PINK (EARRING 2N)" 
            price={1299} 
            image={mcj28}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="NOOR EMERALD GREEN (EARRING 2N)" 
            price={1099} 
            image={mcj29}/>
        <Product 
            id="975274"
            title="NOOR-RUBY-RED" 
            price={1099} 
            image={mcj30}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="PHOOL (BRACELET)" 
            price={1299} 
            image={mcj31}/>
        <Product 
            id="975274"
            title="PIA (BRACELET 1N)" 
            price={849} 
            image={mcj32}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="RANI (PENDANT SET)" 
            price={3999} 
            image={mcj33}/>
        <Product 
            id="975274"
            title="SHABNAM AQUA (EARRING 2N)" 
            price={899} 
            image={mcj34}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SHABNAM ROSE QUARTZ (EARRING 2N)" 
            price={1099} 
            image={mcj35}/>
        <Product 
            id="975274"
            title="SIA PENDENT 1N EARRING 2N" 
            price={1699} 
            image={mcj36}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SIA PENDENT 1N EARRING 2N" 
            price={1699} 
            image={mcj37}/>
        <Product 
            id="975274"
            title="SITARA (NECKLACE 1N + EARRING 2N)" 
            price={2499} 
            image={mcj38}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="SIYA EARRING" 
            price={1099} 
            image={mcj39}/>
        <Product 
            id="975274"
            title="Tara-(Earrings)---" 
            price={1249} 
            image={mcj40}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="TARANG (NECKLACE 1N + EARRING 2N)" 
            price={2849} 
            image={mcj41}/>
        <Product 
            id="975274"
            title="THE MAHARANI COLLECTION KUNDAN KANGAN GREEN" 
            price={1599} 
            image={mcj42}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="THE MAHARANI COLLECTION KUNDAN KANGAN RED" 
            price={1599} 
            image={mcj43}/>
        <Product 
            id="975274"
            title="TRISHNA NECKLACE 1N EARING 2N" 
            price={4999} 
            image={mcj44}/>
                 </div>
                 <div className="shop_row">
        <Product 
            id="975273"
            title="ZEENAT (BRACELET 1N)" 
            price={1999} 
            image={mcj45}/>
        <Product 
            id="975274"
            title="ZOYA (EARRING 2N)" 
            price={899} 
            image={mcj46}/>
                 </div>
                 
            </>:""}

                 
                </div>
    </>

    )
}

export default Modicare
