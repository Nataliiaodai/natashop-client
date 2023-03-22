import {MediasObjectModel} from "./medias.obect.model";


export class Product {
  name: string;
  price: number;
  note: string;
  _id: number;
  fullDescription: string;
  slug: string;
  medias: MediasObjectModel [] = [];

  constructor(name: string = '',
              price = 0,
              note = '',
              _id = 0,
              fullDescription: string = '',
              slug: string = '',
              medias: MediasObjectModel [] = []) {
    this.name = name;
    this.price = price;
    this.note = note;
    this._id = _id;
    this.fullDescription = fullDescription;
    this.slug = slug;
    this.medias = medias;
  }
}


