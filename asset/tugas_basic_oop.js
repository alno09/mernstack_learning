class Table {
    constructor(init) {
      this.init = init;
    }
  
    createHeader(data) {
      let open = "<thead><tr>";
      let close = "</tr></thead>";
      data.forEach((d) => {
        open += `<th>${d}</th>`;
      });
  
      return open + close;
    }
  
    createBody(data) {
      let open = "<tbody>";
      let close = "</tbody>";
  
      data.forEach((d) => {
        open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            <td>${d[3]}</td>
          </tr>
        `;
      });
  
      return open + close;
    }
  
    render(element) {
      let table =
        "<table class='table table-secondary table-hover'>" +
        this.createHeader(this.init.columns) +
        this.createBody(this.init.data) +
        "</table>";
      element.innerHTML = table;
    }
  }

  export default Table;

  // const table = new Table({
  //   columns: ["Nama", "Jenis", "Harga", "Stok"],
  //   data: [
  //     ["Kopi Susu Regal", "Coffee", 15000, 12],
  //     ["Kopi Susu Brown Sugar", "Coffee", 12000, 15],
  //     ["Cold Chocolate", "Non-Coffee", 10000, 10],
  //     ["Muscle Memory", "Coffee", 15000, 7],
  //     ["Warm Sunset", "Mocktail", 15000, 12]
  //   ]
  // });

  // const app = document.getElementById("app");
  // table.render(app);
  