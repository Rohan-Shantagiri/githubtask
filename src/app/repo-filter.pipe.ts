import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoFilter'
})
export class RepoFilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any) {
    if(value.length === 0){
      return value;
    }
    return value.filter(function (search){
      return search.name.toLowerCase().indexOf(searchTerm) > -1
    })
  }
  

  
}
