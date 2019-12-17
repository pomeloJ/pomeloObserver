# pomeloObserver
It's really simple for subscribing event function [Javascript(ES6)]

*for subscribe event everything*

*for simple demand*

*for dont't want to think too much*

*for any simple reason*
## CDN JS
for simplicity,just copy and coding

we don't say anymore
```javascript
<script src="https://cdn.ank.uno/github/pomeloJ/pomeloObserver/pobserver.js"></script>
```
## Basic sample
```javascript
//init
let po = new pomeloObserver;

//subscribe a event and named "bill"
po.subscribe('cartRefresh','bill',function(data){
	//if cart refresh then call bill module
});

//subscribe a event and named "cartView"
po.subscribe('cart','cartView',function(data){
	//if cart refresh then call cart View module
});

//trigger event
po.trigger('cart');
//then bill and cartView function will be called

//also you can trigger with data
po.trigger('cart',{"data":"helloword"});

//unscribe event
po.unscribe('cart','cartView');
//"cartView" event is history
```

## Extra function sample
```javascript
//trigger an event unit
po.action('cart','bill',{"data":"hellowow"});
//when action this event,only "bill" event unit will be called.

//trigger with filter In
po.triggerIn('cart',['bill','cartView'],{"data":"hellowood"});
//only "bill" and "cartView" event unit will be called.

//trigger with filter Not In
po.triggerNotIn('cart',['bill'],{"data":"hellowired"});
//expect "bill" ,others unit in "cart" event will be called.

//debug
po.debug();
//it will give
```
```javascript
{
   "index":{
      "cart":[
         "bill",
         "cartView"
      ]
   },
   "source":{
      "cart":{
        "bill":function(){/*function*/},
        "cartView":function(){/*function*/}
      }
   }
}
```

# Future
* we have no idea now.....

* we expect to make anything intuitive and simple,maybe just for 71% common situation.

# Star
if this JS helps you, please let us know by giving **star** , thank you.
