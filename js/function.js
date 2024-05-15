
function getElementValueByid(idName){
    // console.log('function')
    const product_title = document.getElementById(idName);
    const productTitle_text = product_title.innerText;
    // console.log(productTitle_text)
    return productTitle_text;
 
    // const show_product = document.getElementById('showProduct');
    // show_product.innerText = productTitle_text;
 }

 function setTextElementValueByid(element_id,newvalue){
    const textelement = document.getElementById(element_id);
    textelement.innerText = newvalue;
 }

 function getElementValueByidString(priceid){
    // console.log('function')
    const product_title = document.getElementById(priceid);
    const productTitle_text = product_title.innerText;
    const product_title_number = parseFloat(productTitle_text);
    // console.log(product_title_number)
    return product_title_number;
 
    // const show_product = document.getElementById('showProduct');
    // show_product.innerText = productTitle_text;
 }

 function getThecoupne(coupne)
 {
   const coupneValue = document.getElementById(coupne);
   const coupneValueString = coupneValue.value;
   // const coupneValueNumber = parseFloat(coupneValueString);
   // console.log(coupneValueString);
   return coupneValueString;
 }
 