import Link from 'next/link';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backButton}>← Home</Link>
      <h1 className={styles.h1}>About Us</h1>

      <div className={styles.content}>
        <p>At Lots for Tots, our name reflects what we aim to offer — lots of meaningful experiences for little tots (toddlers). We believe in creating a space filled with engaging ideas and thoughtfully planned activities, so children always feel excited, curious, and happy to come and explore each day.</p>
        <p>Guided by our philosophy, “the kiddies’ way of learning,” we recognise that every child learns best through play, exploration, and hands-on experiences — with the right balance of gentle guidance and structure.</p>
        <p>Our program is designed to support toddlers aged 1–3 in their journey towards preschool, helping them transition with confidence and ease. Through consistent routines and guided activities, children gradually build independence, responsibility, and the ability to adapt to a group environment.</p>
        <p>We thoughtfully combine elements from Ireland’s Aistear framework and Malaysia’s National Preschool Standard Curriculum (NPSC), creating a balanced approach that values both child-led exploration and purposeful learning. This allows us to provide an experience that is engaging, developmentally appropriate, and well-structured without being overly academic.</p>
        <p>Beyond activities, we place strong emphasis on character building and positive behaviour guidance. Children are supported in developing important social and emotional skills such as sharing, communication, self-regulation, and respect — all through meaningful, everyday interactions.</p>
        <p>At the heart of our program is a small, nurturing environment where each child is seen, supported, and encouraged to grow at their own pace.</p>
        <p>Because starting school shouldn’t feel overwhelming — it should feel familiar.</p>
      </div>

      <section className={styles.foundersNote}>
        <h2>Founder’s Note</h2>
        <p>As an educator, I have always believed that education is one of the most important turning points in a person’s life. From the moment a child is born, many things are beyond their control — their environment, their surroundings, and the opportunities available to them.</p>
        <p>What we can influence, however, is the kind of early experiences they receive.</p>
        <p>With over 7 years of experience in early childhood education across Malaysia and Ireland, I have seen how the right environment, guidance, and approach can shape a child’s confidence, behaviour, and readiness for the future.</p>
        <p>This is what led me to create Lots for Tots — a space where young children are not only cared for, but thoughtfully guided through meaningful play, positive interactions, and gentle structure.</p>
        <p>My goal is simple: to provide children with a strong and positive foundation, so they grow up with the confidence to explore, the ability to adapt, and the readiness to make good choices as they continue their journey. Because every child deserves a good start — and sometimes, that start makes all the difference.</p>
      </section>
    </div>
  );
}