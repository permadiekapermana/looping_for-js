var jumlahAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
    if( noAngkot <= angkotBeroperasi ){
        console.log(`Angkot no. ${noAngkot} sedang beroperasi.`);
    } else {
        console.log(`Angkot no ${noAngkot} tidak sedang beroperasi.`)
    }
}