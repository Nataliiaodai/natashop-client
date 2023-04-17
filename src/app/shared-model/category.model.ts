
export class CategoryModel {
  id: number;
  name: string;
  slug: string;
  description: string;

  constructor(id = 0, name= '', slug = '', description = '') {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.description = description;
  }

}
