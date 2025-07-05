'use client';
import React from 'react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              DP-700: Implementing Data Engineering Solutions Using Microsoft Fabric
            </h3>
            <p className="text-sm text-gray-600">Issued by Microsoft · May 2025</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              CBAP: Certified Business Analysis Professional
            </h3>
            <p className="text-sm text-gray-600">Issued by IIBA · Valid through 2026</p>
          </div>
          {/* Add more certifications here if needed */}
        </div>
      </div>
    </section>
  );
}
