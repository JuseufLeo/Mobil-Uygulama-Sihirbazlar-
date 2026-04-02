# Akıllı Yemek Tarifi Uygulaması - Veritabanı Şeması (MongoDB)

Bu doküman, uygulamanın temel veri modellerini, veri tiplerini ve koleksiyonlar arası ilişkileri (NoSQL yapısına uygun olarak) tanımlar. Mongoose ODM standartları baz alınmıştır.

## 1. Kullanıcılar (Users) Koleksiyonu
Kullanıcı profil, hedef ve favori bilgilerini tutar.
* **`_id`**: ObjectId (Otomatik)
* **`adSoyad`**: String (Zorunlu)
* **`email`**: String (Zorunlu, Benzersiz - Unique Index)
* **`sifreHash`**: String (Zorunlu)
* **`diyetHedefleri`**: Array of Strings (Örn: ["Kilo Verme", "Yüksek Protein"])
* **`favoriTarifler`**: Array of ObjectIds (Ref: 'Recipes')

## 2. Tarifler (Recipes) Koleksiyonu
Uygulamanın ana verisidir. Arama performansını artırmak için malzemeler üzerinde indeksleme yapılacaktır.
* **`_id`**: ObjectId (Otomatik)
* **`baslik`**: String (Zorunlu)
* **`aciklama`**: String
* **`hazirlanmaSuresi`**: Number (Dakika cinsinden)
* **`malzemeler`**: Array of Strings (Zorunlu, İndeksli - Arama API'si için kritik)
  * *Örn: ["domates", "yumurta", "zeytinyağı"]*
* **`adimlar`**: Array of Strings (Yapılış aşamaları)
* **`besinDegerleri`**: Object (Zorunlu)
  * `kalori`: Number
  * `protein`: Number
  * `karbonhidrat`: Number
  * `yag`: Number
* **`diyetEtiketleri`**: Array of Strings (Örn: ["Vegan", "Glutensiz"])

## 3. Diyet Planları (DietPlans) Koleksiyonu
Kişiselleştirilmiş günlük/haftalık planları tutar.
* **`_id`**: ObjectId (Otomatik)
* **`kullaniciId`**: ObjectId (Ref: 'Users', Zorunlu)
* **`planTarihi`**: Date (Zorunlu)
* **`ogunler`**: Object
  * `kahvalti`: Array of ObjectIds (Ref: 'Recipes')
  * `ogleYemegi`: Array of ObjectIds (Ref: 'Recipes')
  * `aksamYemegi`: Array of ObjectIds (Ref: 'Recipes')
* **`toplamKaloriHedefi`**: Number
