# 📱 AKILLI YEMEK TARİFİ UYGULAMASI  
## 📋 Proje Analizi ve Kapsam Tanımı

**Hazırlayan:** Yusuf Aslan  
**Tarih:** 12 Mart 2026  

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
