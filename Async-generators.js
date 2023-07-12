// question : 0
// async generator to return a random number infinitely

const asyncgenerator = async function* () {
    while (1) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          let number = Math.floor(Math.random() * 9);
          resolve(number);
        }, 1000);
      });
    }
  };
  
  const asynGenObj = asyncgenerator();
  
  async function asyncfun() {
    for await (const promise of asynGenObj) {
      console.log(promise);
    }
  }
  
  asyncfun();
  

