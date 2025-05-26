
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TermsConditions = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-tani-green mb-4">Syarat dan Ketentuan</h1>
          <p className="text-gray-600">Terakhir diperbarui: 26 Mei 2025</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">1. Penerimaan Syarat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Dengan menggunakan platform IPINI, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. 
                Jika Anda tidak menyetujui bagian mana pun dari syarat ini, maka Anda tidak diizinkan untuk menggunakan layanan kami.
              </p>
              <p>
                Platform IPINI adalah marketplace digital yang menghubungkan petani dengan pembeli serta menyediakan 
                edukasi pertanian modern untuk mendukung digitalisasi sektor pertanian Indonesia.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">2. Definisi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>"Platform"</strong> mengacu pada website dan aplikasi IPINI</li>
                <li><strong>"Pengguna"</strong> adalah setiap individu atau entitas yang menggunakan layanan kami</li>
                <li><strong>"Penjual"</strong> adalah petani atau pedagang yang menjual produk melalui platform</li>
                <li><strong>"Pembeli"</strong> adalah pengguna yang membeli produk melalui platform</li>
                <li><strong>"Produk"</strong> adalah barang pertanian yang dijual melalui platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">3. Pendaftaran dan Akun</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>3.1 Kelayakan:</strong> Anda harus berusia minimal 17 tahun atau memiliki persetujuan orang tua/wali 
                untuk menggunakan layanan kami.
              </p>
              <p>
                <strong>3.2 Informasi Akun:</strong> Anda bertanggung jawab untuk memberikan informasi yang akurat, 
                lengkap, dan terkini saat mendaftar dan memperbarui akun Anda.
              </p>
              <p>
                <strong>3.3 Keamanan Akun:</strong> Anda bertanggung jawab untuk menjaga kerahasiaan kata sandi 
                dan semua aktivitas yang terjadi di akun Anda.
              </p>
              <p>
                <strong>3.4 Akun Tunggal:</strong> Setiap pengguna hanya diizinkan memiliki satu akun aktif.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">4. Penggunaan Platform</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p><strong>4.1 Penggunaan yang Diizinkan:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Membeli dan menjual produk pertanian yang sah</li>
                <li>Mengakses konten edukasi pertanian</li>
                <li>Berkomunikasi dengan pengguna lain melalui sistem pesan platform</li>
                <li>Memberikan ulasan dan penilaian yang jujur</li>
              </ul>
              
              <p><strong>4.2 Penggunaan yang Dilarang:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Menjual produk ilegal, berbahaya, atau palsu</li>
                <li>Melakukan penipuan atau aktivitas menyesatkan</li>
                <li>Menggunakan platform untuk tujuan selain yang dimaksudkan</li>
                <li>Melanggar hak kekayaan intelektual orang lain</li>
                <li>Mengirim spam atau konten yang tidak pantas</li>
                <li>Melakukan aktivitas yang dapat merusak platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">5. Transaksi dan Pembayaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>5.1 Kontrak Jual Beli:</strong> Setiap transaksi merupakan kontrak langsung antara 
                penjual dan pembeli. IPINI berperan sebagai fasilitator.
              </p>
              <p>
                <strong>5.2 Harga dan Pembayaran:</strong> Harga yang tercantum sudah termasuk pajak yang berlaku. 
                Pembayaran dilakukan melalui metode yang tersedia di platform.
              </p>
              <p>
                <strong>5.3 Biaya Layanan:</strong> IPINI dapat mengenakan biaya layanan untuk setiap transaksi 
                yang akan diinformasikan secara transparan.
              </p>
              <p>
                <strong>5.4 Pengembalian Dana:</strong> Kebijakan pengembalian dana berlaku sesuai dengan 
                ketentuan yang berlaku untuk setiap jenis produk.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">6. Kualitas Produk dan Garansi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>6.1 Tanggung Jawab Penjual:</strong> Penjual bertanggung jawab penuh atas kualitas, 
                keaslian, dan keamanan produk yang dijual.
              </p>
              <p>
                <strong>6.2 Deskripsi Produk:</strong> Penjual wajib memberikan deskripsi produk yang akurat 
                dan lengkap termasuk kondisi, asal, dan metode budidaya.
              </p>
              <p>
                <strong>6.3 Standar Kualitas:</strong> Semua produk harus memenuhi standar keamanan pangan 
                dan regulasi yang berlaku di Indonesia.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">7. Pengiriman dan Penerimaan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>7.1 Metode Pengiriman:</strong> Pengiriman dilakukan melalui mitra logistik yang 
                telah bekerja sama dengan IPINI.
              </p>
              <p>
                <strong>7.2 Waktu Pengiriman:</strong> Estimasi waktu pengiriman bersifat perkiraan dan 
                dapat berubah karena faktor eksternal.
              </p>
              <p>
                <strong>7.3 Risiko Pengiriman:</strong> Risiko kerusakan atau kehilangan selama pengiriman 
                akan ditanggung sesuai dengan kebijakan mitra logistik.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">8. Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>8.1 Konten Platform:</strong> Semua konten di platform IPINI, termasuk desain, 
                logo, dan materi edukasi dilindungi hak cipta.
              </p>
              <p>
                <strong>8.2 Konten Pengguna:</strong> Dengan mengunggah konten, Anda memberikan IPINI 
                lisensi non-eksklusif untuk menggunakan konten tersebut dalam operasional platform.
              </p>
              <p>
                <strong>8.3 Pelanggaran:</strong> Kami akan merespons klaim pelanggaran hak kekayaan 
                intelektual sesuai dengan hukum yang berlaku.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">9. Privasi dan Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>9.1 Pengumpulan Data:</strong> Kami mengumpulkan dan memproses data pribadi sesuai 
                dengan Kebijakan Privasi kami.
              </p>
              <p>
                <strong>9.2 Keamanan Data:</strong> Kami menerapkan langkah-langkah keamanan yang wajar 
                untuk melindungi data pengguna.
              </p>
              <p>
                <strong>9.3 Berbagi Data:</strong> Data pribadi tidak akan dibagikan kepada pihak ketiga 
                tanpa persetujuan, kecuali yang diperlukan untuk operasional platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">10. Pembatasan Tanggung Jawab</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>10.1 Peran Platform:</strong> IPINI berperan sebagai fasilitator dan tidak bertanggung 
                jawab atas kualitas produk atau tindakan pengguna.
              </p>
              <p>
                <strong>10.2 Kerugian:</strong> IPINI tidak bertanggung jawab atas kerugian tidak langsung, 
                insidental, atau konsekuensial yang mungkin timbul.
              </p>
              <p>
                <strong>10.3 Batas Tanggung Jawab:</strong> Tanggung jawab IPINI dibatasi hingga jumlah 
                biaya layanan yang dibayarkan untuk transaksi terkait.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">11. Penyelesaian Sengketa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>11.1 Mediasi:</strong> Sengketa akan diselesaikan melalui mediasi internal terlebih dahulu.
              </p>
              <p>
                <strong>11.2 Hukum yang Berlaku:</strong> Syarat dan ketentuan ini diatur oleh hukum 
                Republik Indonesia.
              </p>
              <p>
                <strong>11.3 Yurisdiksi:</strong> Pengadilan Jakarta Selatan memiliki yurisdiksi eksklusif 
                untuk menyelesaikan sengketa yang tidak dapat diselesaikan melalui mediasi.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">12. Perubahan Syarat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                IPINI berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan diberitahukan 
                melalui email atau pemberitahuan di platform minimal 7 hari sebelum berlaku.
              </p>
              <p>
                Penggunaan berkelanjutan platform setelah perubahan syarat menandakan persetujuan Anda 
                terhadap syarat yang baru.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">13. Pemutusan Layanan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>13.1 Pemutusan oleh Pengguna:</strong> Anda dapat menghentikan penggunaan layanan 
                kapan saja dengan menghapus akun Anda.
              </p>
              <p>
                <strong>13.2 Pemutusan oleh IPINI:</strong> Kami dapat menutup akun yang melanggar syarat 
                dan ketentuan tanpa pemberitahuan sebelumnya.
              </p>
              <p>
                <strong>13.3 Akibat Pemutusan:</strong> Setelah pemutusan, akses ke platform akan dihentikan 
                dan data dapat dihapus sesuai kebijakan retensi data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-tani-green">14. Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p><strong>Email:</strong> legal@ipini.com</p>
                <p><strong>Telepon:</strong> +62 812 3456 7890</p>
                <p><strong>Alamat:</strong> Jl. Pertanian No. 123, Jakarta Selatan, 12345</p>
                <p><strong>Jam Operasional:</strong> Senin - Jumat, 09:00 - 17:00 WIB</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />
        
        <div className="text-center text-sm text-gray-600">
          <p>
            Dengan menggunakan platform IPINI, Anda menyatakan bahwa Anda telah membaca, 
            memahami, dan menyetujui semua syarat dan ketentuan yang berlaku.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;
