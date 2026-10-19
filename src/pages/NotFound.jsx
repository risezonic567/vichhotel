import { Link } from 'react-router-dom';

import Reveal from '../components/Reveal';

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[#FAF9F6] px-6 text-center text-[#1C1C1C]">
      <Reveal variant="arch">
      <div>
        <h1 className="mb-4 font-serif text-4xl">Page Not Found</h1>
        <Link to="/" className="text-[#B8941F] underline underline-offset-4">Back to Home</Link>
      </div>
      </Reveal>
    </main>
  );
}
