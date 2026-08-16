import { useNavigate } from 'react-router';
import '../styles/home.css';
import './Productcard'
import Productcard from './Productcard';
export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="landing-page">
      <section className="hero">
        <span className="tag">Kappa Alpha Wellness store</span>
        <h1>Healthy living, delivered.</h1>
        <p>
          Find trusted medicines, everyday health essentials, vitamins, and
          personal care products for your family. Quick support, reliable
          products, and simple care whenever you need it.
        </p>

        <div className="actions">
          <button onClick={() => navigate('/products')}>Shop now</button>
          <button className="secondary">Join our newsletter</button>
        </div>

        <div className="mini-info">
          <span>Same-day delivery</span>
          <span>Certified products</span>
          <span>24/7 support</span>
        </div>
      </section>
    </main>
  );
}