function TV({
    model, 
    year,
    diameter,
    volume = 0, 
    on_off = false,
    chooseChannel = null,
    chooseLighting = null,
  }) {
    this.model = model;
    this.year = year;
    this.diameter = diameter;
    this.chooseChannel = chooseChannel;
    this.volume = volume;
    this.on_off = on_off;
    this.lighting = ["large", "medium", "small"];
    this.channels = ["MoviesTV", "Nat Geo Wild", "NTV"];  

    console.log( "TV is turn off");

   
    this.turnOnModelName = function () {
        if(this.on_off === true){
            console.log( this.model + " " + this.year);
        }
    };

    this.changeChannel = function (channelNum) { 
        this.chooseChannel = this.channels[channelNum];
        console.log("You are in"+ "*" + this.chooseChannel);
    };

    this.changeLighting = function(channelLight){
        if(this.on_off === true){ 
           this.chooseLighting = this.lighting[channelLight];
           console.log("You changed lighting size to << " + this.chooseLighting)
        }
    };
    this.volumeUp = function(min,max){
        for(i = min; i < max ; i++){
            if(this.on_off === true){
               this.volume ++;
               console.log("Voice size. (up)" + " " + this.volume);
            }
        }
    };
    this.volumeDown = function(max,min){
        for(i = max; i > min ; i--){
            if(this.on_off === true){
               this.volume --;
               console.log("Voice size. (down)" + " " + this.volume);
            }
        }
    };

    this.turnOnOff = function () { 
        if(this.on_off === false){
           this.on_off = true;
           console.log( this.on_off + ", " + " TV set is turn on");
        }
        else this.on_off = false;
        for( let i = 0; i <=3; i++){
            console.log("TV set will turn off after 3s");
            setTimeout(() => console.log("turn off_ " + i), 1000 * i + 1000);
        }
     
    };  
}      

    const LG = new TV({
        year: 2020,
        model: "LG CX",
        diameter: 50,
      });
      
      LG.turnOnOff();
      LG.turnOnModelName();
      LG.changeChannel(2);
      LG.changeLighting(1);
      LG.volumeUp(15,18);
      LG.volumeDown(10,7);
