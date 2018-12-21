/*
@name        = Product.js
@author      = David Lapena Garcia
@version     = 1.0
@description = Class to save Product.js
@date        = 16-12-218
@propieties: 
        id          = Id of Product.
        type        = Type object [id, name] of Product.
        name        = Name of Product.
        code        = Code of Product.
        tested      = Boolean, Test of Product.
        entryDate   = String, entry date of Product.

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
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }

    get type(){
        return this._type;
    }
    set id(type){
        this._type = type;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get code(){
        return this._code;
    }
    set code(code){
        this._code = code;
    }

    get tested(){
        return this._tested;
    }
    set tested(tested){
        this._tested = tested;
    }

    get entryDate(){
        return this._entryDate;
    }
    set entryDate(entryDate){
        this._entryDate = entryDate;
    }

    /*
    @name        = printInfo
    @author      = David Lapena Garcia
    @version     = 1.0
    @description = Print on consoloe all Products values.
    @date        = 21-12-218
    @params      = none
    @return      = none
    */
    printInfo(){
        console.log("||_PRODUCT_{ ID: "+this._id+", Type: "+this._type.printInfo()+", Name: "+this.name+", Code: "+this._code+", Tested: "+this._tested+", Date: "+this._entryDate+"} ");
    }
}