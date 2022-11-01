class brainFuck{
    constructor(code){
        this.code = code.split("");
        this.array = []; 
        this.output = "";
        this.pointer = 0;
        for(let i = 0; i < 100; i++){
            this.array.push(0);
        }
    }
    run() {
        let loopPointer;
        let loopChar;
        let item;
        for(let i = 0; i < this.code.length; i++){
            item = this.code[i];
            if(item == ">"){
                this.pointer ++;
            }
            if(item == "<"){
                this.pointer --;
            }
            if(item == "+"){
                this.array[this.pointer] ++; 
            }
            if(item == "-"){
                this.array[this.pointer] --;
            }
            if(item == "["){
                loopPointer = this.pointer;
                loopChar = i;
            }
            if(item == "]"){
                if(this.array[loopPointer] > 0){
                    i = loopChar;
                }
            }
            if(item == ","){
                this.output += this.array[this.pointer];
            }
            if(item == "."){
                this.output += String.fromCharCode(this.array[this.pointer]);
            }
        }
    }
}