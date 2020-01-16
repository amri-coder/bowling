class Bowling{
    constructor(){
        this.pins=10;
        this.frames=10;
        this.rolls=0;
        this.listFrame=[];
        this.frame =[];
    }

    roll(number){
        

        this.frame.push(number);
        this.rolls += 1

        if (this.rolls===2) {
            this.listFrame.push(this.frame)
            this.rools=0;
            this.frame=[];
        }
        
    }
    
}

module.exports= Bowling;