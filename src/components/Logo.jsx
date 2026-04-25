export default function Logo({ size = 48 }) {
  // viewBox is fixed at 200x56; we scale via width/height
  const w = size * (200 / 56)
  return (
    <svg width={w} height={size} viewBox="0 0 200 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagon */}
      <polygon points="24,3 43,3 52,18 43,33 24,33 15,18" fill="none" stroke="#00d2ff" strokeWidth="2"/>
      <polygon points="27,8 40,8 47,18 40,28 27,28 20,18" fill="rgba(0,210,255,0.07)"/>
      {/* E glyph */}
      <text x="24" y="25" fontFamily="Orbitron,monospace" fontSize="16" fontWeight="700" fill="#00d2ff">E</text>
      {/* Connector */}
      <circle cx="52" cy="18" r="3" fill="#7c3aed"/>
      <line x1="55" y1="18" x2="64" y2="18" stroke="#7c3aed" strokeWidth="1.5"/>
      <circle cx="64" cy="18" r="1.5" fill="#7c3aed" opacity="0.5"/>
      {/* ENGINE */}
      <text x="70" y="22" fontFamily="Orbitron,monospace" fontSize="15" fontWeight="700" fill="#e8f4ff" letterSpacing="1.5">ENGINE</text>
      {/* TEC */}
      <text x="71" y="40" fontFamily="Orbitron,monospace" fontSize="13" fontWeight="400" fill="#00d2ff" letterSpacing="5">TEC</text>
    </svg>
  )
}
