function randomString(x){ 
    let arr = []; 
    let char = 'abcdefjhijqlmnopqrstuvwxyzABCDEFJHIGQLMNOPQRSTUVWXYZ';
        for(let i = 0; i < x; i++){
            arr.push( char.charAt(Math.floor(Math.random() * char.length)));
        }
        return arr;
    }
    let x = randomString(5);
    console.log(x);
    
    function changeVoiceString(str){
    let voice_element = ['a','e','i','o','y'];
        for(let i = 0; i < str.length; i++){
            for(let j = 0; j < voice_element.length; j++){
                if(str[i].toLowerCase().indexOf(voice_element[j]) >= 0) {
                    str.splice(i,1); 
                }       
            }
        }
        return str;
    }
    console.log(changeVoiceString(x)); 
