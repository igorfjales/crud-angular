import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { Client } from "../../client/client.model";
import { ClientService } from "../../client/client.service";

@Component({
  selector: "app-popup-detail-client",
  templateUrl: "./popup-detail-client.component.html",
  styleUrls: ["./popup-detail-client.component.css"],
})
export class PopupDetailClientComponent implements OnInit {
  statusEdit: boolean;

  client: Client = {
    id: 0,
    cpf: "",
    name: "",
    phone: "",
    email: "",
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopupDetailClientComponent>,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.client = {
      id: this.data.client.id,
      cpf: this.data.client.cpf,
      name: this.data.client.name,
      phone: this.data.client.phone,
      email: this.data.client.email,
    };
  }

  updateClient(): void {
    if (
      this.client.cpf !== "" &&
      this.client.name !== "" &&
      this.client.phone !== "" &&
      this.client.email !== ""
    ) {
      this.clientService.update(this.client).subscribe(() => {
        this.clientService.showMessage("Cliente atualizado com sucesso!");
        this.closeDialog();
      });
    } else {
      this.clientService.showMessage(
        "Preencha todos os campos de entrada para atualizar.",
        true
      );
    }
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
