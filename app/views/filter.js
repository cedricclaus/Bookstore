/**
 * Created by ccc on 3/12/2014.
 */


app.filter('interval',function($parse){
    return function(input,propertyExpression,min,max){
        //min = min || 0;
        //max = max || 9999;
        var getter = $parse(propertyExpression);
        return input && input.filter(function(entry){
                var value = getter(entry);
                return ((!min || value> min) && (!max || value <max))});


    }

})