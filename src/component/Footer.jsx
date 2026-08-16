import '../styles/Footer.css'
export default function Footer(){
    return (
        <footer className='footer-section'>
            <div className='footer-column footer-brand'>
                <h3>Legal & Regulatory Disclaimers</h3>
                <p>The webapp provides information and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
                <p>HIPAA-compliant Privacy Policy and Terms of Service.</p>
                <p>Pharmacy and Poisons Board for Kenya-based operations</p>
            </div>

            <div className='footer-column'>
                <h3>Customer Reach</h3>
                <p>Nairobi, Kenya</p>
                <p>info@kappaalphawellness.com</p>
                <p>+254 0000 000</p>
            </div>

            <div className='footer-column'>
                <h3>Socials</h3>
                <ul className='footer-links'>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Tiktok</li>
                    <li>X</li>
                </ul>
            </div>
        </footer>
    )
}