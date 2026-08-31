import styles from './Porthole.module.css'

const TICK_COUNT = 72
const TICKS = Array.from({ length: TICK_COUNT }, (_, index) => index)

function tickCoords(index) {
  const angle = (index / TICK_COUNT) * Math.PI * 2 - Math.PI / 2
  const isMajor = index % 6 === 0
  const outer = 197
  const inner = isMajor ? 185 : 191
  return {
    isMajor,
    x1: 200 + Math.cos(angle) * outer,
    y1: 200 + Math.sin(angle) * outer,
    x2: 200 + Math.cos(angle) * inner,
    y2: 200 + Math.sin(angle) * inner,
  }
}

/**
 * Lombar: gözlem penceresi çerçevesinde portre.
 * Çevresindeki halka, çağrı kodunu taşıyan gösterge bileziği.
 */
export function Porthole({ src, alt, ringText }) {
  const repeated = `${ringText} · `.repeat(3)

  return (
    <figure className={styles.porthole}>
      <svg className={styles.bezel} viewBox="0 0 400 400" aria-hidden="true">
        <circle className={styles.bezelRing} cx="200" cy="200" r="197" />
        {TICKS.map((index) => {
          const tick = tickCoords(index)
          return (
            <line
              key={index}
              className={tick.isMajor ? styles.tickMajor : styles.tick}
              x1={tick.x1}
              y1={tick.y1}
              x2={tick.x2}
              y2={tick.y2}
            />
          )
        })}
      </svg>

      <svg className={styles.ring} viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <path
            id="porthole-ring-path"
            d="M200,200 m-172,0 a172,172 0 1,1 344,0 a172,172 0 1,1 -344,0"
          />
        </defs>
        <text className={styles.ringText}>
          <textPath href="#porthole-ring-path" startOffset="0">
            {repeated}
          </textPath>
        </text>
      </svg>

      <div className={styles.glassWrap}>
        <img className={styles.photo} src={src} alt={alt} width="1000" height="930" />
        <span className={styles.glare} aria-hidden="true" />
      </div>
    </figure>
  )
}
