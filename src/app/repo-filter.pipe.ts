import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoFilter'
})
export class RepoFilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any, searchType: any, searchLanguage: any) {
    console.log(searchType);
    console.log(searchLanguage);
    // searchTerm = searchTerm.toLowerCase();
    // console.log(value)
    //initial with no search inputs.
    if (searchTerm.length == 0 && searchType.length == 0 && searchLanguage.length == 0) {
      return value;
    } else if (searchTerm.length > 0 && value.name.toLowerCase().indexOf(searchTerm) > -1) {
      //search with only input.
      return value;
    } else if(searchLanguage.length > 0 || searchType.length > 0)
    {
      if(searchType === "All" && value.name.toLowerCase().indexof(searchTerm.toLowerCase()) > -1 && value.language === searchLanguage){
        return value;
        console.log(value)
      }
      if(searchType === "forks" && value.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 && value.language === searchLanguage ){
        return value.fork === true;
      }
      if(searchType === "public" && value.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 && value.language === searchLanguage ){
        return value.public === true;
      }
      if(searchType === "private" && value.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 && value.language === searchLanguage ){
        return value.private === true;
      }
      if(searchType === "sources" && value.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 && value.language === searchLanguage ){
        return value.has_issues === true;
      }
      if(searchType === "archived" && value.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1 && value.language === searchLanguage ){
        return value.archived === true;
      }
      if(searchType === "mirrors" && value.name.toLowerCase().indexOf(searchTerm) > -1 && value.language === searchLanguage ){
        return value.mirror_url !== null;
      }
      if(value.name.toLowerCase().indexOf(searchTerm) > -1 && value.language === searchLanguage){
        return value;
      }
     }
     else {
       if(searchType === "All" && value.name.toLowerCase().indexOf(searchTerm) > -1){
         return value;
       }
       if(searchType === "forks" && value.name.toLowerCase().indexOf(searchTerm) > -1){
        return value.fork === true;
      }
      if(searchType === "sources" && value.name.toLowerCase().indexOf(searchTerm) > -1){
        return value.has_issues === true;
      }
      if(searchType === "private" && value.name.toLowerCase().indexOf(searchTerm) > -1){
        return value.private === true;
      }
      if(searchType === "public" && value.name.toLowerCase().indexOf(searchTerm) > -1){
        return value.public === true;
      }
      if(searchType === "mirrors" && value.name.toLowerCase().indexOf(searchTerm) > -1){
        return value.mirror_url !== null;
      }
     }
  }



}
