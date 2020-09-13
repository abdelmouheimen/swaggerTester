import { SwaggerParameter, deductSwaggerParameter } from './SwaggerParameter';

export class SwaggerElement{
    readonly path:          string;
    readonly method:        string;
    readonly description:   string;
    readonly parameters:    ReadonlyArray<SwaggerParameter>;

    constructor(
                path:           string,
                method:         string,
                description:    string,
                parameters:     Array<SwaggerParameter>

                ){

        this.path           = path;
        this.method         = method;
        this.description    = description;
        this.parameters     = parameters;
    }
}

export const deductSwaggerElement = (path: string, method: string, dataElement: any): SwaggerElement => {
    console.log(dataElement);
    return new SwaggerElement(path, method, dataElement.description, deductSwaggerParameter(dataElement.parameters));
    
}