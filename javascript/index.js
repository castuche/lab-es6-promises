// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
/* 
// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        }, (error4) => { console.log(error4); });
      }, (error3) => { console.log(error3); });
    }, (error2) => { console.log(error2); });
  }, (error1) => { console.log(error1); });
}, (error0) => { console.log(error0); });

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((currentStep0) => {
    document.querySelector("#steak").innerHTML += `<li>${currentStep0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((currentStep1) => {
    document.querySelector("#steak").innerHTML += `<li>${currentStep1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((currentStep2) => {
    document.querySelector("#steak").innerHTML += `<li>${currentStep2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((currentStep3) => {
    document.querySelector("#steak").innerHTML += `<li>${currentStep3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((currentStep4) => {
    document.querySelector("#steak").innerHTML += `<li>${currentStep4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((currentStep5) => {
    document.querySelector("#steak").innerHTML += `<li>${currentStep5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((currentStep6) => {
    document.querySelector("#steak").innerHTML += `<li>${currentStep6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((currentStep7) => {
    document.querySelector("#steak").innerHTML += `<li>${currentStep7}</li>`;
  })
  .catch((error)=> console.log(error))
  .finally(()=> document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`);

  // Iteration 3 using async/await
const obtainInstructionWithAsyncAwait = async () => {
  try {
    const currentStep0 = await obtainInstruction('broccoli',0);
    document.querySelector("#broccoli").innerHTML += `<li>${currentStep0}</li>`;
    const currentStep1 = await obtainInstruction('broccoli',1);
    document.querySelector("#broccoli").innerHTML += `<li>${currentStep1}</li>`;
    const currentStep2 = await obtainInstruction('broccoli',2);
    document.querySelector("#broccoli").innerHTML += `<li>${currentStep2}</li>`;
    const currentStep3 = await obtainInstruction('broccoli',3);
    document.querySelector("#broccoli").innerHTML += `<li>${currentStep3}</li>`;
    const currentStep4 = await obtainInstruction('broccoli',4);
    document.querySelector("#broccoli").innerHTML += `<li>${currentStep4}</li>`;
    const currentStep5 = await obtainInstruction('broccoli',5);
    document.querySelector("#broccoli").innerHTML += `<li>${currentStep5}</li>`;
    const currentStep6 = await obtainInstruction('broccoli',6);
    document.querySelector("#broccoli").innerHTML += `<li>${currentStep6}</li>`;
    const currentStep7 = await obtainInstruction('broccoli',7);
    document.querySelector("#broccoli").innerHTML += `<li>${currentStep7}</li>`;
  } catch (error){
    console.log(error);
  }
  document.querySelector("#broccoli").innerHTML += `<li>Brocoli is ready</li>`;
}

obtainInstructionWithAsyncAwait();
  
// Bonus 2 - Promise all
const arrayOfPromises = [
  obtainInstruction('brusselsSprouts',0),
  obtainInstruction('brusselsSprouts',1),
  obtainInstruction('brusselsSprouts',2),
  obtainInstruction('brusselsSprouts',3),
  obtainInstruction('brusselsSprouts',4),
  obtainInstruction('brusselsSprouts',5),
  obtainInstruction('brusselsSprouts',6),
  obtainInstruction('brusselsSprouts',7),
];

Promise.all(arrayOfPromises)
  .then((valuesOfAllPromises) =>{
    valuesOfAllPromises.forEach(currentValue => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${currentValue}</li>`;
    });
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`;
  })
  .catch((error)=> console.log(error));