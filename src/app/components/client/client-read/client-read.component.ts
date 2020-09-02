import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { Client } from "../client.model";

// SERVICES
import { ClientService } from "../client.service";
import { DialogService } from "../../popups/dialog.service";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-client-read",
  templateUrl: "./client-read.component.html",
  styleUrls: ["./client-read.component.css"],
})
export class ClientReadComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  listData: MatTableDataSource<Client>;
  displayedColumns = ["name", "phone", "email", "action"];

  searchKey: string;

  constructor(
    private clientService: ClientService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientService.read().subscribe((clients) => {
      this.listData = new MatTableDataSource(clients);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  // Aplica os filtros digitados pelo usuário.
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  // Limpa o campo de pesquisa ao clicar no "X".
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  navigateToClientCreate(): void {
    this.router.navigate(["/clients/create"]);
  }

  onDetail(client: Client) {
    this.dialogService
      .openDetailClientDialog(client)
      .afterClosed()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  onDelete(id: number, cpf: string): void {
    this.dialogService
      .openConfirmDialog(`Deseja mesmo deletar o cliente de CPF: ${cpf}?`)
      .afterClosed()
      .subscribe((response) => {
        if (response !== false) {
          if (response === String(cpf)) {
            this.clientService.delete(id).subscribe(() => {
              this.clientService.showMessage("Cliente deletado com sucesso!");
              this.ngOnInit();
            });
          } else {
            this.clientService.showMessage(
              "Cliente NÃO deletado. CPF digitado inválido.",
              true
            );
          }
        }
      });
  }
}
