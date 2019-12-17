/*
    pomeloObserver
    Author : pomeloJ
    description : just easy to use
*/
class pomeloObserver{
    constructor() {
        this.observerList = {}
    }
    //subscribe a task
    subscribe = function (event, name, func) {
        if ((Object.keys(this.observerList)).indexOf(event) === -1){
            this.observerList[event] = {};
        }
           
        if (typeof this.observerList[event][name] === "undefined"){
            this.observerList[event][name] = func;
        }
            
        return true;
    }
    //unsubscribe a task
    unsubscribe = function (event, name) {
        for (let funName in this.observerList[event]) {
            if (this.observerList[event].hasOwnProperty(funName) && typeof this.observerList[event][name] === "function") {
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
        for (let funName in this.observerList[event]) {
            if (this.observerList[event].hasOwnProperty(funName)){
                this.observerList[event][funName](data);
                i++;
            }
        }

        return i;
    }
    //trigger in filter
    triggerIn = function (event,filt,data) {
        if (typeof this.observerList[event] === "undefined") {
            return false;
        }
        
        let i = 0;
        for (let funName in this.observerList[event]) {
            let inArrayResult = filt.find(function (item, index, array) {
                return item === funName;
            });

            if (this.observerList[event].hasOwnProperty(funName) && inArrayResult != null) {
                this.observerList[event][funName](data);
                i++;
            }
        }

        return i;
    }
    //trigger not in filter
    triggerNotIn = function (event,filt,data) {
        if (typeof this.observerList[event] === "undefined") {
            return false;
        }
        
        let i = 0;
        for (let funName in this.observerList[event]) {
            let inArrayResult = filt.find(function (item, index, array) {
                return item === funName;
            });

            if (this.observerList[event].hasOwnProperty(funName) && inArrayResult == null) {
                this.observerList[event][funName](data);
                i++;
            }
        }

        return i;
    }
    //action a event unit
    action = function (event,name,data){
        if (typeof this.observerList[event][name] === "undefined") {
            return false;
        }

        this.observerList[event][name](data);

        return true;
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
