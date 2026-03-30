import './App.css';

function App() {
  // สร้าง Array สำหรับเก็บข้อมูลสมาชิกทั้ง 10 คน
  // สามารถเปลี่ยนชื่อไฟล์รูป (src) และชื่อสมาชิก (name) ตรงนี้ได้เลย
  const members = [
    { id: 1, name: 'Scott', image: 'Fish.png' },
    { id: 2, name: 'Namo', image: 'Fish.png' },
    { id: 3, name: 'Mon', image: 'Fish.png' },
    { id: 4, name: 'Most', image: 'Fish.png' },
    { id: 5, name: 'Member 5', image: 'Fish.png' },
    { id: 6, name: 'Member 6', image: 'Fish.png' },
    { id: 7, name: 'Member 7', image: 'Fish.png' },
    { id: 8, name: 'Member 8', image: 'Fish.png' },
    { id: 9, name: 'Member 9', image: 'Fish.png' },
    { id: 10, name: 'Member 10', image: 'Fish.png' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        
        {/* โลโก้ด้านบนสุด (ถ้าไม่ใช้สามารถลบออกได้) */}
        <img src="KU_Logo.png" className="App-logo" alt="logo" style={{ marginBottom: '20px', width: '150px' }} />

        {/* 1. หัวข้ออยู่ข้างบนตรงกลาง */}
        <h1 style={{ textAlign: 'center', margin: '20px 0 40px 0', color: '#61dafb' }}>
          แนะนำสมาชิกกลุ่ม
        </h1>

        {/* 2. พื้นที่แสดงรูปภาพทั้ง 10 รูป (จัดเรียงแบบ Flexbox) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',       /* อนุญาตให้ปัดบรรทัดใหม่ถ้ายาวเกินกรอบ */
          justifyContent: 'center', /* จัดให้อยู่กึ่งกลาง */
          gap: '30px',            /* ระยะห่างระหว่างแต่ละรูป */
          maxWidth: '1000px'      /* กำหนดความกว้างสูงสุดเพื่อความสวยงาม */
        }}>
          
          {/* ลูป (Loop) สร้างการ์ดสมาชิก 10 ใบจาก Array */}
          {members.map((member) => (
            <div key={member.id} style={{ textAlign: 'center', width: '150px' }}>
              <img 
                src={member.image} 
                alt={member.name} 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  objectFit: 'cover', 
                  borderRadius: '50%', // ทำให้รูปเป็นวงกลม
                  border: '3px solid white'
                }} 
              />
              {/* 3. ชื่ออยู่ข้างล่างรูป */}
              <h3 style={{ fontSize: '1.2rem', marginTop: '10px' }}>{member.name}</h3>
            </div>
          ))}

        </div>

        {/* ส่วนท้าย */}
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <p>
            We <span className="heart">♥️</span> Devops
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>

      </header>
    </div>
  );
}

export default App;