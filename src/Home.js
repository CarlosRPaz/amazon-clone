import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="78942398"
                        title="The Lean Startup: How Constant 
                        Innovation Creates Radically Successful 
                        Businesses Paperback"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for 
                        Baking, Stylish Kitchen Mixer with
                        K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghi-best-hand-mixers-1573060702.png?crop=0.625xw:0.961xh;0.183xw,0.00246xh&resize=640:*"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                <Product
                        id="90782345"
                        title="Samsung LC49RG934SUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49hg90dmnxza/gallery/09142017/CHG90-NEW_1.jpg?$product-details-jpg$"
                        rating={3}
                    />
                    <Product
                        id="28976435"
                        title="Amazon Echo (3rd generation) | SMart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        image="http://mobileimages.lowes.com/product/converted/841667/841667162096.jpg"
                        rating={5}
                    />
                    <Product
                        id="86729301"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image="https://www.bhphotovideo.com/images/images2500x2500/apple_mtj82ll_a_ipad_pro_256gb_wi_fi_1568361.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                <Product
                        id="08719234"
                        title="the Legend of Zelda: Breath of the Wild - Nintendo Switch (Physical copy): Lorem ipsum mor dual eren tistel (4th generation) Dough hook stylish kitchen"
                        price={49.94}
                        image="https://images-na.ssl-images-amazon.com/images/I/81KGsbq8ekL._SL1500_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
