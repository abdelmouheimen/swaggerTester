import { SwaggerElement, deductSwaggerElement } from '../model/SwaggerElement';
import { getSwaggerJson } from '../actions/SwaggerAction';


export const transformSwaggerToModels = ( json: any): Array<SwaggerElement> => {
   var paths = json.paths;
   var swaggerElements= new  Array<SwaggerElement>();
   for(var i in paths){
    var path = i;
    for(var j in paths[i]){
      var method = j;
      var information = paths[i][j];
      swaggerElements.push(deductSwaggerElement(path, method, information));
    }
    
   }
   console.log(swaggerElements);
   return swaggerElements;
}


