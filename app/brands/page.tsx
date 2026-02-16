import type { Metadata } from 'next';
import Brands from '../components/Brands';

export const metadata: Metadata = {
  title: 'Our Brands | Spottive',
  description: 'Explore our collection of trusted technology brands for security, networking, and storage solutions',
};

function Page() {
  return (
    <main className="min-h-screen">
      <Brands />
    </main>
  );
}

export default Page;