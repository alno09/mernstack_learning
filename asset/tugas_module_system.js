import Table from "./tugas_basic_oop.js";

const table = new Table({
  columns: ["Nama", "Jenis", "Harga", "Stok"],
  data: [
    ["Kopi Susu Regal", "Coffee", 15000, 12],
    ["Kopi Susu Brown Sugar", "Coffee", 12000, 15],
    ["Cold Chocolate", "Non-Coffee", 10000, 10],
    ["Muscle Memory", "Coffee", 15000, 7],
    ["Warm Sunset", "Mocktail", 15000, 12]
  ]
});

const app = document.getElementById("app");
  table.render(app);