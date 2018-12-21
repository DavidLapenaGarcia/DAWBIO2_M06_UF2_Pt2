/*
@name        = Type.js
@author      = David Lapena Garcia
@version     = 1.0
@description = Class to save Type.js
@date        = 16-12-218
@propieties: 0
        id   = Id of Type.
        name = Name of Type.

*/
class Type{
    constructor(id, name){
        this._id   = id;
        this._name = name;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    /*
    @name        = printInfo
    @author      = David Lapena Garcia
    @version     = 1.0
    @description = Print on consoloe all Type values.
    @date        = 21-12-218
    @params      = none
    @return      = none
    */
    printInfo(){
        console.log("_TYPE_{ID:"+this._id+" ,Name:"+this._name+"}");
    }
}