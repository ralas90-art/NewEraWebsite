import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Referral Program Terms & Conditions | New Era Solar Energy',
  description: 'Program terms and eligibility rules for the New Era Solar Energy referral rewards program.',
};

export default function ReferralTermsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-newera-dark-gray py-12 px-6">
      <main className="max-w-3xl mx-auto bg-white border border-[#e5e5e5] rounded-3xl p-8 md:p-12 shadow-sm">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#5F6F75] font-sans flex items-center gap-2 mb-6">
          <Link href="/" className="hover:text-[#ff5722] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/referral" className="hover:text-[#ff5722] transition-colors">Referral Program</Link>
          <span>/</span>
          <span className="text-newera-dark-gray font-semibold">Terms & Conditions</span>
        </nav>

        <h1 className="font-poppins font-bold text-3xl text-newera-dark-gray mb-6">
          Referral Program Terms & Conditions
        </h1>

        <p className="text-xs text-[#ff5722] font-semibold font-sans mb-4">
          Last Updated: June 2026 — Pending Final Client Approval
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm text-amber-800 font-sans leading-relaxed mb-8 flex gap-3 items-start">
          <span className="text-xl shrink-0">⚠️</span>
          <div>
            <strong className="block mb-1 font-bold text-amber-900">Client Review Required — Draft Copy</strong>
            This document is a draft version of the Referral Program Terms & Conditions prepared for client review. It is not final and does not constitute legal advice. Do not present or distribute these terms to the public or as final policy until they are officially reviewed, adjusted, and approved by New Era Solar Energy.
          </div>
        </div>

        <div className="space-y-6 text-sm text-[#5F6F75] font-sans leading-relaxed">
          <section>
            <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">1. Program Overview</h2>
            <p>
              New Era Solar Energy (the &quot;Company&quot;) offers a Referral Rewards Program (the &quot;Program&quot;) to encourage participants to refer qualified homeowners to switch to residential solar. By submitting a referral, you agree to these Program Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">2. Referral Eligibility</h2>
            <p>
              To be eligible for a referral reward under this Program:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The referrer must be a legal resident of the United States and at least 18 years of age.</li>
              <li>The referee (referred friend or contact) must reside in a state served by the Company (e.g. Florida, Massachusetts, Connecticut).</li>
              <li>The referee must own the residential property where the solar system is proposed for installation.</li>
              <li>The referee must not be an existing contact, lead prospect, or customer of the Company at the time of referral submission.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">3. Reward Structure & Payment</h2>
            <p>
              For each qualified referral, the referrer is eligible to receive a referral reward of <strong>$1,000</strong>.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The referral reward is earned only after the referee&apos;s solar energy system is fully installed, utility-connected (Permission to Operate / PTO issued), and all contract payments or financing allocations are completed.</li>
              <li>Referral rewards are processed and paid within thirty (30) days following the system&apos;s full activation and verification.</li>
              <li>There is no limit to the number of referrals a participant can submit or rewards they can earn.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">4. Tax & Legal Considerations</h2>
            <p>
              Referrer is solely responsible for any tax liabilities arising from referral payments received. Program payments are not tax-deductible contributions. If referral payouts exceed federal limits, the Company may require a completed Form W-9 before processing rewards, and will issue a Form 1099-NEC as required by the Internal Revenue Service (IRS).
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">5. Modification & Termination</h2>
            <p>
              The Company reserves the right to modify, suspend, or terminate the Program, or change reward structures at any time with or without prior notice. Any referrals submitted prior to termination will be honored subject to eligibility guidelines.
            </p>
          </section>
        </div>

        <div className="border-t border-[#e5e5e5] mt-12 pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/referral"
            className="bg-[#ff5722] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#e04a1b] transition-colors font-sans"
          >
            ← Return to Referral Form
          </Link>
          <a
            href="tel:+13213813192"
            className="text-newera-dark-gray hover:text-[#ff5722] text-xs font-bold transition-colors font-sans"
          >
            Questions? Call (321) 381-3192
          </a>
        </div>
      </main>
    </div>
  );
}
