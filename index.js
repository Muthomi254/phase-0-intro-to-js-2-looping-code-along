// Code your solutions in this file
//  const cards = ["Guadalupe", "Ollie", "Aki"]; 

//  function writeCards(cards){
//   const thankYouMessage = []
  
//     for (let note = 0; note < cards.length; note++) (
//     let message = `Thank you, ${cards[note]}, for the wonderful surprise gift!`
        // console.log(message)
//     );
// };
 
const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
  const thankYouMessages = []; 

  for (let note = 0; note < cards.length; note++) {
    const message = `Thank you, ${cards[note]}, for the wonderful surprise gift!`;
    thankYouMessages.push(message); 
  }

  return thankYouMessages; 
}

let num = [1,2,3,4]
function countDown(num){
for (let i = num; i >= 0; i--) {
  console.log(i);
}}
