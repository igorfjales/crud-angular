import { Component, OnInit } from "@angular/core";
import { HeaderService } from "./header.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService, private router: Router) { }

  ngOnInit(): void { }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }
}
