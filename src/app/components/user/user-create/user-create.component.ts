import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  user: User = {
    name: "",
    email: "",
    password: "",
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  createUser(): void {
    if (
      this.user.name === "" ||
      this.user.email === "" ||
      this.user.password === ""
    ) {
      this.userService.showMessage(
        "Preencher todos os campos obrigatórios!",
        true
      );
      return;
    }

    this.userService.readByEmail(this.user.email).subscribe((response) => {
      if (response[0]) {
        this.userService.showMessage("E-mail já cadastrado!", true);
      } else {
        this.userService.create(this.user).subscribe(() => {
          this.userService.showMessage("Usuário criado com sucesso!");
          this.user.name = "";
          this.user.email = "";
          this.user.password = "";
        });
      }
    });
  }
}
