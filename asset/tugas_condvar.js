const asset = [
    {
        nama : 'Desire',
        modal : 10000
    },
    {
        nama : 'StressWire',
        modal : 20000
    },
    {
        nama : "Aphrodite's Essence",
        modal : 50000
    }
]

const listAsset = asset.map((brand)=> ' Brand ' + brand.nama)
console.log(listAsset);

const listModal = asset.filter((mod)=> mod.modal < 50000)
console.log(listModal);