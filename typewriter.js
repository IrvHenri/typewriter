const sentence = "hello there from lighthouse labs";
let count = 500
for (const char of sentence) {
  
  setTimeout((count)=>{
    
    process.stdout.write(char + '\n') ;
    
  },count += 500) 
  
}