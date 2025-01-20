// import React from 'react'

// const Earth = () => {
//   return (
//     <div>
//       <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzE2aWVia215aTNyOW1tMHJoZ2xkeHN1NXVlZ3JscnZoOThqZXIybCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/aN9GqoR7OD3nq/giphy.webp"  width="500px"/>
//       <div>
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//       </div>
//       <div>
//         <img src="https://lionvisionits.com/wp-content/uploads/2018/01/Thankyou.gif"  width="500px"/>
//       </div>
//     </div>
//   )
// }

// export default Earth
import React from 'react'

const Earth = () => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzE2aWVia215aTNyOW1tMHJoZ2xkeHN1NXVlZ3JscnZoOThqZXIybCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/aN9GqoR7OD3nq/giphy.webp" 
        width="500px" 
        alt="Earth Animation" 
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="mt-10">
        <a 
          href="https://amber-lilla-52.tiiny.site" 
          download="My_Resume" 
          className="text-violet-500 hover:text-gray-500 text-3xl font-bold "
        >
          Download My Resume
        </a>
       
      </div>

      
    </div>
  )
}

export default Earth
