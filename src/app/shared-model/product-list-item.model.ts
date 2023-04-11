import {MultiLangText} from "./multiLangText.model";
import {MediasObjectModel} from "./medias.obect.model";

export class ProductListItem {
  _id: number;
  name: MultiLangText;
  price: number;
  medias: MediasObjectModel[] = [];
  slug: string = '';

  constructor(_id = 0, name: MultiLangText = new MultiLangText(), price = 0, medias: MediasObjectModel[] = [], slug: string = '') {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.medias = medias;
    this.slug = slug;
  }
}
