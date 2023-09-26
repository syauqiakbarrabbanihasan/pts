//looping
let pilihan = true
while(pilihan){

    // ambil pilihan player
    let p = prompt('Ayo pilih mau kertas, batu, gunting ?');

    // ambil pilihan komputer (menggunakan bilangan Random)
    let comp = Math.random();

    if( comp < 0.34){
        comp = 'kertas';
    } else if ( comp >= 0.34 && comp < 0.67) {
        comp = 'batu';
    } else {
        comp = 'gunting';
    }

    
    // Tentukan Aturan Main
    let hasil = '';

    if ( p == comp) {
        hasil = 'seri';
    } else if ( p == 'kertas'){
        hasil = (comp == 'batu') ? 'Anda Menang' : 'Komputer Menang';
    } else if ( p == 'batu'){
        hasil = (comp == 'gunting') ? 'Anda Menang' : 'komputer Menang';
    } else if ( p == 'gunting'){
        hasil = (comp == 'kertas') ? 'Anda Menang' : 'Komputer Menang';
    } else {
        hasil = 'BISA MAINNYA GAK SIH?!!!!!';
    }

    // consosle.log('Anda pilih : ' + p);
    // console.log('komp pilih : ' + comp);
    // console.log('hasilnya : ' + hasil);

    // Tampilkan hasilnya
    alert('Anda pilih : ' + p + '\nKomputer pilih : ' + comp + '\nHasilnya : ' + hasil);

    pilihan = confirm('Mau Main Lagi ?');

}

alert('TerimaKasih Sudah Main');