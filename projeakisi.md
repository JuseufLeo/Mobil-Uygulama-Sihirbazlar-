# 📱 AKILLI YEMEK TARİFİ UYGULAMASI  
## 📋 Proje Analizi ve Kapsam Tanımı

**Hazırlayan:** Yusuf Aslan  
**Tarih:** 12 Mart 2026  

---

## 👥 Proje Ekibi

### 👤 Yusuf Aslan (Proje Yöneticisi)
### 👤 İbrahim Seha Doğan
### 👤 Emire Şeker
### 👤 Said Bestil
### 👤 Berfin Beril Dere

---

## 📌 Proje Açıklaması

Akıllı Yemek Tarifi Uygulaması, kullanıcıların sahip oldukları malzemeleri en verimli şekilde değerlendirmelerine yardımcı olan, aynı zamanda sağlıklı beslenme alışkanlıklarını destekleyen yenilikçi bir mobil uygulamadır.

Bu uygulama, kullanıcıların ellerindeki mevcut malzemeleri analiz ederek uygun yemek tarifleri sunar, eksik malzemeleri belirler ve tariflerin besin değerlerini detaylı bir şekilde hesaplar. Ayrıca kullanıcıların kişisel hedeflerine (kilo verme, kilo alma, sağlıklı yaşam vb.) uygun olarak özelleştirilmiş diyet planları oluşturmasına olanak tanır.

Modern teknolojiler kullanılarak geliştirilecek olan bu uygulama, kullanıcı dostu arayüzü, hızlı performansı ve akıllı öneri sistemi ile günlük yemek planlamasını kolaylaştırmayı hedeflemektedir.

Proje kapsamında geliştirilecek sistem, hem bireysel kullanıcıların ihtiyaçlarına çözüm sunacak hem de sürdürülebilir ve sağlıklı yaşam alışkanlıklarının yaygınlaşmasına katkı sağlayacaktır.

---

## 🎯 Proje Amacı

Bu projenin amacı, kullanıcıların ellerinde bulunan malzemelere göre yemek tarifleri öneren, besin değerlerini analiz eden ve kişiye özel diyet planları oluşturan **akıllı ve kullanıcı dostu bir mobil uygulama** geliştirmektir.

Uygulama sayesinde kullanıcılar:  
- Evdeki malzemeleri verimli kullanabilir  
- Sağlıklı beslenme alışkanlıkları kazanabilir  
- Zaman ve maliyet tasarrufu sağlayabilir  

---

## 🌍 Proje Kapsamı

Bu mobil uygulama hem **iOS hem Android platformlarında** çalışacaktır.

### Kapsam Dahilinde:
- Kullanıcı kayıt ve giriş sistemi  
- Malzeme bazlı tarif öneri sistemi  
- Tarif detay sayfaları  
- Besin değeri hesaplama (kalori, protein vb.)  
- Kişiselleştirilmiş diyet planları  
- Favorilere ekleme sistemi  
- Kullanıcı profil yönetimi  

### Kapsam Dışında:
- Canlı diyetisyen desteği  
- Market entegrasyonu  
- Online sipariş sistemi  

---

## ⚙️ Temel İşlevler

### 👤 Kullanıcı Yönetimi
- Kayıt olma (Email / Firebase Auth)  
- Giriş yapma  
- Şifre sıfırlama  
- Profil düzenleme  

---

### 🥦 Malzeme Girişi
- Kullanıcı sahip olduğu malzemeleri seçer veya yazar  
- Sistem bu verilere göre analiz yapar  

---

### 🍽️ Tarif Öneri Sistemi
- Girilen malzemelere uygun tarifleri listeler  
- Eksik malzemeleri gösterir  
- Tarifleri filtreleme (vegan, düşük kalorili vb.)  

---

### 📖 Tarif Detay Sayfası
- Tarif adı  
- Malzeme listesi  
- Hazırlanış adımları  
- Pişirme süresi  
- Besin değerleri  

---

### 🔢 Besin Değeri Hesaplama
- Kalori  
- Protein  
- Karbonhidrat  
- Yağ  

---

### 🥗 Diyet Planı Oluşturma
- Kullanıcı hedef seçer (kilo verme, alma vb.)  
- Sistem günlük/haftalık plan önerir  

---

### ⭐ Favori Sistemi
- Tarifleri kaydetme  
- Daha sonra erişim  

---

## 👥 Kullanıcı Türleri

### 👤 Standart Kullanıcı
- Tarif arar  
- Diyet planı oluşturur  
- Favori listesi oluşturur  

---

### 🛠️ Yönetici (Opsiyonel)
- Tarif ekleme/düzenleme  
- Kullanıcı yönetimi  

---

## 🎭 Kullanıcı Senaryoları

### 📌 Senaryo 1: Tarif Bulma
Kullanıcı uygulamaya giriş yapar →  
Elindeki malzemeleri girer →  
Sistem uygun tarifleri listeler →  
Kullanıcı bir tarifi seçer ve görüntüler  

---

### 📌 Senaryo 2: Diyet Planı Oluşturma
Kullanıcı profil bilgilerini girer →  
Hedefini seçer (kilo verme vb.) →  
Sistem kişisel diyet planı oluşturur  

---

### 📌 Senaryo 3: Favorilere Ekleme
Kullanıcı bir tarifi beğenir →  
“Favorilere ekle” butonuna basar →  
Tarif kaydedilir  

---

### 📌 Senaryo 4: Besin Değeri Görüntüleme
Kullanıcı bir tarifi açar →  
Besin değerlerini görüntüler  

---

## 🧠 Sistem Gereksinimleri

### ✅ Fonksiyonel Gereksinimler
- Kullanıcı kayıt/giriş yapabilmeli  
- Malzeme girerek tarif arayabilmeli  
- Tarif detaylarını görüntüleyebilmeli  
- Diyet planı oluşturabilmeli  
- Favori listesi oluşturabilmeli  

---

### ⚡ Fonksiyonel Olmayan Gereksinimler
- Hızlı ve akıcı kullanıcı deneyimi  
- Mobil uyumlu tasarım  
- Güvenli veri saklama (Firebase & MongoDB)  
- Ölçeklenebilir backend mimarisi  

---

## 🏗️ Teknoloji Yığını

- **Frontend:** React Native  
- **Backend:** Node.js + Express.js  
- **Veritabanı:** MongoDB  
- **Authentication & Bildirim:** Firebase  

---

## 📊 Başarı Kriterleri

- Kullanıcıların hızlı şekilde tarif bulabilmesi  
- Doğru besin değeri hesaplama  
- Stabil çalışan mobil uygulama  
- Kullanıcı dostu arayüz  

---

## ⚠️ Riskler ve Önlemler

| Risk | Önlem |
|------|------|
| Yanlış tarif önerileri | Algoritma iyileştirme |
| Performans sorunları | Backend optimizasyonu |
| Veri güvenliği | Firebase Auth + güvenli API |

---

## 📌 Sonuç

Bu proje, kullanıcıların günlük yaşamlarını kolaylaştıran, sağlıklı beslenmelerine katkı sağlayan ve teknolojiyi pratik bir şekilde kullanan yenilikçi bir mobil uygulama sunmayı hedeflemektedir.

---

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

# 📱 AKILLI YEMEK TARİFİ UYGULAMASI  
## 👤 Kullanıcı Hikayeleri Analizi ve Önceliklendirme

**Hazırlayan:** Yusuf Aslan  
**Tarih:** 9 Nisan 2026  

---

## 📌 Amaç

Bu dokümanın amacı, mobil uygulama için belirlenen kullanıcı hikayelerini analiz etmek, uygulanabilirliklerini değerlendirmek ve MoSCoW yöntemi ile önceliklendirmektir.

---

## 👥 Kullanıcı Hikayeleri

### 🥗 Hikaye 1: Malzemeye Göre Tarif Bulma
**Açıklama:**  
Kullanıcı olarak elimdeki malzemeleri girerek uygun yemek tariflerini görmek istiyorum.

- **Kullanıcı Değeri:** ⭐⭐⭐⭐⭐  
- **Teknik Zorluk:** ⭐⭐⭐  
- **Öncelik:** 🔴 Çok Yüksek  

---

### 🔐 Hikaye 2: Kullanıcı Kayıt ve Giriş
**Açıklama:**  
Kullanıcı olarak hesap oluşturmak ve giriş yapmak istiyorum.

- **Kullanıcı Değeri:** ⭐⭐⭐⭐⭐  
- **Teknik Zorluk:** ⭐⭐  
- **Öncelik:** 🔴 Çok Yüksek  

---

### 📖 Hikaye 3: Tarif Detaylarını Görüntüleme
**Açıklama:**  
Kullanıcı olarak seçtiğim tarifin detaylarını görmek istiyorum.

- **Kullanıcı Değeri:** ⭐⭐⭐⭐⭐  
- **Teknik Zorluk:** ⭐⭐  
- **Öncelik:** 🔴 Çok Yüksek  

---

### 🔢 Hikaye 4: Besin Değerlerini Görme
**Açıklama:**  
Kullanıcı olarak yemeklerin kalori ve besin değerlerini görmek istiyorum.

- **Kullanıcı Değeri:** ⭐⭐⭐⭐  
- **Teknik Zorluk:** ⭐⭐⭐  
- **Öncelik:** 🟡 Yüksek  

---

### 🥗 Hikaye 5: Diyet Planı Oluşturma
**Açıklama:**  
Kullanıcı olarak hedefime uygun diyet planı oluşturmak istiyorum.

- **Kullanıcı Değeri:** ⭐⭐⭐⭐⭐  
- **Teknik Zorluk:** ⭐⭐⭐⭐  
- **Öncelik:** 🟡 Yüksek  

---

### ⭐ Hikaye 6: Favorilere Ekleme
**Açıklama:**  
Kullanıcı olarak beğendiğim tarifleri kaydetmek istiyorum.

- **Kullanıcı Değeri:** ⭐⭐⭐⭐  
- **Teknik Zorluk:** ⭐⭐  
- **Öncelik:** 🟢 Orta  

---

### 🔍 Hikaye 7: Tarif Filtreleme
**Açıklama:**  
Kullanıcı olarak tarifleri kategoriye göre filtrelemek istiyorum.

- **Kullanıcı Değeri:** ⭐⭐⭐  
- **Teknik Zorluk:** ⭐⭐  
- **Öncelik:** 🟢 Orta  

---

### 🔔 Hikaye 8: Bildirim Alma
**Açıklama:**  
Kullanıcı olarak yeni tarifler hakkında bildirim almak istiyorum.

- **Kullanıcı Değeri:** ⭐⭐⭐  
- **Teknik Zorluk:** ⭐⭐⭐  
- **Öncelik:** 🔵 Düşük  

---

## 📊 MoSCoW Önceliklendirme

### 🔴 MUST HAVE (Olmazsa Olmaz)
- Kullanıcı kayıt ve giriş sistemi  
- Malzemeye göre tarif önerme  
- Tarif detay sayfası  

---

### 🟡 SHOULD HAVE (Olmalı)
- Besin değeri gösterimi  
- Diyet planı oluşturma  

---

### 🟢 COULD HAVE (Olursa İyi Olur)
- Favorilere ekleme  
- Tarif filtreleme  

---

### 🔵 WON’T HAVE (Şimdilik Olmayacak)
- Bildirim sistemi  
- Gelişmiş AI öneri sistemi  

---

## 🧠 Genel Değerlendirme

Projede en kritik özellikler kullanıcıların hızlı ve doğru şekilde tarif bulmasını sağlayan sistemlerdir. Bu nedenle çekirdek fonksiyonlar (tarif önerme, kullanıcı yönetimi) en yüksek önceliğe sahiptir.

Diyet planı ve besin değerleri gibi özellikler uygulamaya değer katarken, bildirim sistemi gibi özellikler sonraki sürümlere bırakılmıştır.

---

## 📌 Sonuç

MoSCoW yöntemi ile yapılan bu önceliklendirme sayesinde geliştirme süreci daha planlı ve verimli hale getirilmiştir. Öncelikle temel işlevler geliştirilerek uygulamanın çalışır bir versiyonu oluşturulacak, ardından ek özellikler aşamalı olarak eklenecektir.

---
