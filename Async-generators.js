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
  

  // question : 1

  // generator function which return either of two promises of which one resolve in .5 sec
  // and 3 sec and it should run infinetly

  const asyncGenfun = async function* () {
    while (1) {
      const val = Math.floor(Math.random() * 2);
  
      if (val == 0) {
        yield new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Fast");
          }, 500);
        });
      } else {
        yield new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("slow");
          }, 3000);
        });
      }
    }
  };
  
  const asyncGen = asyncGenfun();
  
  async function asyncfun() {
    for await (const promise of asyncGen) {
      console.log(promise);
    }
  }
  
  asyncfun();
  

