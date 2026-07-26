// ============ Kamus terjemahan ============
const translations = {
  "0": { // Bahasa Malaysia
    brand_sub: "Gerbang Digital",
    eyebrow: "Kementerian Pengangkutan Malaysia",
    title: "JABATAN PENGANGKUTAN JALAN MALAYSIA",
    subtitle: "Pilih laluan digital yang anda perlukan — daripada pendaftaran kenderaan hingga perkhidmatan kakitangan.",
    directory_title: "Papan Laluan",
    tag_ebid: "Bida elektronik nombor pendaftaran kenderaan",
    tag_awam: "Perkhidmatan kaunter atas talian untuk orang awam",
    tag_myjpj: "Aplikasi mudah alih rasmi JPJ",
    tag_rasmi: "Portal maklumat rasmi jabatan",
    tag_vbid: "Bida nombor pendaftaran melalui aplikasi mudah alih",
    tag_rakan: "Capaian untuk rakan kongsi strategik JPJ",
    tag_warga: "Portal dalaman untuk kakitangan JPJ",
    restricted_tag: "Capaian Terhad",
    doc_label: "Ibu Pejabat",
    hq: "Ibu Pejabat Jabatan Pengangkutan Jalan Malaysia",
    call_center: "Pusat Panggilan Kerajaan Malaysia",
    suggestion: "Cadangan / Penambahbaikan",
    complaint: "Aduan / Maklum Balas",
    social_label: "Ikuti JPJ",
    a11y_title: "Alat Kebolehcapaian",
    a11y_increase: "Besarkan Teks",
    a11y_decrease: "Kecilkan Teks",
    a11y_grayscale: "Skala Kelabu",
    a11y_contrast: "Kontras Tinggi",
    a11y_negative: "Kontras Negatif",
    a11y_lightbg: "Latar Cerah",
    a11y_underline: "Garis Bawah Pautan",
    a11y_readable: "Fon Mudah Baca",
    a11y_reset: "Set Semula",
    a11y_btn_label: "Alat Kebolehcapaian"
  },
  "1": { // English
    brand_sub: "Digital Gateway",
    eyebrow: "Ministry of Transport Malaysia",
    title: "ROAD TRANSPORT DEPARTMENT MALAYSIA",
    subtitle: "Choose the portal that you need — from vehicle registration to staff-only services.",
    directory_title: "Route Board",
    tag_ebid: "Electronic bidding for vehicle registration numbers",
    tag_awam: "Online counter services for the public",
    tag_myjpj: "JPJ's official mobile application",
    tag_rasmi: "The department's official information portal",
    tag_vbid: "Bid for registration numbers via the mobile app",
    tag_rakan: "Access for JPJ's strategic partners",
    tag_warga: "Internal portal for JPJ staff",
    restricted_tag: "Restricted Access",
    doc_label: "Headquarters",
    hq: "Headquarters of Road Transport Department Malaysia",
    call_center: "Malaysia Government Call Centre",
    suggestion: "Suggestions / Improvements",
    complaint: "Complaints / Feedback",
    social_label: "Follow JPJ",
    a11y_title: "Accessibility Tools",
    a11y_increase: "Increase Text",
    a11y_decrease: "Decrease Text",
    a11y_grayscale: "Grayscale",
    a11y_contrast: "High Contrast",
    a11y_negative: "Negative Contrast",
    a11y_lightbg: "Light Background",
    a11y_underline: "Underline Links",
    a11y_readable: "Readable Font",
    a11y_reset: "Reset",
    a11y_btn_label: "Accessibility tools"
  }
};

// ============ Toggle bahasa ============
const toggle = document.getElementById('langToggle');
toggle.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    toggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const lang = btn.dataset.lang;
    toggle.dataset.active = lang;
    document.documentElement.lang = lang === "1" ? "en" : "ms";

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    const a11yLabel = translations[lang] && translations[lang].a11y_btn_label;
    if (a11yLabel) {
      document.getElementById('a11yBtn').setAttribute('aria-label', a11yLabel);
    }
  });
});

// ============ Panel kebolehcapaian ============
const a11yBtn = document.getElementById('a11yBtn');
const a11yPanel = document.getElementById('a11yPanel');

a11yBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = a11yPanel.classList.toggle('open');
  a11yBtn.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (e) => {
  if (!a11yBtn.contains(e.target) && !a11yPanel.contains(e.target)) {
    a11yPanel.classList.remove('open');
    a11yBtn.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('.a11y-panel ul button').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    const body = document.body;

    if (action === 'reset') {
      body.className = '';
      return;
    }
    if (action === 'increase') {
      body.classList.remove('a11y-text-dec');
      body.classList.toggle('a11y-text-inc');
    } else if (action === 'decrease') {
      body.classList.remove('a11y-text-inc');
      body.classList.toggle('a11y-text-dec');
    } else if (action === 'grayscale') {
      body.classList.toggle('a11y-grayscale');
    } else if (action === 'high-contrast') {
      body.classList.toggle('a11y-high-contrast');
      body.classList.remove('a11y-light-bg');
    } else if (action === 'negative') {
      body.classList.toggle('a11y-negative');
    } else if (action === 'light-bg') {
      body.classList.toggle('a11y-light-bg');
      body.classList.remove('a11y-high-contrast');
    } else if (action === 'underline') {
      body.classList.toggle('a11y-underline');
    } else if (action === 'readable') {
      body.classList.toggle('a11y-readable');
    }
  });
});