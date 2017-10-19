import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs/observable";

export class Product{
    constructor(
        public brand:string,
        public active: boolean,
        public isFav: boolean,
        public name: string,
        public mainImgIndex:number,
        public desc: string,
        public imgfiles:[string],
        public rating:number
    ){}
}

export class Cate{
    constructor(
        public name: string,
        public children: [Product],
        public imgfiles: [string],
        public hasChild: boolean,
        public level: number,
        public parent_id: number,
        public desc:string
    ){}

}

@Injectable()
export class FirebaseService {

    public catesRef: AngularFireList<any>;
    public cates: Cate[] = [];
    public catesOSB: Observable<any[]>;

    constructor(public af: AngularFireDatabase) {

        af.list('lum').valueChanges()
            .map(snapshorts => {

                snapshorts.forEach(cate =>{
                    let products = cate['children'].map(p=>{
                        return new Product(
                            p['brand'],
                            p['active'],
                            p['isFav'],
                            p['name'],
                            p['mainImgIndex'],
                            p['description'],
                            p['imgfiles'],
                            p['rating']);
                    });

                    cate['children'] = products;
                    return cate;
                });

                return snapshorts;
            })
            .subscribe(items =>{

                return items.map((item)=> {

                    this.cates.push(new Cate(
                        item['name'],
                        item['children'],
                        item['imgfiles'],
                        item['hasChild'],
                        item['level'],
                        item['parent_id'],
                        item['description']
                    ));
                });
            });
    }

    public getData(){
        return this.cates;
    }


}
