import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"],
})
export class UserLoginComponent implements OnInit {
  user = {
    email: "",
    password: "",
  };

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  login() {
    // Verifica se os campos não estão vazios
    if (this.user.email === "" || this.user.password === "") {
      this.userService.showMessage(
        "Preencher todos os campos obrigatórios!",
        true
      );
      return;
    }

    this.userService.readByEmail(this.user.email).subscribe((response) => {
      if (response[0] && response[0].password === this.user.password) {
        window.localStorage.setItem("token", "meu-token");

        this.userService.showMessage("Usuário logado com sucesso!");
        this.router.navigate(["/home"]);
      } else {
        this.userService.showMessage("E-mail ou senha inválidos.", true);
        return;
      }
    });
  }
}
