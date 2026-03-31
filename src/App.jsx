import './App.css';
import { useState } from 'react';

function App() {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    { 
      id: 1, 
      name: 'Luffy', 
      image: 'lufy.jpg', 
      role: 'กัปตัน', 
      bounty: '3,000,000,000',
      age: '19',
      ability: 'Rubber Human (Gomu Gomu no Mi)',
      description: 'มองกี้ ดี. ลัฟฟี่ คือกัปตันใจกล้าของโจรสลัดหมวกฟางที่มีความฝันไม่สั่นคลอนที่จะกลายเป็นราชาโจรสลัด แม้จะมีนิสัยเซ่นซ่า แต่เขากลับมีจิตใจเข้มแข็งและรู้สึกยุติธรรม เขากินผลประโยชน์ยางยืดและสามารถยืดตัวได้เหมือนยาง ลักษณะเด่นของเขาคือความเที่ยงธรรมต่อเพื่อนฝูงและจิตใจไม่ยอมแพ้ต่อศัตรูที่เข้มแข็งเพียงใด' 
    },
    { 
      id: 2, 
      name: 'Zoro', 
      image: 'zoro.jpg', 
      role: 'นักดาบ', 
      bounty: '1,111,000,000',
      age: '21',
      ability: 'Three Sword Style Mastery',
      description: 'โรโรโนอะ โซโร่ คือนักดาบที่เข้มแข็งที่สุดของลูกเรือ เป็นที่รู้จักจากทักษะการใช้ดาบสามด้านอย่างยอดเยี่ยม ก่อนเข้าร่วมลัฟฟี่ เขาเป็นนักล่าประ赏ที่มีจรรยาศักดิ์ ฝันที่จะกลายเป็นนักดาบที่ยิ่งใหญ่ที่สุดของโลก โซโร่มีนิสัยเงียบงำและทุ่มเท แม้ว่าจะมักหลงทาง แต่ความศรัทธาต่อลัฟฟี่และลูกเรือทำให้เขาเป็นเสาหลักแห่งอำนาจที่ทุกคนพึ่งพา' 
    },
    { 
      id: 3, 
      name: 'Nami', 
      image: 'nami.jpg', 
      role: 'นักเดินเรือ', 
      bounty: '366,000,000',
      age: '20',
      ability: 'Weather Science & Cartography',
      description: 'นามิ คือนักเดินเรือและนักวาดแผนที่อัจฉริยะของโจรสลัดหมวกฟาง เดิมมาจากหมู่บ้านที่ถูกโจรสลัดทำลายลง เธอใช้เวลาหลายปีในการวาดแผนที่โลกและสะสมสมบัติ แม้ว่าเธอชอบเงิน แต่เธอมีจิตใจที่ถูกต้องและเมตตาลึกซึ้ง เธอใช้อาวุธที่อิงจากการเปลี่ยนแปลงของอากาศในการต่อสู้และเป็นสะพานเชื่อมระหว่างกลยุทธ์และการผจญภัยของลูกเรือ' 
    },
    { 
      id: 4, 
      name: 'Sanji', 
      image: 'sanji.jpg', 
      role: 'พ่อครัว', 
      bounty: '1,032,000,000',
      age: '21',
      ability: 'Enhanced Leg Strength & Fire Techniques',
      description: 'วินสโมก์ สัญจิ คือพ่อครัวหัวใจทองของลูกเรือที่มีทักษะด้านอาหารที่ไม่มีใครเทียบ เขาเติบโตในครอบครัวทางการทหารที่มีเกียรติ แต่เลือกเดินทางต่างไป กลายเป็นพ่อครัวโจรสลัดตำนาน สัญจิต่อสู้โดยใช้เทคนิคขาจำนวนมากและมีกำลังเหนือมนุษย์ในขาส่วนล่าง จุดอ่อนที่ยิ่งใหญ่ที่สุดของเขาคือหญิงสาวสวย ซึ่งเขายอมรับอย่างเปิดเผย เขาพร้อมเสียสละทุกสิ่งเพื่อความปลอดภัยและความสุขของลูกเรือ' 
    },
    { 
      id: 5, 
      name: 'Usopp', 
      image: 'usopp.jpg', 
      role: 'นักยิง', 
      bounty: '500,000,000',
      age: '19',
      ability: 'Sharpshooting & Mechanical Genius',
      description: 'อุโซปป์ คือนักยิงอัจฉริยะและนักเล่าเรื่องของลูกเรือที่มีความฝันจะเป็นนักรบที่กล้าหาญของทะเล แม้ว่าเขามักจะเป็นคนที่มั่นใจน้อยที่สุดในการต่อสู้ แต่เขาพิสูจน์ความกล้าหาญของเขาเมื่อสำคัญที่สุด เขามาจากหมู่บ้านเล็ก ๆ และสืบทอดความหลงใหลในเรื่องราวและการผจญภัยจากพ่อ อุโซปป์สร้างอาวุธและเครื่องมือของตัวเองและทำหน้าที่เป็นตัวตลกในขณะที่ซ่อนจิตใจนักรบที่จริงจัง' 
    },
    { 
      id: 6, 
      name: 'Chopper', 
      image: 'chopper.jpg', 
      role: 'แพทย์', 
      bounty: '100',
      age: '17',
      ability: 'Human Human Fruit (Hito Hito no Mi)',
      description: 'โทนี่ โทนี่ ชอปเปอร์ คือแพทย์ใจเมตตาของลูกเรือและกวางที่กินผลมนุษย์ซึ่งอนุญาตให้เขาเปลี่ยนเป็นรูปมนุษย์ แม้ว่าจะเป็นสัตว์ แต่เขาเลือกที่จะเป็นแพทย์เพื่อให้สำเร็จความฝันที่จะรักษาโรคทั้งหมด ชอปเปอร์มีจิตใจบริสุทธิ์ เมตตา และปัญญาอ่อนง่าย ความรู้ด้านการแพทย์และความสามารถในการเปลี่ยนแปลงหลายประการของเขาทำให้เขามีค่าต่อลูกเรือ แม้ว่านิสัยเด็กของเขาจะนำความอบอุ่นและความสนุกสนานมาให้ทีม' 
    },
    { 
      id: 7, 
      name: 'Robin', 
      image: 'robin.png', 
      role: 'นักโบราณคดี', 
      bounty: '930,000,000',
      age: '30',
      ability: 'Flower Flower Fruit (Hana Hana no Mi)',
      description: 'นิโก โรบิน คือนักโบราณคดีฉลาดของลูกเรือที่มีอดีตที่ลึกลับและเศร้าหดใจ เธอเป็นผู้รอดชีวิตเพียงคนเดียวจากโอฮาระและมีความรู้ในการอ่านโพนีกลิฟ์ โรบินกินผลดอกไม้ซึ่งช่วยให้เธอแตกออกเป็นส่วนต่าง ๆ ของร่างกายในการต่อสู้ แม้จะมีประวัติที่มืด เธอก็พบความหวังและความเป็นของตัวเองกับลูกเรือหมวกฟาง เธอมีนิสัยสงบและวิเคราะห์ได้ดี เพิ่มความลึกซึ้งด้านปัญญาให้กับกลุ่มในขณะที่เอาใจใส่สมาชิกแต่ละคนอย่างลับ ๆ' 
    },
    { 
      id: 8, 
      name: 'Franky', 
      image: 'franky.jpg', 
      role: 'ช่างสร้างเรือ', 
      bounty: '394,000,000',
      age: '36',
      ability: 'Cyborg Technology & Engineering',
      description: 'คัติ่ แฟลม ที่จนรู้จักในนาม แฟรงกี้ คือช่างสร้างเรือแปลกแหวนของลูกเรือและไซบอร์กบางส่วน เขาเป็นวิศวกรอัจฉริยะที่สอนตัวเองและรักการสร้างเรือและอาวุธ หลังจากถูกรถไฟชนและทิ้งไว้เพื่อตายแล้วเขาก็สร้างตัวเองขึ้นมาใหม่โดยใช้ทักษะทางกล แฟรงกี้มีนิสัยสดชื่นและโมโหง่าย พูดด้วยสำนวนพิเศษ แม้จะมีรูปลักษณ์ที่กระเบียด แต่เขามีหัวใจที่อ่อนโยนและฝันที่จะสร้างเรือโจรสลัดสุดท้ายกับลัฟฟี่' 
    },
    { 
      id: 9, 
      name: 'Brook', 
      image: 'brook.jpg', 
      role: 'นักดนตรี', 
      bounty: '383,000,000',
      age: '90 (ตายเมื่ออายุ 50)',
      ability: 'Soul Soul Fruit & Musical Mastery',
      description: 'บรูก คือนักดนตรีหนีไขกระดูกที่น่ารักของลูกเรือผู้กินผลวิญญาณซึ่งอนุญาตให้เขากลับชีวิตหลังจากตาย เขาเคยเป็นส่วนหนึ่งของโจรสลัดรัมบาร์และเดินลำเพลินในทะเลเป็นเวลาหลายสิบปีก่อนที่จะพบกับลัฟฟี่ บรูกมีนิสัยอืดช่วง เมตตา และจิตใจที่ยืดหยุ่นไม่ยอมแพ้ ดนตรีของเขานำความสุขมาให้ลูกเรือ และความสามารถในการต่อสู้ของเขาถูกเสริมดั้งเดิมโดยสรีระหนีไขกระดูกของเขา เขาฝันที่จะได้พบกวาง Laboon อีกครั้ง' 
    },
    { 
      id: 10, 
      name: 'Jinbe', 
      image: 'jinbe.jpg', 
      role: 'ลูกเรือหลัก', 
      bounty: '1,100,000,000',
      age: '46',
      ability: 'Fish-Man Karate Mastery',
      description: 'จินเบ่อ คือลูกเรือหลักที่สูงส่งและปลาคนตำนานที่เชื่อในการอยู่ร่วมกันระหว่างมนุษย์และปลาคน เขาเคยเป็นกัปตันของโจรสลัดซัน และรับใช้จักรพรรดิต่าง ๆ แต่ท้ายที่สุดเขาก็เลือกที่จะเข้าร่วมลัฟฟี่ด้วยเหตุผลที่เหมือนกัน จินเบ่อเป็นคนฉลาด มีเกียรติ และมีความแข็งแรงอย่างเหลือเชื่อในการต่อสู้ใต้น้ำ เขาทำหน้าที่เป็นเสียงของสติสัตย์สำหรับกลุ่มและให้คำแนะนำ จิตใจแห่งความยุติธรรมและความเที่ยงธรรมที่แข็งแกร่งของเขาทำให้เขากลายเป็นสมอรูปแบบชีวิตที่มีค่าของลูกเรือ' 
    },
  ];

  return (
    <div className="app">

      {/* Banner */}
      <div className="banner">
        <img src="crew.jpg" alt="crew"/>
        <div className="overlay">
          <h1>Straw Hat Pirates</h1>
          <p>The Legendary One Piece Crew</p>
        </div>
      </div>

      {/* Crew Section */}
      <div className="crew-container">
        {members.map(member => (
          <div key={member.id} className="card" onClick={() => setSelectedMember(member)}>
            <div className="img-box">
              <img src={member.image} alt={member.name}/>
            </div>
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMember(null)}>✕</button>
            <div className="modal-header">
              <div className="modal-img">
                <img src={selectedMember.image} alt={selectedMember.name}/>
              </div>
              <div className="modal-info">
                <h2>{selectedMember.name}</h2>
                <p className="role">{selectedMember.role}</p>
                <div className="stats">
                  <div className="stat-item">
                    <span className="stat-label">อายุ:</span>
                    <span className="stat-value">{selectedMember.age}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">ค่าหัว:</span>
                    <span className="stat-value">฿{selectedMember.bounty}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">ความสามารถ:</span>
                    <span className="stat-value">{selectedMember.ability}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <p>{selectedMember.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <p>⚓ Adventure Awaits in the Grand Line ⚓</p>
      </footer>

    </div>
  );
}

export default App;