import { Component, OnInit } from "@angular/core";
import { Book } from "../book";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  book: Book = {
    id: 1,
    name: "Harry Potter"
  };

  constructor() {}

  ngOnInit() {}
}
