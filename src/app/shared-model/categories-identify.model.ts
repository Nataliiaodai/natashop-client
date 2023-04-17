export class CategoriesIdentifyModel {
  id: number;
  name: string;
  slug: string;

  constructor(id = 0, name ='', slug= '') {
    this.id = id;
    this.name = name;
    this.slug = slug;
  }
}
