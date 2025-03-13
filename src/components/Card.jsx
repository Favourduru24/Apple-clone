import { card1, card2, card3, card4, card5 , card, color1, card6, card7, card8, card9, card10 } from '../utils'

const Card = () => {

       const Boxes = [
        {
         image: card1,
         text:'hello world'  
       },
        {
         image: card2,
         text:'hello world'  
       },
        {
         image: card3,
         text:'hello world'  
       },
        {
         image: card4,
         text:'hello world'  
       },
        {
         image: card5,
         text:'hello world'  
       },
        {
         image: card6,
         text:'hello world'  
       },
        {
         image: card7,
         text:'hello world'  
       },
        {
         image: card8,
         text:'hello world'  
       },
        {
         image: card9,
         text:'hello world'  
       },
        {
         image: card10,
         text:'hello world'  
       },
       ]
       
  return (
      <div className='maylike-products-container'>
           <div className='marquee'>
              <div className='sm:track truck'>
    <div className='products-container'>
    <div className='product-card' >
           {Boxes.map((box, index) => (
             <img src={box.image} alt="cards" className='product-image' width={250} height={250} key={index}/>
           ))} 
      </div>
</div>
              track
              </div>
             </div> 
      </div>
  )
}

export default Card