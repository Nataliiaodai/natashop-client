import {Pipe, PipeTransform} from '@angular/core';
import {firstValueFrom} from "rxjs";
import {CategoryService} from "../category/category.service";

@Pipe({
  name: 'transCategSlugToName'
})


export class TransCategSlugToNamePipe implements PipeTransform {

  constructor(private categoryService: CategoryService) {
  }

  async transform(slug: string): Promise<string> {
    let category = await firstValueFrom(this.categoryService.fetchCategoryBySlug(slug))
      .then((categoryResponse) => categoryResponse.name);

    console.log(`fetchCategory slug=${slug} from PIPE`);
    console.log('category ' + category + " " + typeof category);
    return category;
  }
}
