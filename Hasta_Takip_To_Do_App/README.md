# 🏥 Hasta Takip Sistemi – To Do App

React tabanlı, hasta ve ilaç takibini kolaylaştırmak için geliştirilmiş bir web uygulamasıdır. Her hasta için ilaç listesi (to-do) oluşturulabilir; bu listeler düzenlenebilir, tamamlandı olarak işaretlenebilir ve silinebilir.

---

## 🚀 Canlı Geliştirme Sunucusu

Uygulama, aşağıdaki adreste çalışır:

```
http://localhost:5173
```

> Vite yapılandırmasında port `5173` olarak ayarlanmıştır (`vite.config.js`).

---

## 📋 Özellikler

- **Dashboard** – Toplam hasta sayısı, ortalama yaş ve toplam ilaç sayısını anlık gösterir.
- **Hasta Ekleme** – Kimlik numarası, isim soyisim ve yaş bilgileriyle yeni hasta kaydı oluşturulabilir.
- **Hasta Düzenleme / Silme** – Mevcut hasta bilgileri güncellenebilir ya da hasta sistemden kaldırılabilir.
- **İlaç (To-Do) Yönetimi** – Her hastaya özel ilaç/görev listesi eklenebilir, düzenlenebilir, tamamlandı işaretlenebilir veya silinebilir.
- **Yenile Butonu** – Sayfayı yenileyerek verileri başlangıç durumuna sıfırlar.
- **Responsive Tasarım** – Grid tabanlı düzen sayesinde farklı ekran boyutlarına uyum sağlar.

---

## 🗂️ Proje Yapısı

**public/**
- `favicon.svg` – Uygulama ikonu
- `icons.svg` – Genel ikonlar

**src/assets/**
- Görseller ve statik dosyalar

**src/Components/**
- `AddPatientForm.jsx` – Yeni hasta ekleme formu
- `AddTodoForm.jsx` – Yeni ilaç/görev ekleme formu
- `PatientCard.jsx` – Hasta kartı (düzenleme, silme, ilaç listesi)
- `PatientList.jsx` – Hasta kartlarını listeleyen grid
- `TodoItem.jsx` – Tekil ilaç/görev satırı
- `TodoList.jsx` – İlaç/görev listesi

**src/Interfaces/**
- `Patient.js` – Patient ve Todo veri modelleri

**src/Pages/**
- `HomePage.jsx` – Ana sayfa (dashboard + hasta listesi)
- `PatientDetailPage.jsx` – Hasta detay sayfası

**src/**
- `App.jsx` – Uygulama kökü, state yönetimi ve router
- `App.css` / `index.css` – Stil dosyaları
- `main.jsx` – Uygulama giriş noktası

**Kök dizin:**
- `index.html`, `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|---|---|---|
| React | 19 | Kullanıcı arayüzü |
| React Router DOM | 7 | Sayfa yönlendirme |
| Vite | 8 | Geliştirme sunucusu ve derleme |
| Tailwind CSS | 4 | Stil ve responsive tasarım |
| ESLint | 9 | Kod kalitesi |

---

## ⚙️ Kurulum ve Çalıştırma

### Gereksinimler

- [Node.js](https://nodejs.org/) (v18 veya üzeri önerilir)
- npm

### Adımlar

```bash
# 1. Proje klasörüne gir
cd Hasta_Takip_To_Do_App

# 2. Bağımlılıkları yükle
npm install

# 3. Geliştirme sunucusunu başlat
npm run dev
```

Sunucu başladıktan sonra tarayıcınızda şu adresi açın:

```
http://localhost:5173
```

### Diğer Komutlar

```bash
# Üretim derlemesi oluştur
npm run build

# Üretim derlemesini önizle
npm run preview

# Kod lint kontrolü
npm run lint
```

---

## 🧩 Bileşen Açıklamaları

### `App.jsx`
Uygulamanın ana bileşeni. `patients` state'ini tutar, React Router ile sayfaları yönetir. Hasta ekleme, güncelleme, silme ve sıfırlama fonksiyonlarını tanımlar ve alt bileşenlere prop olarak iletir.

### `HomePage.jsx`
Dashboard istatistiklerini (toplam hasta, ortalama yaş, toplam ilaç) hesaplar ve gösterir. `AddPatientForm` ve `PatientList` bileşenlerini barındırır.

### `PatientCard.jsx`
Her hasta için ad-soyad, yaş, kimlik numarası ve ilaç listesini gösteren kart. Düzenleme modu ile hasta bilgileri güncellenebilir.

### `TodoList.jsx` & `TodoItem.jsx`
Bir hastanın ilaç/görev listesini yönetir. Tamamlama (checkbox), düzenleme ve silme işlemlerini destekler.

### `AddPatientForm.jsx`
Kimlik numarası (yalnızca rakam), isim soyisim ve yaş alanlarıyla yeni hasta kaydı oluşturur.

### `AddTodoForm.jsx`
Seçili hastaya yeni ilaç veya görev eklemek için kullanılan form.

### `Patient.js`
`Patient` ve `Todo` veri modellerini tanımlayan arayüz dosyası.

---

## 📊 Veri Modeli

```js
// Hasta
{
  id: string,
  name: string,
  age: number,
  identityNumber: string,
  todos: Todo[]
}

// İlaç / Görev
{
  id: string,
  text: string,
  completed: boolean
}
```

> **Not:** Uygulama veriyi tarayıcı belleğinde (React state) tutar. Sayfa yenilendiğinde veriler başlangıç değerlerine döner; kalıcı depolama için backend veya localStorage entegrasyonu gereklidir.

---

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.
