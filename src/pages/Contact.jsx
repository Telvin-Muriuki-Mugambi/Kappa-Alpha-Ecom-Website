import '../styles/contact.css'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
import PhoneOutlined from '@mui/icons-material/PhoneOutlined'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import LocationOn from '@mui/icons-material/LocationOn'
import AccessTime from '@mui/icons-material/AccessTime'

export default function Contact(){
  return (
    <section className="contact-page">
      <div className="contact-block">
        <h2>Contact Us</h2>

        <p className="contact-line"><AccessTime fontSize="small"/> Hours: Mon–Fri 9:00am–6:00pm</p>

        <p className="contact-line"><EmailOutlined fontSize="small"/> Email: <a href="mailto:kappaalpha@mail.com">kappaalpha@mail.com</a></p>

        <p className="contact-line"><PhoneOutlined fontSize="small"/> Phone: <a href="tel:+254712345678">+254 712 345 678</a></p>

        <p className="contact-line">
          <Instagram fontSize="small"/> <a href="https://instagram.com/kappa_alpha" target="_blank" rel="noreferrer">@kappa_alpha</a>
          &nbsp;•&nbsp;
          <Twitter fontSize="small"/> <a href="https://x.com/kappa_alpha" target="_blank" rel="noreferrer">@kappa_alpha</a>
        </p>

        <p className="contact-line"><LocationOn fontSize="small"/> In person: Bunge Towers, Nairobi — <a href="https://www.google.com/maps/search/?api=1&query=Bunge+Towers+Nairobi" target="_blank" rel="noreferrer">View on Google Maps</a></p>
      </div>
    </section>
  )
}