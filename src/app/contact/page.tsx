export default function Contact() {
  return (
    <section className="page-section">

      <div className="page-container contact-container">

        <h1>Contact Me</h1>

        <p>
          Interested in working together? Feel free to
          contact me.
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
          />

          <button type="submit">
            Send Message
          </button>

        </form>

        <div className="contact-info">

          <p>
            Email: your@email.com
          </p>

          <p>
            GitHub: github.com/yourusername
          </p>

          <p>
            LinkedIn: linkedin.com/in/yourusername
          </p>

        </div>

      </div>

    </section>
  );
}