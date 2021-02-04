function palidrome(str){
    let new_str = "";

    for( let i = str.length -1; i >= 0; i--){
        console.log(str[i]);
        new_str += str[i];
    }
    return new_str
}
palidrome("hello"); 

