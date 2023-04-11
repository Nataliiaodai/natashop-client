import {MultiLangText} from "./multiLangText.model";


export class CategoryModel {
  id: number;
  name: MultiLangText;
  slug: string;
  description: string;

  constructor(id = 0, name: MultiLangText = new MultiLangText(), slug = '', description = '') {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.description = description;
  }

}
