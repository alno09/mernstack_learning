const barang = {
    merk: 'INDOMILK',
    varian: 'Full Cream Plain',
    ukuran: '950ml',
    jenisBarang: 'minuman'
}

function infoSusu({merk:m, varian:v, ukuran:u, jenisBarang:jb = 'makanan'}) {
    console.log(m, v, jb)
}

infoSusu(barang)