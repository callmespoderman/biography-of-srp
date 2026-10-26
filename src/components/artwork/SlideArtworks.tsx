import React from 'react';

interface SlideArtworkProps {
  artId: 'cover' | 'danish' | 'college' | 'festival' | 'ghat' | 'epilogue';
  className?: string;
}

export const SlideArtwork: React.FC<SlideArtworkProps> = ({ artId, className = '' }) => {
  switch (artId) {
    case 'cover':
      return (
        <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-b from-stone-900 via-amber-950/20 to-stone-950 flex items-center justify-center p-6 ${className}`}>
          {/* Subtle river dawn glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(217,119,6,0.18),transparent_70%)]" />
          
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full max-h-[460px] drop-shadow-2xl select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Dawn over the Hooghly river in Serampore"
          >
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E1B18" />
                <stop offset="60%" stopColor="#451A03" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>
              <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#78350F" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#1C1917" />
                <stop offset="100%" stopColor="#0C0A09" />
              </linearGradient>
              <linearGradient id="sunGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Sky backdrop */}
            <rect width="800" height="340" fill="url(#skyGrad)" opacity="0.4" rx="12" />

            {/* Rising Morning Sun */}
            <circle cx="480" cy="210" r="54" fill="url(#sunGlow)" />
            <circle cx="480" cy="210" r="32" fill="#FDE68A" opacity="0.9" />

            {/* Distant Riverbank with colonial church spire & lush Bengal trees */}
            <path
              d="M0 310 Q 150 305, 280 308 T 540 306 T 800 310 L 800 350 L 0 350 Z"
              fill="#1C1917"
            />
            {/* Tree clusters */}
            <circle cx="120" cy="295" r="24" fill="#292524" />
            <circle cx="145" cy="290" r="28" fill="#1C1917" />
            <circle cx="170" cy="298" r="22" fill="#292524" />
            <circle cx="360" cy="292" r="30" fill="#292524" />
            <circle cx="390" cy="285" r="34" fill="#1C1917" />
            
            {/* St. Olav's church spire silhouette */}
            <rect x="230" y="250" width="34" height="60" fill="#1C1917" />
            <polygon points="247,205 230,250 264,250" fill="#1C1917" />
            <rect x="245" y="195" width="4" height="12" fill="#D97706" />
            <rect x="241" y="199" width="12" height="4" fill="#D97706" />

            {/* Serampore College Colonnade silhouette */}
            <rect x="580" y="260" width="90" height="50" fill="#1C1917" />
            <polygon points="625,235 575,260 675,260" fill="#1C1917" />
            <line x1="590" y1="260" x2="590" y2="310" stroke="#292524" strokeWidth="4" />
            <line x1="605" y1="260" x2="605" y2="310" stroke="#292524" strokeWidth="4" />
            <line x1="620" y1="260" x2="620" y2="310" stroke="#292524" strokeWidth="4" />
            <line x1="635" y1="260" x2="635" y2="310" stroke="#292524" strokeWidth="4" />
            <line x1="650" y1="260" x2="650" y2="310" stroke="#292524" strokeWidth="4" />

            {/* Hooghly River Water */}
            <rect y="310" width="800" height="190" fill="url(#waterGrad)" />

            {/* Sun reflection on river water */}
            <path
              d="M480 310 L 490 325 L 470 340 L 495 360 L 465 385 L 500 420 L 460 470 L 480 500"
              stroke="#F59E0B"
              strokeWidth="3"
              strokeOpacity="0.4"
              strokeDasharray="12 8"
            />
            {/* Water ripple lines */}
            <line x1="50" y1="340" x2="220" y2="340" stroke="#78350F" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="280" y1="365" x2="420" y2="365" stroke="#78350F" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="550" y1="345" x2="720" y2="345" stroke="#78350F" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="140" y1="410" x2="380" y2="410" stroke="#B45309" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="430" y1="440" x2="690" y2="440" stroke="#D97706" strokeWidth="2" strokeOpacity="0.25" />

            {/* Traditional Bengali Wooden Dinghy Boat */}
            <g transform="translate(260, 350)">
              {/* Boat hull */}
              <path
                d="M0 25 Q 70 45, 150 25 Q 165 22, 175 14 Q 90 28, 10 14 Z"
                fill="#292524"
              />
              <path
                d="M10 14 Q 90 28, 175 14 Q 160 30, 80 32 Z"
                fill="#44403C"
              />
              {/* Boat bamboo canopy (Chhai) */}
              <path
                d="M55 18 Q 85 -5, 115 18 Z"
                fill="#78350F"
                opacity="0.85"
              />
              {/* Boatman with oar */}
              <circle cx="135" cy="10" r="5" fill="#1C1917" />
              <path d="M135 15 L 138 25 L 130 25 Z" fill="#1C1917" />
              <line x1="130" y1="18" x2="115" y2="40" stroke="#78350F" strokeWidth="2.5" />
              {/* Reflection */}
              <path
                d="M15 36 Q 80 48, 160 36"
                stroke="#1C1917"
                strokeWidth="2"
                strokeOpacity="0.5"
              />
            </g>

            {/* Elegant Bengali script watermark */}
            <text
              x="740"
              y="110"
              textAnchor="end"
              fill="#F59E0B"
              fillOpacity="0.12"
              fontSize="68"
              fontFamily="serif"
              fontWeight="bold"
            >
              শ্রীরামপুর
            </text>
          </svg>
        </div>
      );

    case 'danish':
      return (
        <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-b from-stone-900 via-stone-800/40 to-stone-950 flex items-center justify-center p-6 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(180,83,9,0.15),transparent_70%)]" />
          
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full max-h-[460px] drop-shadow-2xl select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="St. Olav's Church and Danish colonial architecture"
          >
            {/* Classical Church Facade Backdrop */}
            <rect x="180" y="160" width="440" height="280" fill="#292524" rx="4" />
            <rect x="200" y="180" width="400" height="260" fill="#44403C" rx="2" />
            
            {/* Classical Pediment (Triangle) */}
            <polygon points="400,90 170,165 630,165" fill="#292524" />
            <polygon points="400,105 190,162 610,162" fill="#57534E" />

            {/* Danish Monogram / Crown in Pediment */}
            <circle cx="400" cy="138" r="14" stroke="#F59E0B" strokeWidth="2.5" fill="#292524" />
            <text x="400" y="143" textAnchor="middle" fill="#F59E0B" fontSize="13" fontWeight="bold" fontFamily="serif">C7</text>

            {/* Bell Tower */}
            <rect x="360" y="20" width="80" height="75" fill="#292524" />
            <polygon points="400,-15 350,20 450,20" fill="#78350F" />
            <rect x="398" y="-30" width="4" height="16" fill="#F59E0B" />
            <rect x="392" y="-24" width="16" height="4" fill="#F59E0B" />
            {/* Bell Louvers */}
            <rect x="380" y="38" width="40" height="42" rx="20" fill="#1C1917" />
            <circle cx="400" cy="58" r="10" fill="#D97706" opacity="0.8" />

            {/* Columns (Tuscan/Doric Order) */}
            {/* Col 1 */}
            <rect x="220" y="180" width="22" height="240" fill="#E7E5E4" />
            <rect x="215" y="174" width="32" height="8" fill="#D6D3D1" />
            <rect x="215" y="420" width="32" height="10" fill="#D6D3D1" />
            {/* Col 2 */}
            <rect x="320" y="180" width="22" height="240" fill="#E7E5E4" />
            <rect x="315" y="174" width="32" height="8" fill="#D6D3D1" />
            <rect x="315" y="420" width="32" height="10" fill="#D6D3D1" />
            {/* Col 3 */}
            <rect x="460" y="180" width="22" height="240" fill="#E7E5E4" />
            <rect x="455" y="174" width="32" height="8" fill="#D6D3D1" />
            <rect x="455" y="420" width="32" height="10" fill="#D6D3D1" />
            {/* Col 4 */}
            <rect x="560" y="180" width="22" height="240" fill="#E7E5E4" />
            <rect x="555" y="174" width="32" height="8" fill="#D6D3D1" />
            <rect x="555" y="420" width="32" height="10" fill="#D6D3D1" />

            {/* Grand Arched Doorway */}
            <path d="M370 430 L 370 270 Q 400 230, 430 270 L 430 430 Z" fill="#1C1917" />
            <path d="M374 430 L 374 272 Q 400 238, 426 272 L 426 430 Z" stroke="#78350F" strokeWidth="3" />
            {/* Church Plaque */}
            <rect x="360" y="200" width="80" height="24" rx="3" fill="#1C1917" stroke="#D97706" strokeWidth="1" />
            <text x="400" y="216" textAnchor="middle" fill="#FDE68A" fontSize="9" letterSpacing="2" fontFamily="serif">ST. OLAV · 1806</text>

            {/* Tree-lined Danish Promenade foreground */}
            <rect x="0" y="430" width="800" height="70" fill="#1C1917" />
            <line x1="0" y1="430" x2="800" y2="430" stroke="#78350F" strokeWidth="3" />
            
            {/* Mature banyan and palm silhouettes */}
            <g transform="translate(60, 200)">
              <circle cx="50" cy="50" r="70" fill="#1C1917" opacity="0.9" />
              <circle cx="90" cy="30" r="50" fill="#292524" opacity="0.9" />
              <rect x="65" y="100" width="22" height="130" fill="#1C1917" />
            </g>
            <g transform="translate(650, 220)">
              <circle cx="50" cy="50" r="65" fill="#1C1917" opacity="0.9" />
              <circle cx="20" cy="35" r="45" fill="#292524" opacity="0.9" />
              <rect x="42" y="90" width="18" height="120" fill="#1C1917" />
            </g>

            {/* Old street lamp post */}
            <g transform="translate(150, 310)">
              <line x1="10" y1="120" x2="10" y2="20" stroke="#D97706" strokeWidth="3" />
              <polygon points="5,20 15,20 18,5 2,5" stroke="#D97706" strokeWidth="1.5" fill="#292524" />
              <circle cx="10" cy="12" r="5" fill="#FDE68A" />
            </g>
          </svg>
        </div>
      );

    case 'college':
      return (
        <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-b from-stone-900 via-sky-950/20 to-stone-950 flex items-center justify-center p-6 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(2,132,199,0.18),transparent_70%)]" />

          <svg
            viewBox="0 0 800 500"
            className="w-full h-full max-h-[460px] drop-shadow-2xl select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Serampore College and the historic printing press"
          >
            {/* Monumental Neoclassical Portico */}
            <polygon points="400,60 120,135 680,135" fill="#1E293B" stroke="#0284C7" strokeWidth="2" />
            <rect x="140" y="135" width="520" height="18" fill="#334155" />
            <text x="400" y="115" textAnchor="middle" fill="#E2E8F0" fontSize="16" letterSpacing="4" fontFamily="serif" fontWeight="bold">
              SERAMPORE COLLEGE · 1818
            </text>

            {/* 6 Majestic Ionic Columns */}
            {[170, 255, 340, 425, 510, 595].map((x, idx) => (
              <g key={idx}>
                {/* Ionic Capital scrolls */}
                <ellipse cx={x - 8} cy="158" rx="8" ry="5" fill="#0284C7" opacity="0.8" />
                <ellipse cx={x + 18} cy="158" rx="8" ry="5" fill="#0284C7" opacity="0.8" />
                <rect x={x - 10} y="153" width="30" height="8" fill="#64748B" />
                {/* Column shaft */}
                <rect x={x - 5} y="161" width="20" height="190" fill="#E2E8F0" />
                <line x1={x} y1="161" x2={x} y2="351" stroke="#CBD5E1" strokeWidth="2" />
                {/* Base */}
                <rect x={x - 9} y="351" width="28" height="12" fill="#64748B" />
              </g>
            ))}

            {/* Stepped Plinth Foundation */}
            <rect x="90" y="363" width="620" height="14" fill="#334155" />
            <rect x="60" y="377" width="680" height="16" fill="#1E293B" />

            {/* Vintage Printing Press & Movable Type Elements floating gracefully */}
            <g transform="translate(180, 290)">
              {/* Type tray / wooden composing stick */}
              <rect x="0" y="0" width="440" height="110" rx="6" fill="#0F172A" stroke="#0284C7" strokeWidth="2" opacity="0.95" />
              <rect x="6" y="6" width="428" height="98" rx="4" fill="#1E293B" />
              
              {/* Movable Type Metal Blocks */}
              {[
                { letter: 'অ', font: 'Bengali' },
                { letter: 'আ', font: 'Bengali' },
                { letter: 'ক', font: 'Bengali' },
                { letter: 'খ', font: 'Bengali' },
                { letter: 'গ', font: 'Bengali' },
                { letter: '1800', font: 'Latin' },
                { letter: 'PRESS', font: 'Latin' },
              ].map((item, i) => (
                <g key={i} transform={`translate(${20 + i * 58}, 22)`}>
                  <rect width="48" height="66" rx="4" fill="#334155" stroke="#38BDF8" strokeWidth="1.5" />
                  <rect x="4" y="4" width="40" height="40" rx="3" fill="#0F172A" />
                  <text
                    x="24"
                    y="32"
                    textAnchor="middle"
                    fill="#38BDF8"
                    fontSize={item.letter.length > 2 ? '11' : '22'}
                    fontFamily="serif"
                    fontWeight="bold"
                  >
                    {item.letter}
                  </text>
                  <text x="24" y="58" textAnchor="middle" fill="#94A3B8" fontSize="8" letterSpacing="1">
                    METAL
                  </text>
                </g>
              ))}
            </g>

            {/* Knowledge Spread Rays / Open Book Icon */}
            <g transform="translate(380, 210)">
              <path d="M-40 0 C -20 -15, 0 0, 0 20 C 0 0, 20 -15, 40 0 L 35 25 C 20 12, 0 25, 0 25 C 0 25, -20 12, -35 25 Z" fill="#38BDF8" opacity="0.8" />
            </g>
          </svg>
        </div>
      );

    case 'festival':
      return (
        <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-b from-stone-900 via-orange-950/25 to-stone-950 flex items-center justify-center p-6 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(234,88,12,0.22),transparent_70%)]" />

          <svg
            viewBox="0 0 800 500"
            className="w-full h-full max-h-[460px] drop-shadow-2xl select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Mahesh Rath Yatra festival chariot and celebration"
          >
            {/* Festive Night Illumination Sky */}
            <circle cx="160" cy="110" r="3" fill="#FDE047" opacity="0.8" />
            <circle cx="210" cy="70" r="2.5" fill="#FDE047" opacity="0.9" />
            <circle cx="640" cy="90" r="3" fill="#FDE047" opacity="0.8" />
            <circle cx="690" cy="130" r="2" fill="#FDE047" opacity="0.7" />

            {/* Festive Lights Garland (Toran) */}
            <path
              d="M20 50 Q 200 110, 400 60 Q 600 110, 780 50"
              stroke="#EA580C"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 6"
            />
            {[60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720].map((cx, i) => (
              <circle key={i} cx={cx} cy={70 + Math.sin(i) * 15} r="6" fill={i % 2 === 0 ? '#FBBF24' : '#F97316'} />
            ))}

            {/* Grand Multi-Tiered Mahesh Rath Chariot */}
            <g transform="translate(240, 70)">
              {/* Top Shikhara Spire & Kalasha */}
              <polygon points="160,0 145,50 175,50" fill="#F59E0B" />
              <circle cx="160" cy="-5" r="7" fill="#FDE68A" />
              <line x1="160" y1="-12" x2="160" y2="-25" stroke="#EA580C" strokeWidth="3" />
              {/* Saffron Temple Flag */}
              <polygon points="160,-25 200,-15 160,-5" fill="#DC2626" />

              {/* Tier 1 (Crown) */}
              <rect x="110" y="50" width="100" height="35" rx="3" fill="#78350F" stroke="#F59E0B" strokeWidth="2" />
              <polygon points="160,50 90,85 230,85" fill="#B45309" opacity="0.6" />

              {/* Tier 2 (Upper Pavilion) */}
              <rect x="80" y="85" width="160" height="60" rx="4" fill="#9A3412" stroke="#F59E0B" strokeWidth="2" />
              {/* Arched openings */}
              <path d="M110 145 L 110 110 Q 125 95, 140 110 L 140 145 Z" fill="#1C1917" />
              <path d="M180 145 L 180 110 Q 195 95, 210 110 L 210 145 Z" fill="#1C1917" />

              {/* Tier 3 (Middle Sanctum) */}
              <rect x="50" y="145" width="220" height="80" rx="4" fill="#7C2D12" stroke="#EA580C" strokeWidth="3" />
              {/* Marigold Festoons on Chariot */}
              <path d="M50 155 Q 105 185, 160 155 Q 215 185, 270 155" stroke="#F59E0B" strokeWidth="5" fill="none" />
              <path d="M50 170 Q 105 200, 160 170 Q 215 200, 270 170" stroke="#F97316" strokeWidth="5" fill="none" />

              {/* Base Platform */}
              <rect x="20" y="225" width="280" height="50" rx="4" fill="#431407" stroke="#F59E0B" strokeWidth="2" />
              <rect x="10" y="275" width="300" height="20" fill="#292524" />

              {/* Giant Carved Wooden Wheels */}
              {/* Wheel 1 */}
              <g transform="translate(45, 290)">
                <circle cx="25" cy="25" r="32" fill="#78350F" stroke="#EA580C" strokeWidth="4" />
                <circle cx="25" cy="25" r="10" fill="#1C1917" stroke="#F59E0B" strokeWidth="2" />
                {[0, 45, 90, 135].map((deg, idx) => (
                  <line
                    key={idx}
                    x1={25 + Math.cos((deg * Math.PI) / 180) * 28}
                    y1={25 + Math.sin((deg * Math.PI) / 180) * 28}
                    x2={25 - Math.cos((deg * Math.PI) / 180) * 28}
                    y2={25 - Math.sin((deg * Math.PI) / 180) * 28}
                    stroke="#D97706"
                    strokeWidth="3"
                  />
                ))}
              </g>

              {/* Wheel 2 */}
              <g transform="translate(205, 290)">
                <circle cx="25" cy="25" r="32" fill="#78350F" stroke="#EA580C" strokeWidth="4" />
                <circle cx="25" cy="25" r="10" fill="#1C1917" stroke="#F59E0B" strokeWidth="2" />
                {[0, 45, 90, 135].map((deg, idx) => (
                  <line
                    key={idx}
                    x1={25 + Math.cos((deg * Math.PI) / 180) * 28}
                    y1={25 + Math.sin((deg * Math.PI) / 180) * 28}
                    x2={25 - Math.cos((deg * Math.PI) / 180) * 28}
                    y2={25 - Math.sin((deg * Math.PI) / 180) * 28}
                    stroke="#D97706"
                    strokeWidth="3"
                  />
                ))}
              </g>

              {/* Sacred Pulling Ropes (Rasi) */}
              <path d="M-120 270 Q -40 280, 20 265" stroke="#F59E0B" strokeWidth="6" fill="none" strokeDasharray="6 3" />
              <path d="M300 265 Q 360 280, 440 270" stroke="#F59E0B" strokeWidth="6" fill="none" strokeDasharray="6 3" />
            </g>

            {/* Celebratory Street Festival Crowd Silhouette & Lights */}
            <g transform="translate(0, 390)">
              <rect width="800" height="110" fill="#1C1917" />
              {/* Cheerful crowd heads & raised hands */}
              <path
                d="M0 45 Q 30 20, 60 40 Q 90 15, 120 38 Q 150 18, 180 35 Q 210 10, 240 35 Q 270 20, 300 38 Q 330 15, 360 32 Q 390 12, 420 35 Q 450 18, 480 38 Q 510 14, 540 35 Q 570 20, 600 38 Q 630 15, 660 35 Q 690 18, 720 38 Q 760 12, 800 40 L 800 110 L 0 110 Z"
                fill="#292524"
              />
              {/* Street food stall lanterns */}
              <circle cx="90" cy="50" r="12" fill="#EA580C" opacity="0.8" />
              <circle cx="710" cy="50" r="12" fill="#F59E0B" opacity="0.8" />
            </g>

            {/* Year highlight badge */}
            <text x="400" y="465" textAnchor="middle" fill="#FED7AA" fontSize="13" letterSpacing="3" fontFamily="sans-serif" fontWeight="bold">
              SINCE 1396 CE · 625+ YEARS OF CONTINUOUS DEVOTION & FAIR
            </text>
          </svg>
        </div>
      );

    case 'ghat':
      return (
        <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-b from-stone-900 via-teal-950/25 to-stone-950 flex items-center justify-center p-6 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(13,148,136,0.2),transparent_70%)]" />

          <svg
            viewBox="0 0 800 500"
            className="w-full h-full max-h-[460px] drop-shadow-2xl select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Evening tea by the Hooghly river ghat in Serampore"
          >
            {/* Dusk Sky Gradient */}
            <defs>
              <linearGradient id="twilightSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="45%" stopColor="#1E293B" />
                <stop offset="85%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0D9488" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="ghatWater" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#115E59" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#022C22" />
              </linearGradient>
            </defs>

            <rect width="800" height="270" fill="url(#twilightSky)" rx="8" />

            {/* Crescent Evening Moon */}
            <path
              d="M660 70 A 24 24 0 1 0 690 105 A 28 28 0 1 1 660 70 Z"
              fill="#FEF08A"
              opacity="0.9"
            />

            {/* Calm Hooghly River */}
            <rect y="230" width="800" height="270" fill="url(#ghatWater)" />

            {/* Distant river ripples & reflections */}
            <ellipse cx="670" cy="265" rx="40" ry="2" fill="#FEF08A" opacity="0.3" />
            <ellipse cx="665" cy="285" rx="55" ry="2" fill="#FEF08A" opacity="0.2" />

            {/* Serampore Ghat Stone Steps (Descending into the River) */}
            <polygon points="0,290 420,290 320,500 0,500" fill="#1C1917" />
            
            {/* Tier 1 Step */}
            <polygon points="0,320 380,320 360,350 0,350" fill="#292524" />
            <line x1="0" y1="320" x2="380" y2="320" stroke="#44403C" strokeWidth="2" />

            {/* Tier 2 Step */}
            <polygon points="0,350 360,350 340,385 0,385" fill="#1F2937" />
            <line x1="0" y1="350" x2="360" y2="350" stroke="#4B5563" strokeWidth="2" />

            {/* Tier 3 Step */}
            <polygon points="0,385 340,385 320,425 0,425" fill="#292524" />
            <line x1="0" y1="385" x2="340" y2="385" stroke="#52525B" strokeWidth="2" />

            {/* Tier 4 Step (Touching Water) */}
            <polygon points="0,425 320,425 295,470 0,470" fill="#18181B" />
            <line x1="0" y1="425" x2="320" y2="425" stroke="#3F3F46" strokeWidth="2" />

            {/* Traditional Clay Cup of Hot Tea (Earthen Bhaanr / Kulhad) */}
            <g transform="translate(180, 275)">
              {/* Steaming hot tea smoke spirals */}
              <path
                d="M18 -5 Q 12 -20, 22 -35 Q 28 -48, 18 -60"
                stroke="#E0F2FE"
                strokeWidth="2.5"
                fill="none"
                opacity="0.75"
                strokeDasharray="4 3"
              />
              <path
                d="M26 -8 Q 34 -25, 24 -42 Q 18 -55, 30 -68"
                stroke="#CCFBF1"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />

              {/* Terracotta Clay Cup (Bhaanr) */}
              <polygon points="6,2 34,2 28,38 12,38" fill="#B45309" stroke="#78350F" strokeWidth="2" />
              <ellipse cx="20" cy="2" rx="14" ry="4" fill="#9A3412" stroke="#78350F" strokeWidth="1.5" />
              {/* Tea surface */}
              <ellipse cx="20" cy="2" rx="11" ry="3" fill="#451A03" />

              {/* Shadow of cup */}
              <ellipse cx="20" cy="40" rx="16" ry="4" fill="#0C0A09" opacity="0.8" />
            </g>

            {/* Wooden Dinghy Boat tied to bamboo pole */}
            <g transform="translate(480, 310)">
              {/* Bamboo pole sticking out of water */}
              <line x1="12" y1="-30" x2="16" y2="90" stroke="#78350F" strokeWidth="4" />
              <line x1="16" y1="20" x2="45" y2="35" stroke="#A16207" strokeWidth="2" strokeDasharray="3 2" />

              {/* Boat body */}
              <path
                d="M30 35 Q 110 65, 220 35 Q 235 30, 250 18 Q 140 40, 45 20 Z"
                fill="#1C1917"
              />
              <path
                d="M45 20 Q 140 40, 250 18 Q 235 40, 130 42 Z"
                fill="#292524"
              />
              {/* Curved bamboo roof on boat */}
              <path d="M100 24 Q 140 -5, 180 24 Z" fill="#78350F" opacity="0.9" />

              {/* Water reflection under boat */}
              <ellipse cx="140" cy="52" rx="90" ry="6" fill="#042F2E" opacity="0.7" />
            </g>

            {/* Emotional Quote Tag */}
            <text x="740" y="465" textAnchor="end" fill="#5EEAD4" fontSize="13" letterSpacing="2" fontFamily="serif" fontStyle="italic">
              “Whenever I am stressed, sitting by the river makes me forget all my worries.”
            </text>
          </svg>
        </div>
      );

    case 'epilogue':
      return (
        <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-b from-stone-900 via-amber-950/30 to-stone-950 flex items-center justify-center p-6 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.2),transparent_70%)]" />

          <svg
            viewBox="0 0 800 500"
            className="w-full h-full max-h-[460px] drop-shadow-2xl select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Tapestry of heritage and belonging in Serampore"
          >
            {/* Radiant Sunburst of Gratitude and Pride */}
            <circle cx="400" cy="220" r="160" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="6 6" />
            <circle cx="400" cy="220" r="120" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="400" cy="220" r="80" fill="#78350F" fillOpacity="0.2" />

            {/* Central Archway of Belonging: Synthesis of Colonial Arch & River Wave */}
            <path
              d="M300 360 L 300 200 Q 400 100, 500 200 L 500 360 Z"
              fill="#1C1917"
              stroke="#D97706"
              strokeWidth="3"
            />
            {/* Inner illuminated vista */}
            <path
              d="M315 360 L 315 205 Q 400 120, 485 205 L 485 360 Z"
              fill="#292524"
            />

            {/* Inside the Arch: Hooghly River flowing into sunrise */}
            <path
              d="M315 300 Q 400 270, 485 310 L 485 360 L 315 360 Z"
              fill="#78350F"
              opacity="0.8"
            />
            <circle cx="400" cy="210" r="28" fill="#FDE68A" opacity="0.9" />

            {/* Peaceful boat sailing through the portal */}
            <path d="M375 295 Q 400 305, 425 295 Q 430 292, 435 288 Q 400 296, 370 288 Z" fill="#1C1917" />
            <polygon points="400,270 395,293 405,293" fill="#D97706" />

            {/* Flourishing laurel branch / leaves of heritage and youth */}
            <g transform="translate(180, 160)">
              <circle cx="20" cy="20" r="4" fill="#F59E0B" />
              <circle cx="40" cy="50" r="4" fill="#F59E0B" />
              <circle cx="25" cy="85" r="4" fill="#F59E0B" />
              <path d="M10 110 Q 30 50, 60 10" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            </g>

            <g transform="translate(560, 160)">
              <circle cx="40" cy="20" r="4" fill="#F59E0B" />
              <circle cx="20" cy="50" r="4" fill="#F59E0B" />
              <circle cx="35" cy="85" r="4" fill="#F59E0B" />
              <path d="M50 110 Q 30 50, 0 10" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Base platform */}
            <rect x="220" y="360" width="360" height="12" fill="#D97706" rx="2" />
            <rect x="180" y="372" width="440" height="18" fill="#1C1917" rx="3" />

            {/* Heartfelt Closing Inscription */}
            <text x="400" y="435" textAnchor="middle" fill="#FDE68A" fontSize="18" fontFamily="serif" fontWeight="bold">
              “A Place I Am Proud to Call My Own”
            </text>
            <text x="400" y="465" textAnchor="middle" fill="#A8A29E" fontSize="13" letterSpacing="3">
              THANK YOU EVERYONE FOR LISTENING TO MY STORY
            </text>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
