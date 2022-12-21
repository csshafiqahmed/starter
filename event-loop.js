const fs=require('fs');
const crypto=require('crypto');

const start=Date.now();
process.env.UV_THREADPOOL_SIZE=2;

setTimeout(()=>console.log('Time 1 Finished!'), 0);
setImmediate(()=>console.log('Immediate 1 Finished!'));

fs.readFile('test-file.txt', 'utf8', () => {
    console.log('I.O Finished!');
    console.log('-----------------------');

    setTimeout(() => console.log("Time 2 Finished!"), 0);
    setTimeout(() => console.log("Time 3 Finished!"), 3000);
    setImmediate(() => console.log("Immediate 2 Finished!"));

    process.nextTick(() => console.log("Process.nextTick Finished!"));

    crypto.pbkdf2("password","salt",1000000,1024,"sha512",()=>{
        console.log(Date.now()-start, "Password Encrypted");
    });crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
      console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
      console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
      console.log(Date.now() - start, "Password Encrypted");
    });


});
console.log('Hello From the Top Level Code');