//The Promise.AllSettled attribute allows you to perform a conditional that observes whether all promises in an array have been resolved
const proimse1 = new Promise((resolve, reject) => setTimeout(resolve, 500));
const proimse2 = new Promise((resolve, reject) => setTimeout(reject, 1000));
const proimse3 = new Promise((resolve, reject) => setTimeout(resolve, 2000));

Promise.all([proimse1, proimse2, proimse3])
    .then((values) => {
        console.log('values= '+values)
        })
    .catch((error)=>{
        console.log('error='+error);
        });

Promise.allSettled([proimse1, proimse2, proimse3])
.then((values) => {console.log('values= '+values)})
.catch((error)=>{
  console.log('error='+error);
});