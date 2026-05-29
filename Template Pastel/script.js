const artifactData = [
  {
    title: "RPP Berbasis Praktik",
    type: "rpp",
    path: "assets/artefak/rpp/rpp-praktik.pdf",
    accent: "#ccecff",
    summary: "Contoh perangkat ajar untuk mengatur tujuan, kegiatan, asesmen, dan refleksi dalam satu alur pembelajaran."
  },
  {
    title: "Media Presentasi Interaktif",
    type: "media",
    path: "assets/artefak/media/media-presentasi.pdf",
    accent: "#ffd0bb",
    summary: "Template media untuk menjelaskan konsep inti dengan visual sederhana, ringkas, dan mudah dipahami siswa."
  },
  {
    title: "LKM Eksplorasi Konsep",
    type: "lkm",
    path: "assets/artefak/lkm/lkm-eksplorasi.pdf",
    accent: "#c9f4dc",
    summary: "Contoh lembar kerja yang mengarahkan siswa membaca masalah, mencoba langkah, dan menuliskan temuan."
  },
  {
    title: "Instrumen Asesmen Praktik",
    type: "asesmen",
    path: "assets/artefak/asesmen/rubrik-praktik.pdf",
    accent: "#ffd6e8",
    summary: "Contoh rubrik untuk menilai proses, produk, keselamatan kerja, dan sikap selama praktik."
  },
  {
    title: "Bahan Ajar Ringkas",
    type: "media",
    path: "assets/artefak/media/bahan-ajar.pdf",
    accent: "#fff0a8",
    summary: "Contoh bahan ajar yang dapat dipakai sebagai ringkasan materi sebelum siswa masuk ke latihan."
  },
  {
    title: "Refleksi Siklus Pembelajaran",
    type: "rpp",
    path: "assets/artefak/rpp/refleksi-siklus.pdf",
    accent: "#d9d0ff",
    summary: "Contoh catatan refleksi untuk membaca perubahan strategi dari perencanaan sampai evaluasi."
  }
];

const analysisData = [
  {
    title: "Analisis RPP",
    accent: "#ccecff",
    text: "RPP perlu menunjukkan hubungan yang jelas antara tujuan, aktivitas, asesmen, dan kebutuhan siswa. Template ini memberi ruang untuk menjelaskan kekuatan dan bagian yang perlu diperbaiki."
  },
  {
    title: "Analisis Media",
    accent: "#ffd0bb",
    text: "Media pembelajaran sebaiknya memperjelas konsep, bukan hanya mempercantik tampilan. Bagian ini bisa dipakai untuk menjelaskan alasan pemilihan visual, contoh, dan latihan."
  },
  {
    title: "Analisis LKM dan Asesmen",
    accent: "#c9f4dc",
    text: "LKM dan asesmen perlu membantu siswa bergerak dari memahami instruksi menuju praktik yang terukur. Rubrik harus mudah dibaca dan sesuai indikator."
  },
  {
    title: "Keterkaitan Teori",
    accent: "#ffd6e8",
    text: "Tuliskan teori pembelajaran yang relevan, misalnya pembelajaran aktif, konstruktivisme, praktik reflektif, atau project based learning."
  }
];

const galleryData = [
  { title: "Observasi Kelas", bg: "#ccecff", caption: "Foto kegiatan observasi atau diskusi awal." },
  { title: "Praktik Mengajar", bg: "#ffd0bb", caption: "Dokumentasi proses pembelajaran di kelas." },
  { title: "Pendampingan", bg: "#c9f4dc", caption: "Momen bimbingan bersama guru pamong atau dosen." },
  { title: "Refleksi", bg: "#ffd6e8", caption: "Catatan atau foto kegiatan evaluasi pembelajaran." }
];

const certificateData = [
  {
    title: "Pelatihan Media Digital",
    issuer: "Lembaga Pengembangan Guru",
    file: "assets/dokumen/sertifikat/pelatihan-media.pdf"
  },
  {
    title: "Workshop Asesmen",
    issuer: "Komunitas Pendidikan Vokasi",
    file: "assets/dokumen/sertifikat/workshop-asesmen.pdf"
  },
  {
    title: "Seminar Pembelajaran Aktif",
    issuer: "Forum Guru Kreatif",
    file: "assets/dokumen/sertifikat/seminar-pembelajaran.pdf"
  }
];

const competencies = {
  pedagogik: [
    ["Memahami karakteristik peserta didik", "Menengah"],
    ["Merancang pembelajaran berbasis praktik", "Mahir"],
    ["Mengelola kelas aktif", "Menengah"],
    ["Melaksanakan asesmen keterampilan", "Mahir"]
  ],
  teknik: [
    ["Membaca gambar teknik", "Mahir"],
    ["Mengoperasikan alat praktik", "Menengah"],
    ["Menerapkan keselamatan kerja", "Mahir"],
    ["Menganalisis kualitas produk", "Menengah"]
  ],
  digital: [
    ["Membuat media visual", "Mahir"],
    ["Menggunakan platform pembelajaran", "Mahir"],
    ["Mengolah video pembelajaran", "Menengah"],
    ["Memanfaatkan AI untuk rancangan ajar", "Menengah"]
  ],
  kepemimpinan: [
    ["Komunikasi kelas", "Mahir"],
    ["Kolaborasi tim", "Mahir"],
    ["Manajemen diri", "Menengah"],
    ["Etos kerja profesional", "Mahir"]
  ]
};

const folderData = [
  ["assets/foto/profil", "Tempat foto profil atau gambar identitas."],
  ["assets/foto/galeri", "Tempat foto galeri bebas."],
  ["assets/foto/dokumentasi", "Tempat foto kegiatan pembelajaran."],
  ["assets/artefak/rpp", "Tempat RPP atau modul ajar."],
  ["assets/artefak/media", "Tempat bahan ajar, PPT, atau media."],
  ["assets/artefak/lkm", "Tempat lembar kerja siswa."],
  ["assets/artefak/asesmen", "Tempat rubrik, soal, dan instrumen."],
  ["assets/dokumen/penilaian", "Tempat lampiran penilaian."],
  ["assets/dokumen/sertifikat", "Tempat sertifikat PDF."],
  ["assets/video", "Tempat file video lokal atau catatan link video."]
];

const artifactGrid = document.querySelector("#artifactGrid");
const artifactFilters = document.querySelector("#artifactFilters");
const analysisGrid = document.querySelector("#analysisGrid");
const galleryTrack = document.querySelector("#galleryTrack");
const certificateGrid = document.querySelector("#certificateGrid");
const competencyTabs = document.querySelector("#competencyTabs");
const competencyGrid = document.querySelector("#competencyGrid");
const folderGrid = document.querySelector("#folderGrid");
const modal = document.querySelector("#detailModal");
const modalContent = document.querySelector("#modalContent");

function renderGallery() {
  galleryTrack.innerHTML = galleryData
    .map(
      (item) => `
        <article class="gallery-card" style="--card-bg:${item.bg}">
          <div>
            <h3>${item.title}</h3>
            <p>${item.caption}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderArtifactFilters() {
  const filters = [
    ["semua", "Semua"],
    ["rpp", "RPP"],
    ["media", "Media"],
    ["lkm", "LKM"],
    ["asesmen", "Asesmen"]
  ];

  artifactFilters.innerHTML = filters
    .map(([value, label], index) => `<button class="${index === 0 ? "active" : ""}" data-filter="${value}" type="button">${label}</button>`)
    .join("");

  artifactFilters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    artifactFilters.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderArtifacts(button.dataset.filter);
  });
}

function renderArtifacts(filter = "semua") {
  const items = filter === "semua" ? artifactData : artifactData.filter((item) => item.type === filter);

  artifactGrid.innerHTML = items
    .map(
      (item) => `
        <article class="artifact-card">
          <div class="artifact-visual" style="--accent:${item.accent}"></div>
          <div class="artifact-body">
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <div class="artifact-actions">
              <a class="mini-link" href="${item.path}">Path File</a>
              <button class="mini-link" type="button" data-artifact="${artifactData.indexOf(item)}">Analisis</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderAnalysis() {
  analysisGrid.innerHTML = analysisData
    .map(
      (item) => `
        <article class="analysis-card" style="--accent:${item.accent}">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderCertificates() {
  certificateGrid.innerHTML = certificateData
    .map(
      (item) => `
        <article class="certificate-card">
          <span>Sertifikat</span>
          <h3>${item.title}</h3>
          <p>${item.issuer}</p>
          <a href="${item.file}">Path contoh file</a>
        </article>
      `
    )
    .join("");
}

function renderCompetencies(active = "pedagogik") {
  competencyTabs.innerHTML = Object.keys(competencies)
    .map((key) => `<button type="button" class="${key === active ? "active" : ""}" data-competency="${key}">${key}</button>`)
    .join("");

  competencyGrid.innerHTML = competencies[active]
    .map(
      ([title, level]) => `
        <article class="competency-card">
          <span class="level">${level}</span>
          <strong>${title}</strong>
        </article>
      `
    )
    .join("");
}

function renderFolders() {
  folderGrid.innerHTML = folderData
    .map(
      ([path, desc]) => `
        <article class="folder-card">
          <strong>${path}</strong>
          <small>${desc}</small>
        </article>
      `
    )
    .join("");
}

function setupModal() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-artifact]");
    if (!button) return;

    const item = artifactData[Number(button.dataset.artifact)];
    modalContent.innerHTML = `
      <p class="eyebrow">Analisis contoh</p>
      <h2>${item.title}</h2>
      <p>${item.summary}</p>
      <p><strong>Path file:</strong> <code>${item.path}</code></p>
      <p>Ganti narasi ini dengan konteks, tujuan, kelebihan, kekurangan, dan kajian teori artefak asli.</p>
    `;
    modal.showModal();
  });

  document.querySelector("[data-close-modal]").addEventListener("click", () => modal.close());
}

function setupCompetencyTabs() {
  competencyTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    renderCompetencies(button.dataset.competency);
  });
}

function setupNavigation() {
  const topbar = document.querySelector("[data-floating-nav]");
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = [...document.querySelectorAll(".nav a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  toggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      topbar.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const updateActiveLink = () => {
    const current = sections.reduce((active, section) => {
      const rect = section.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.38 ? section.id : active;
    }, sections[0].id);

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

function setupContactForm() {
  document.querySelector("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject"));
    const message = encodeURIComponent(`Nama: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);

    window.location.href = `mailto:template@email.com?subject=${subject}&body=${message}`;
    form.reset();
  });
}

function setupVideoPlaceholder() {
  document.querySelector("#playPreview").addEventListener("click", () => {
    modalContent.innerHTML = `
      <p class="eyebrow">Video template</p>
      <h2>Area video masih placeholder</h2>
      <p>Masukkan link YouTube atau file video lokal di <code>assets/video</code>, lalu ganti bagian video di <code>index.html</code>.</p>
    `;
    modal.showModal();
  });
}

renderGallery();
renderArtifactFilters();
renderArtifacts();
renderAnalysis();
renderCertificates();
renderCompetencies();
renderFolders();
setupNavigation();
setupReveal();
setupModal();
setupCompetencyTabs();
setupContactForm();
setupVideoPlaceholder();
