app.directive('etoiles',function(){


    return function(scope,element,attr){
        scope.$watch(attr.etoiles,function(value){
            var string = '';
            for(var i = 0 ;i<value;i++){
                string += '<img src="./img/star.png"/> ';
            }
            for(var j = (attr.max-value);j>0; j--){
                string += '<img src="./img/empty-star.png"/> ';
            }
            element.html(string);

        });


    }



});