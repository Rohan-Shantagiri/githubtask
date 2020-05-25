import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoFilter'
})
export class RepoFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any, searchType: any, searchLanguage: any) {
    // console.log(searchType);
    console.log(searchLanguage);
    // searchTerm = searchTerm.toLowerCase();
    console.log(value)
    //initial with no search inputs.
    if (searchTerm.length == 0 && searchType.length == 0 && searchLanguage.length == 0) {
      return value;
    } else if (searchTerm.length > 0 && value.name.toLowerCase().indexOf(searchTerm) > -1) {
      //search with only input.
      return value;
    } else //if (searchLanguage.length > 0 && value.language.toLowerCase().indexOf(searchLanguage)) 
    {
      return value = value.filter(lang => lang.language == searchLanguage);
    }
  }



}
