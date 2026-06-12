import Image from "next/image";
import Link from "next/link";

const langBtnStyle = {
   background: 'linear-gradient(83deg,rgba(212, 176, 255, 1) 0%, rgba(255, 179, 232, 1) 51%, rgba(255, 140, 156, 1) 100%)',
  padding: '8px 16px',
  borderRadius: '50px',
  fontSize: '13px',
  fontWeight: 'bold',
  textDecoration: 'none'
};

export default function Home() {
  return (
    <>
      <nav style={{ position: 'fixed', top: '20px', left: '20px', display: 'flex', gap: '10px', zIndex: 100 }}>
        <Link href="/en" style={langBtnStyle}>English</Link>
        <Link href="/zh" style={langBtnStyle}>中文</Link>
      </nav>

      <header style={{ display: 'flex', justifyContent: 'center' }}>
        <Link href="/" style={{ display: 'inline-block', lineHeight: 0 }}>
          <img src="/LFT.gif" alt="Lots For Tots Logo" width={300} height={200} style={{ marginTop: '0px' }} />
        </Link>
      </header>

      <main style={{ marginTop: '0px', marginBottom: '30px', padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontFamily: "'Balsamiq Sans', cursive", fontSize: '40px', fontWeight: 700, color: '#88807B', margin: '0 0 15px 0' }}>
          Lots For Tots 乐多探索坊
        </h1>
        <h2 style={{ fontFamily: "'Balsamiq Sans', cursive", fontSize: '20px', fontWeight: 700, color: '#88807B', margin: '0 0 15px 0' }}>
          The kiddies&apos; way of learning
        </h2>

        <nav style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%', maxWidth: '900px', marginTop: '20px' }}>
          <Link href="/about" className="main-btn">About Us</Link>
          <Link href="/contact" className="main-btn">Contact Us</Link>
          <Link href="/policy" className="main-btn">House Rules/Policy</Link>
          <Link href="/enquire" className="main-btn">Enquire Now!</Link>
          <Link href="/calendar" className="main-btn" style={{ gridColumn: '1' }}>Academic Calendar</Link>
        </nav>
      </main>

      <footer style={{ width: '100%', backgroundColor: '#fff7ed', borderTop: '1px solid #ddd', textAlign: 'center', fontSize: '14px', color: '#666', marginTop: 'auto', padding: '10px 0' }}>
        <div style={{ margin: '10px auto', maxWidth: '600px', width: '90%' }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>📍 Our Location:</p>
          <p style={{ margin: '8px 0', color: '#555', background: '#fdf2e4', border: '1px solid #ecdcc2', borderRadius: '12px', padding: '12px 16px', fontSize: '16px' }}>
            11A-1, Jalan Astaka 4A/KU2, Bandar Bukit Raja, 41050 Klang
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '10px' }}>
            <a href="https://www.google.com/maps/search/?api=1&query=11A-1,+Jalan+Astaka+4A/KU2,+Bandar+Bukit+Raja,+41050+Klang"
              target="_blank" className="nav-btn google-btn">Google Maps</a>
            <a href="https://waze.com/ul?q=11A-1,+Jalan+Astaka+4A/KU2,+Bandar+Bukit+Raja,+41050+Klang"
              target="_blank" className="nav-btn waze-btn">Waze</a>
          </div>
        </div>
        <p style={{ margin: '5px 0 0 0' }}>© 2026 Lots For Tots. All Rights Reserved.</p>
      </footer>
    </>
  );
}