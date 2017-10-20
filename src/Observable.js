import React from 'react'

/*
    Obrerver design pattern. When some change occurs, observable notifies
    observers about that.
*/
export class Observable {

    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        for (i=0; i<this.observers.length; i++) {
            this.observers[i].update(this);
        }
    }

    // not tested
    removeObserver(observer) {
        var indexOfObserver = -1;
        for (i=0; i<this.observers.length; i++) {
            if (this.observers[i] === observer){
                indexOfObserver = i;
            }
        }
        this.observers[indexOfObserver] = null;
        this.observers = this.duplicateArrayWithoutNullReferences(this.observers);
    }
    // not tested
    duplicateArrayWithoutNullReferences(array) {
        var newArray = [];
        if (array != null) {
            for (i=0; i<array.length; i++) {
                if (array[i] != null) {
                    newArray.push(array[i]);
                }
            }
        }
        return newArray;
    }
}
