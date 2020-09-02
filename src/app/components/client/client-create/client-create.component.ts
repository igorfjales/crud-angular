import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClientService } from "../client.service";
import { Client } from "../client.model";

@Component({
  selector: "app-client-create",
  templateUrl: "./client-create.component.html",
  styleUrls: ["./client-create.component.css"],
})
export class ClientCreateComponent implements OnInit {
  client: Client = {
    cpf: "",
    name: "",
    phone: "",
    email: "",
  };

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {}

  createClient(): void {
    if (
      this.client.cpf === "" ||
      this.client.name === "" ||
      this.client.phone === "" ||
      this.client.email === ""
    ) {
      this.clientService.showMessage("Preencher todos os campos obrigatórios!");
      return;
    }
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage("Cliente criado com sucesso!");
      this.router.navigate(["/clients"]);
    });
  }

  cancel() {
    this.router.navigate(["/clients"]);
  }
}
