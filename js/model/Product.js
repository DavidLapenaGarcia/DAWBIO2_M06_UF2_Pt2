/*
@name        = Product.js
@author      = David Lapena Garcia
@version     = 1.0
@description = Class to save Product.js
@date        = 16-12-218
@propieties: 0
        id       = Id of Type.
        name     = Name of Type.

*/
class Product{
    constructor(id,type,name, code,tested,entryDate){
        this._id        = id;
        this._type      = type;
        this._name      = name;
        this._code      = code;
        this._tested    = tested;
        this._entryDate = entryDate;

    }
    getId(){
        return this._id;
    }
    setId(id){
        this._id = id;
    }

    getType(){
        return this._type;
    }
    setId(type){
        this._type = type;
    }

    getName(){
        return this._name;
    }
    setName(name){
        this._name = name;
    }

    getCode(){
        return this._code;
    }
    setCode(code){
        this._code = code;
    }

    getTested(){
        return this._tested;
    }
    setTested(tested){
        this._tested = tested;
    }

    getEntryDate(){
        return this._entryDate;
    }
    setEntryDate(entryDate){
        this._entryDate = entryDate;
    }

    printInfo(){
        console.log("||_PRODUCT_{ ID: "+this._id+", Type: "+this._type.printInfo()+", Name: "+this.name+", Code: "+this._code+", Tested: "+this._tested+", Date: "+this._entryDate+"} ");
    }
}