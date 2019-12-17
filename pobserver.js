/*
    pomeloObserver
    Author : pomeloJ
    description : just easy to use
*/
class pomeloObserver{
    constructor() {
        this.observerList = {}
    }
    //register a task
    register = function (event, name, func) {
        if ((Object.keys(this.observerList)).indexOf(event) === -1){
            this.observerList[event] = {};
        }
           
        if (typeof this.observerList[event][name] === "undefined"){
            this.observerList[event][name] = func;
        }
            
        return true;
    }
    //unregister a task
    unregister = function (event, name) {
        for (let func in this.observerList[event]) {
            if (this.observerList[event].hasOwnProperty(func) && typeof this.observerList[event][name] === "function") {
                delete this.observerList[name];

                return true;
            }
        }

        return false;
    }
    //trigger observer event
    trigger = function (event, data) {
        if (typeof this.observerList[event] === "undefined"){
            return false;
        }
        let i = 0;
        for (let func in this.observerList[event]) {
            if (this.observerList[event].hasOwnProperty(func)){
                this.observerList[event][func](data);
                i++;
            }
        }

        return i;
    }
    //debug
    debug = function(){
        let list = this.observerList;
        
        let result = {}
        let index = Object.keys(this.observerList);

        index.forEach(function(inx,val){
            let subIndex = Object.keys(list[inx]);
            result[inx]=subIndex;
        });

        let finalResult={
            'index':result,
            'source':list
        }

        return finalResult;
    }
}
