document.getElementById('tambah-gerbong').addEventListener('click', function() {
    var namaGerbong = document.getElementById('nama-gerbong').value;
    
    if (namaGerbong.trim() === "") {
        alert("Nama gerbong tidak boleh kosong!");
        return;
    }
    
    var kereta = document.getElementById('kereta');
    var gerbongBaru = document.createElement('div');
    gerbongBaru.className = 'gerbong';
    var spanNama = document.createElement('span');
    spanNama.innerText = namaGerbong; 
    gerbongBaru.appendChild(spanNama);
    kereta.appendChild(gerbongBaru);
    document.getElementById('nama-gerbong').value = '';
});
