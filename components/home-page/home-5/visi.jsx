import React, { useState } from 'react';

const Visi = () => {
  const [filter, setFilter] = useState("VISI & MISI");

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  // Data for each filter option
  const filterData = {
    'VISI & MISI': {
      title: 'Visi Program Studi DIII Teknik Mesin',
      content: 'Menjadi program studi DIII Teknik Mesin yang unggul dan terkemuka dalam mendidik tenaga terampil di bidang permesinan.'
    },
    'PROFIL LULUSAN': {
      title: 'Misi', 
      content: 
        'Menyelenggarakan pendidikan DIII Teknik Mesin yang berkualitas untuk menghasilkan lulusan yang kompeten dan berakhlak mulia. \n' +
        'Melaksanakan penelitian terapan bidang permesinan untuk menunjang proses pembelajaran dan kemajuan industri. \n' + 
        'Menjalankan pengabdian masyarakat melalui inovasi dan pelatihan untuk meningkatkan kesejahteraan.'
    },
    'CAPAIAN PEMBELAJARAN': {
      title: 'Capaian Pembelajaran',
      content: 'Mengacu pada capaian pembelajaran yang ditetapkan KURMEPIN.'
    },
    'KEUNGGULAN': {
      title: 'Keunggulan',
      content: 
        'Sarana dan Prasarana yang memadai. \n' +
        'Kerja sama industri yang kuat. \n' +
        '3. Dosen dan staff yang kompeten.'
    }
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
                <td>
                  {/* Menambah elemen <ol> untuk penomoran otomatis */}
                  <ol>
                    {content.split('\n').map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                </td>
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