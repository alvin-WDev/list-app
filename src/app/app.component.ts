import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  CreateItem: string = "Enter Item";
  order: boolean = false;
  itemlist = [];

  onclick(prouser) {
    if (prouser.value.length > 0) {
      this.itemlist.push(prouser.value);
      prouser.value = "";
    }
  }

  ondelete(deleteitem) {
    this.itemlist.splice(deleteitem, 1);
  }

  send() {
    this.order = !this.order;
    this.itemlist.sort((n1, n2) => {
      return this.order ? n1.localeCompare(n2) : n2.localeCompare(n1);
    });
  }
}
