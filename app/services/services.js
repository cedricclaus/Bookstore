/**
 * Created by ccc on 4/12/2014.
 */


app.constant('tva',0.21);

app.factory('cart',function(tva){
    return {
         multiplier : (1 + tva),
         rows : [],
         add : function(book){
             var filteredRows =  this.rows.filter(function(item){
                 return item.id == book['ISBN-10'];
             })
             if(filteredRows.length>0){
                 filteredRows[0].qty++;
             }else{

                 var row = {};
                 row.id = book['ISBN-10'];
                 row.title =  book.title;
                 row.price =  book.price;
                 row.qty = 1;
                 this.rows.push(row);
             }


         },
         remove : function(row){
             var idx = this.rows.indexOf(row);
             if(idx>-1){
                 this.rows.splice(idx,1);
             }
         },
        amountWithoutTax : function(row){
            return row.qty* row.price;
        },
        amountWithTax : function(row){
            return this.amountWithoutTax(row) * this.multiplier;
        },
        totalWithoutTax : function(){
            var self = this;
            return  this.rows.reduce(function(sum,item){
                return sum+= self.amountWithoutTax(item);
            },0)
        },
        totalWitTax : function(){
            return this.totalWithoutTax() * this.multiplier;
        }

    }

});

app.factory('state',function($cacheFactory){
    var cache = $cacheFactory("state");
    return function(pageId,initialValue){
        return cache.get(pageId) || cache.put(pageId,initialValue);
        }

});