import {Pipe, PipeTransform} from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";
import {CategoryService} from "../category/category.service";
import {CategoryModel} from "../shared-model/category.model";

@Pipe({
  name: 'transCategSlugToName'
})


export class TransCategSlugToNamePipe implements PipeTransform {

  constructor(private categoryService: CategoryService) {
  }

  async transform(slug: string): Promise<string> {
    let category: string = await firstValueFrom(this.categoryService.fetchCategoryBySlug(slug))
      .then((categoryResponse) => categoryResponse.name);

    console.log(`fetchCategory slug=${slug} from PIPE`);
    console.log('category ' + category + " " + typeof category);
    return category;
  }
}
