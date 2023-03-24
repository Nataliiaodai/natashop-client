import {MediasObjectModel} from "./medias.obect.model";

export class ProductListItem {
    _id: number;
    name: string;
    price: number;
    medias: MediasObjectModel[] = [];
    slug: string ='';

    constructor(_id = 0, name: string = '', price = 0, medias: MediasObjectModel[] = [], slug: string = '') {
      this._id = _id;
      this.name = name;
      this.price = price;
      this.medias = medias;
      this.slug = '';
    }
}
