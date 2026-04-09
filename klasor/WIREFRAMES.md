# Akıllı Yemek Tarifi Uygulaması - UI/UX Wireframe Tasarımı

Bu doküman, uygulamanın kullanıcı arayüzü mimarisini ve ekran akışlarını tanımlar. Tasarımlar düşük sadakatli (Low-Fidelity) wireframe prensiplerine uygun olarak hazırlanmıştır.

## 1. Ekran Hiyerarşisi
* **Splash Screen:** Logo ve karşılama.
* **Onboarding:** Kullanıcı diyet hedeflerinin belirlenmesi.
* **Ana Sayfa (Malzeme Ekleme):** Dinamik malzeme giriş alanı.
* **Tarif Rehberi:** Algoritma tarafından önerilen tarifler.
* **Detay Sayfası:** Kalori cetveli ve hazırlanış adımları.

## 2. Tasarım Bileşenleri
* **Renk Paleti:** Mutfak ve sağlığı temsil eden Yeşil (#4CAF50) ve Beyaz tonları.
* **Tipografi:** Okunabilirliği yüksek Sans-serif fontlar (Örn: Roboto).
* **Navigasyon:** Alt menü (Bottom Navigation Bar) - [Ana Sayfa, Tarifler, Favoriler, Profil].

## 3. Wireframe Çizimleri

| | | |
|:---:|:---:|:---:|
| <img width="250" alt="image1" src="https://github.com/user-attachments/assets/6d1b68fa-edbc-4350-8b71-05f70f5d23bb" /> | <img width="250" alt="image2" src="https://github.com/user-attachments/assets/6c1d1549-63cc-4316-a3c4-b1a2fe07a0b0" /> | <img width="250" alt="image3" src="https://github.com/user-attachments/assets/d5be931e-2634-4800-9a89-7b9222b2977b" /> |
| <img width="250" alt="image4" src="https://github.com/user-attachments/assets/1118dbb8-e786-4a46-9046-559d81c955e6" /> | <img width="250" alt="image5" src="https://github.com/user-attachments/assets/94fc28b9-f82b-4adb-a9b1-95b6ae2d6fde" /> | <img width="250" alt="image6" src="https://github.com/user-attachments/assets/e2f2661a-5d1a-4213-bbd3-2ef42723f3f0" /> |

### Ekran Detayları (Soldan Sağa, Üstten Alta):

1. **Hedef Belirleme (Onboarding):** Kullanıcının beslenme hedeflerini seçtiği başlangıç ekranı. Kas geliştirme, sağlıklı yaşam, kilo verme gibi çoklu seçim imkanı sunarak uygulamanın önereceği tariflerin kişiselleştirilmesini sağlar.
2. **Ana Sayfa (Malzeme Ekleme):** "Merhaba, Şef!" karşılamasıyla açılan dinamik arama panosu. "Sepetindeki Malzemeler" bölümü ile kullanıcının sisteme girdiği ürünleri (örn: domates, yumurta, süt) etiketler halinde listeler ve tek tıkla akıllı tarif arama motorunu tetikler.
3. **Önerilen Tarifler (Liste Görünümü):** Girilen malzemelere göre algoritma tarafından filtrelenen sonuç ekranı. Her tarif kartı; görsel, hazırlama süresi, toplam kalori miktarı ve spesifik diyet etiketleri (Vegan, Yüksek Protein, Ketojenik vb.) ile zenginleştirilerek kullanıcının hızlı karar vermesini kolaylaştırır.
4. **Tarif Detay Sayfası:** Seçilen spesifik yemeğin (örn: Izgara Tavuk ve Sebze) kapsamlı inceleme alanı. Ekranın merkezinde protein, karbonhidrat ve yağ oranlarını net bir şekilde gösteren dairesel bir "Makro Dağılımı" grafiği bulunur. Alt kısımda ise yemeğin içeriği ve adımları "Malzemeler" ve "Hazırlanış" şeklinde sekmeli (tab) bir yapıyla sunulur.
5. **Favoriler Ekranı:** Kullanıcının daha sonra hızlıca erişmek için kalp ikonuyla kaydettiği tariflerin saklandığı sekme. Görselde, menünün henüz boş olduğunu kullanıcıya kibarca bildiren, UX standartlarına uygun bir "Boş Durum" (Empty State) tasarımı sergilenmektedir.
6. **Kullanıcı Profili:** Kişisel hesap yönetiminin yapıldığı alan. Kullanıcının aktif diyet programları rozetler halinde profiline entegre edilmiştir. Alt menüde ise ayarlar, bildirim yönetimi ve çıkış yapma gibi temel hesap fonksiyonları yer alır.
