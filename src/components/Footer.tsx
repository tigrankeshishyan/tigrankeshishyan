'use client';

import { contactInfo } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          © {currentYear} {contactInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
