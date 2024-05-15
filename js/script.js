
// for card -1 
function getTheResponseCard_1(){
const newvalue = getElementValueByid('productTitle');
 setTextElementValueByid('showProduct_1',newvalue);
 const price1 = getElementValueByidString('price_01')
 const old_price = getElementValueByidString('total_price_show');
 const new_price = price1 + old_price;
 setTextElementValueByid('total_price_show',new_price);

 updateTotalPriceAndButton()

}


//  for card 2
function getTheResponse2(){
const newvalue2 = getElementValueByid('productTitle_2');
setTextElementValueByid('showProduct_2',newvalue2);
const price2 = getElementValueByidString('price_02')
 const old_price = getElementValueByidString('total_price_show');
 const new_price = price2 + old_price;
 setTextElementValueByid('total_price_show',new_price);

 updateTotalPriceAndButton()

}


// for card-3 
function getTheResponse3(){
const newvalue2 = getElementValueByid('productTitle_3');
setTextElementValueByid('showProduct_3',newvalue2);
const price3 = getElementValueByidString('price_03')
const old_price = getElementValueByidString('total_price_show');
 const new_price = price3 + old_price;
 setTextElementValueByid('total_price_show',new_price);

 updateTotalPriceAndButton()
}


function updateTotalPriceAndButton() {
    const totalPrie = getElementValueByidString('total_price_show');
    console.log(totalPrie);
    
    if (totalPrie > 200) {

      const coupneValueString = getThecoupne('coupne');
        if(coupneValueString === 'SELL200'){
            const applyButton = document.getElementById('apply_button');

            applyButton.removeAttribute('disabled');

            // apply button enable 

            
            applyButton.addEventListener('click',function(){
                const button = document.getElementById('action_button');
                button.removeAttribute('disabled');
                console.log("Button enabled");
               const discountpoint =  totalPrie * 0.2 ;
                const discount =  discountpoint.toFixed();
           
               setTextElementValueByid('discount_price',discount);
                
               const paymoney = totalPrie - discount;
               setTextElementValueByid('pay_price',paymoney);
           
               console.log(paymoney)
            }) 
           
        }
        
    } 
 
}




