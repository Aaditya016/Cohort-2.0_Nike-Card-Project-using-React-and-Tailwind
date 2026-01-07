import React from 'react';

const Card = (props) => {
  return (
    <div className='bg-white  w-60 rounded-2xl relative bg-gray-200 shadow-2xl'>
        <img src={props.image} alt="" className="rounded-2xl w-full  object-cover p-2" />
        <div className='absolute top-4 left-4 bg-gray-400/90 text-white px-4 py-2 rounded-full text-[10px]' >
          Best Seller
        </div>
        <div>
          <img className='absolute top-4 right-4 object-cover rounded-full w-8 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAACGhob8/Pzm5uZnZ2fPz8+qqqrLy8vu7u7AwMCwsLD29vaFhYXW1ta9vb2NjY0rKytJSUlubm57e3ucnJzi4uKgoKDe3t4ICAhbW1t2dnZOTk5DQ0M0NDQmJiYXFxeVlZUgICBgYGA7OztFRUUUeh+MAAADTklEQVR4nO3aiVrqMBCGYcJSdihaFkFB1HP/t3hARJashUlbfL73AjIZicmfQK0GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCfNhg3y55CTEk6Ua/dsmcRy6y9VErVxfobSA0kYjBe7bpT723BIXtyY92rs1uae68dyVGfJAe7w2L+qg4y2Q2mNRcd7jbd/rM6mjdkx24r2fHya3TqH7/tvYn/y4xUJj1kvvrTJ3WyWogXGCg1Eh80VLPfUue2MTb1N1XSIm30hu8X7a3HUerUlRpGGdhttH1Tl1qRVlJnN7bowROg2f5U19JY4WywH114a3YXHGdad2rTj1dwv4t9xRv+SrJd6+2pZRKx5PQ7PkQscHJI0rph1LvD7LuGYL616B6StE4yWxttvstETt3HJK2TzdYm6aFQxPP+lKR1wtnaWP6nVKRK50laJ52tjSbxOtwl6Y2jPflsbTQ/1pOOupdJWhchWxsNfitKHkfdqySti5KtjU7BSSpQaElaFylbGyWnsiLBW0/SuljZ2uxsI9jcO5YpSeuiZWuz/nntezbTXZJ+CWgvZrY2u/zr3jpKsv0K6C5ytjZrX87gltPXlqR1cu/WOVzNIe/tYmBL0rro2dqsfT2PPKuok5oueWbxs7WFvjcELiRXktYVkK0teobZ+Ft0J2nNSyHZ2uKfaUbuhepO0rqnUr/qaZonldn+5otpnqW5t5oV2pAmtU3MEIr9SVo3Lf3LSMfklv2zzaHrT9K6rwKztc3IN8dWVq9nLX+QNngu6Orntr1l6kGKu/q5hUXJ3Iq8+rk1ovRX7NXPLfFPN7eCr34eWia916Twq59HXba/z+Kvfj75T3CHai3PH3kTmF3xLxNh3K+14Up4mQgk8xmW8jIRSOD/8KOcl4lQ1ptFqGVZLxOhxvf1N6z+T3a7d7RX0sNZXsY3jBCVX55HNy7TB1iev2w/HHCo+O55beHv6FJ1D3ebfNeLSmZPn/AzcV3R7Ok19/e2V9RvCmIIuOmv+yU+ywtoeL6EqD/wx3c0sr+Irh7lbPcZmT7HSfpwZ4NLo5edn//LtFeRR11ZzaQ3HveS2WNvLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1Gr/AT+LIY3TZsG6AAAAAElFTkSuQmCC" alt="" />
        </div>
        <div className='px-3'>
          <h2 className='text-base font-bold'>{props.title}</h2>
          <h4 className='text-sm font-light text-gray-400'>{props.subtitle} </h4>
          <p className='text-[10px] font-light text-gray-400'>{props.description}</p>
        </div>
        <div className='px-3 py-3 flex justify-between items-center'>
          <button className='bg-gray-200 rounded-2xl px-2 cursor-pointer'>${props.price}</button>
          <button className='bg-black text-white text-sm rounded-2xl px-2 cursor-pointer'>Buy Now</button>
        </div>
    </div>
  );
};

export default Card;