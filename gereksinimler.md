# Akıllı Yemek Tarifi Uygulaması - Gereksinim Analizi ve Belgeleme

Bu belge, **Mobil Uygulama Sihirbazları** ekibi tarafından geliştirilen Akıllı Yemek Tarifi Uygulaması'nın temel gereksinimlerini ve önceliklendirme detaylarını içermektedir.

---

## 1. Kullanıcı Araştırması Özeti
Gereksinimleri belirlemek amacıyla potansiyel kullanıcılarla yapılan görüşmeler sonucunda şu temel ihtiyaçlar saptanmıştır:
* **İsrafı Önleme:** Evdeki malzemeleri değerlendirme isteği.
* **Sağlık Takibi:** Kalori ve besin değeri hesaplama zorunluluğu.
* **Zaman Yönetimi:** Hızlı ve pratik tariflere erişim.

---

## 2. Fonksiyonel Gereksinimler (Functional Requirements)
Uygulamanın gerçekleştirmesi gereken temel işlevler aşağıda **MoSCoW** yöntemiyle listelenmiştir.

| ID | Gereksinim Tanımı | Öncelik (MoSCoW) |
| :--- | :--- | :--- |
| **FR1** | Kullanıcılar eldeki malzemeleri sisteme girebilmelidir. | **Must (Zorunlu)** |
| **FR2** | Sistem, malzemelere uygun tarifleri listelemelidir. | **Must (Zorunlu)** |
| **FR3** | Tariflerin besin değerleri (kalori, makrolar) gösterilmelidir. | **Must (Zorunlu)** |
| **FR4** | Kullanıcılar diyet hedeflerine göre profil oluşturabilmelidir. | **Should (Olmalı)** |
| **FR5** | Tarifler süre ve zorluk seviyesine göre filtrelenebilmelidir. | **Should (Olmalı)** |
| **FR6** | Beğenilen tarifler favorilere eklenebilmelidir. | **Could (Olsa İyi Olur)** |
| **FR7** | Eksik malzemeler için otomatik alışveriş listesi oluşturulmalıdır. | **Could (Olsa İyi Olur)** |

---

## 3. Fonksiyonel Olmayan Gereksinimler (Non-Functional Requirements)
Sistemin kalite standartlarını belirleyen teknik özellikler:

* **Performans:** Arama sonuçları 2 saniyenin altında listelenmelidir.
* **Kullanılabilirlik:** Arayüz sade ve her yaş grubuna hitap edecek şekilde (UX odaklı) tasarlanmalıdır.
* **Güvenlik:** Kullanıcı verileri Firebase üzerinde şifrelenmiş olarak saklanmalıdır.
* **Platform:** React Native ile hem iOS hem de Android platformlarında çalışmalıdır.

---
