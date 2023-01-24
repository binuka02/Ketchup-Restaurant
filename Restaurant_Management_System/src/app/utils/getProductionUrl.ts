import {environment} from '../../environments/environment';

export function getProductionUrl(url:string) {
  if(environment.production){
let urlString = "";

for(let i=3;i<url.split("/").length;i++){
  urlString += url.split("/")[i]+"/";
 }
 urlString = '/' + urlString;urlString = urlString.slice(0, -1);return urlString
  }
  return url;
}
