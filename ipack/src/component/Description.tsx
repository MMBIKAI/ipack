import '../styles/Description.css';

export default function Description() {
  const features = [
    { icon: "📍", title: "Location Support", desc: "Proposed app-linked tracker helps owners locate a misplaced bag." },
    { icon: "🔋", title: "USB Charging", desc: "External outlet connects to a user-supplied certified power bank." },
    { icon: "🛡️", title: "Secure Organization", desc: "Padded device sleeve, books, stationery and bottle sections." },
    { icon: "🪶", title: "Comfortable Build", desc: "Lightweight materials, adjustable padded straps and resistant fabric." }
  ];

  return (
    <section id="features" className="desc-section">
      <h2 className="section-title">Why Choose iPack?</h2>
      <div className="grid">
        {features.map((f, i) => (
          <div key={i} className="feature-box">
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}