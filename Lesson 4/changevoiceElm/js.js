
// let tv = {
//     currentChannel: 5;
// }
// 1. only number
// 2. range => [1, 15]
// tv.currentChannel = 'gggg'
// console.log(tv.currentChannel);

let tv = {
    currentChannel: 5,

    get cur(){
            return this.currentChannel;
        },
     set cur(newChanel){
         if( newChanel  === number && newChanel>1 && newChanel<15){
                     this.currentChannel = newChanel;
        
         }
       }
} 
console.log(tv.currentChannel);
// === stugum e tipy ev arjeqy.