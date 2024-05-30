
import Image from "next/image";
import profile from "../../public/assets/imgs/profile.jpg"

export default async function Home() {


  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image src={profile} alt="profile"/>
            <h1>SNEKALATHA MANI RAJENDHIRAN</h1>
            <p>Frontend Developer</p>
            <div className="social-links">
              <a href="https://github.com/snekalatha10" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/_.sneka.latha._/?utm_source=qr&igsh=eXk5b3IzanI0djg%3D" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/sneka-latha-984175231" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
