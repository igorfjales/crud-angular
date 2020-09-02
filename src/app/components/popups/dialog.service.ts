import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { Client } from "../client/client.model";
import { MatConfirmDialogComponent } from "./mat-confirm-dialog/mat-confirm-dialog.component";
import { PopupDetailClientComponent } from "./popup-detail-client/popup-detail-client.component";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(msg) {
    return this.dialog.open(MatConfirmDialogComponent, {
      width: "400px",
      panelClass: "confirm-dialog-container",
      disableClose: true,
      data: {
        message: msg,
      },
    });
  }

  openDetailClientDialog(client: Client) {
    return this.dialog.open(PopupDetailClientComponent, {
      width: "60%",
      disableClose: false,
      autoFocus: true,
      data: {
        client,
      },
    });
  }
}
