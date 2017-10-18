import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from "angularfire2/database";

@Injectable()
export class FirebaseService {

     public _cateList: AngularFireList<any>;

    constructor(public af: AngularFireDatabase) {

        af.list('lum').valueChanges().subscribe(items =>{
            console.log(items);
        });
    }


}
