import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div>
          <p className="small-title">
            JAVASCRIPT FULL STACK SOFTWARE ENGINEER
          </p>

          <h1>
            Hi, I'm <span>Sam</span>
          </h1>

          <h2>
            I build modern web applications.
          </h2>

          <p className="hero-text">
            I am a full-stack developer passionate about
            creating beautiful, responsive and functional
            web applications using modern technologies.
          </p>

          <div className="hero-buttons">

            <Link
              href="/projects"
              className="primary-button"
            >
              View My Projects
            </Link>

            <Link
              href="/contact"
              className="secondary-button"
            >
              Contact Me
            </Link>

          </div>
        </div>

        <div className="profile-container">

          <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={400}
            height={400}
            className="profile-image"
          />

        </div>

      </div>

    </section>
  );
}