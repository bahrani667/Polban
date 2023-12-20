import React, { useState } from 'react';

const Visi = () => {
  const [filter, setFilter] = useState("VISI & MISI");

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  // Data for each filter option
  const filterData = {
    'VISI & MISI': {
      title: 'Visi Program Studi DIII Teknik Listrik',
      content:
        'Menjadi program studi yang unggul dan terdepan dalam pendidikan vokasi yang inovatif dan adaptif terhadap perkembangan ilmu pengetahuan dan teknologi terapan di bidang ketenagalistrikan.',
    },
    'PROFIL LULUSAN': {
      title: 'Misi',
      content:
        '1. Menyelenggarakan pendidikan untuk menghasilkan lulusan yang kompeten dalam bidang ketenagalistrikan yang memiliki semangat terus berkembang, bermoral, berjiwa kewirausahaan dan berwawasan lingkungan.\n\n2. Melaksanakan penelitian terapan dan menyebarluaskan hasilnya untuk mengembangkan ilmu pengetahuan dan teknologi di bidang ketenagalistrikan.\n\n3. Melaksanakan kegiatan pengabdian kepada masyarakat melalui pemanfaatan ilmu pengetahuan dan teknologi di bidang ketenagalistrikan untuk mendukung peningkatan mutu kehidupan.',
    },
    'D3 Teknik Telekomunikasi': {
      title: 'Capaian Pembelajaran',
      content: 'Isikan dengan data untuk D3 Teknik Telekomunikasi.',
    },
    'CAPAIAN PEMBELAJARAN': {
      title: 'Capaian Pembelajaran',
      content: 'Isikan dengan data untuk capaian pembelajaran.',
    },
    'KEUNGGULAN': {
      title: 'Keunggulan',
      content: 'Isikan dengan data untuk keunggulan program studi.',
    },
  };

  const { title, content } = filterData[filter];

  return (
    <div className="portfolio-gallery-three pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          {Object.keys(filterData).map((key) => (
            <FilterItem
              key={key}
              label={key}
              active={filter === key}
              onClick={() => handleFilterClick(key)}
            />
          ))}
        </ul>

        <div className="filter-content">
          <table>
            <thead>
              <tr>
                <th>{title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{content}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const FilterItem = ({ label, active, onClick }) => {
  return (
    <li className={active ? 'is-checked' : ''} onClick={onClick}>
      {label}
    </li>
  );
};

export default Visi;
