import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "firstName",
})
export class FirstNamePipe implements PipeTransform {
  transform(fullName: string): any {
    let firstName = fullName.split(" ");
    return firstName[0];
  }
}
