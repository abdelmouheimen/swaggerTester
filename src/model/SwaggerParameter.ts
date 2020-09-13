export class SwaggerParameter{

    readonly name:          string;
    readonly type:          string;
    readonly source:        string; //in
    readonly description:   string;
    readonly required:      boolean;

    constructor(name:           string,
                type:           string,
                source:         string,
                description:    string,
                required:       boolean){

        this.name        = name;
        this.type        = type;
        this.source      = source;
        this.description = description;
        this.required    = required;
    }
}

export const deductSwaggerParameter = (dataElement: any): Array<SwaggerParameter> => {
    var swaggerParameters = new Array<SwaggerParameter>();
    dataElement.forEach((element: any) => {
        swaggerParameters.push(new SwaggerParameter(element.name, element.type, element.in, element.description, element.required));
    });
    return swaggerParameters;
    
}