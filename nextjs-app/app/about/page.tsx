import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const socialLinks = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hudsontreu/' },
  { label: 'Instagram', url: 'https://www.instagram.com/hudsontreu.design/' },
  { label: 'X', url: 'https://x.com/hudsontreu' },
  { label: 'Gmail', url: 'mailto:hudsontreu55@gmail.com' },
  { label: 'CV', url: '/cv.pdf' },
];

const skillGroups = {
  Design: [
    'Figma',
    'Adobe Suite',
    'Framer'
  ],
  Development: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'GLSL',
    'React',
    'Angular',
    'Next.js',
    'Node.js',
    'Framer Motion',
    'Python',
    'VS Code',
    'Git'
  ],
  Media: [
    'TouchDesigner',
    'p5.js',
    'Three.js',
    'Max/MSP',
    'RNBO',
    'Stable Diffusion',
    'Ableton Live',
    'Arduino'
  ]
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>About</p>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.url} 
              className={`${styles.socialLink} underline-animation`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.bioColumn}>
            <div className={styles.bio}>
              <p>I'm Hudson, a designer and creative developer currently working as a design technologist for the Digital Technology Innovation R&D team at SageNet. Prior to joining SageNet, I graduated from Georgia Tech's MS-HCI program.</p>
              <br />
              <p>As a design technologist, I design and build interactive digital experiences at all scales, driven by a passion for enhancing human experiences through technology and six years of professional experience. My work spans experience design, interface design, UI engineering, and interactive digital arts. I specialize in creating designs based in research and bringing them to life through nuanced prototyping with emerging technologies.</p>
              <br />
              <p>While these are distinct fields, they share core elements of design thinking, systems thinking, and engineering—applied in varying degrees toward different goals. The design and development of software and interactive systems shapes the everyday human experience with technology, while artistic inquiry is used to continually re-define the questions asked in design. Through this process, I aim to explore how digital art and contemporary media aesthetics can shape innovative interaction paradigms in software design.</p>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/selfie.jpeg"
                alt="Hudson Treu"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.skillsColumn}>
            <h2 className={styles.skillsTitle}>Toolkit</h2>
            <div className={styles.skills}>
              {Object.entries(skillGroups).map(([group, skills]) => (
                <div key={group} className={styles.skillGroup}>
                  <h3 className={styles.skillGroupTitle}>{group}</h3>
                  <div className={styles.skillsList}>
                    {skills.map((skill) => (
                      <span key={skill} className={styles.skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}