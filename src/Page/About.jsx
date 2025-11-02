import React from "react";
import imran from '../assets//HeroImage/WhatsApp Image 2025-10-20 at 00.36.16_23662e61.jpg';

// About.jsx
// A presentational About page component for the Shoes Shop project.
// Color theme: "natural" using Tailwind's neutral/gray palette (text-neutral, bg-neutral).

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-2   lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              WE'RE REDEFINING COMFORT
            </h1>
            <p className="mt-4 text-neutral-600 max-w-xl">
              From everyday runners to elegant loafers — we craft shoe collections that blend
              comfort, quality, and long-lasting style. Built for life on the move, designed for
              people who value fit and function.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/shop"
                className="inline-block rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-95"
              >
                Shop Collection
              </a>

              <a
                href="#values"
                className="inline-block rounded-md border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
              >
                Our Values
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://thumbs.dreamstime.com/b/sport-shoes-ads-illustration-generative-ai-sport-shoes-ads-illustration-ai-generative-268796289.jpg"
              alt="Shoes on display"
              className="w-full h-64  object-cover sm:h-72 lg:h-80"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-neutral-600">
            To make high-quality footwear accessible and comfortable for everyday life. We focus on
            durable materials, thoughtful construction, and honest pricing so that every step feels
            confident.
          </p>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <h3 className="text-xl font-semibold">What We Believe In</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 rounded-lg border border-neutral-100 shadow-sm">
              <h4 className="font-semibold">Comfort First</h4>
              <p className="mt-2 text-sm text-neutral-600">Cushioning, fit, and ergonomic design come first.</p>
            </div>

            <div className="p-5 rounded-lg border border-neutral-100 shadow-sm">
              <h4 className="font-semibold">Sustainable Materials</h4>
              <p className="mt-2 text-sm text-neutral-600">We prioritize eco-friendly materials when possible.</p>
            </div>

            <div className="p-5 rounded-lg border border-neutral-100 shadow-sm">
              <h4 className="font-semibold">Everyday Durability</h4>
              <p className="mt-2 text-sm text-neutral-600">Built to last through daily wear and tear.</p>
            </div>

            <div className="p-5 rounded-lg border border-neutral-100 shadow-sm">
              <h4 className="font-semibold">Accessible Pricing</h4>
              <p className="mt-2 text-sm text-neutral-600">Fair prices so great shoes are within reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / CTA */}
      <section className="bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-xl font-semibold">Meet The Team</h3>
          <p className="mt-2 text-neutral-600">A small team passionate about footwear, design, and quality.</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4 p-4 rounded-lg border border-neutral-100 bg-white">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a3b8f3f4a8f6b3a2d3d7c9e1d1f"
                alt="Team member"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">Aria Rahman</div>
                <div className="text-sm text-neutral-500">Product Designer</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg border border-neutral-100 bg-white">
              <img
                src={imran}
                alt="Team member"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">Imran Biswas</div>
                <div className="text-sm text-neutral-500">Web Developer</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg border border-neutral-100 bg-white">
              <img
                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b3c4d5e6f7a8b9c0d1e2f3a4b5c"
                alt="Team member"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">Samir Khan</div>
                <div className="text-sm text-neutral-500">Operations</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-600">Want to collaborate or stock our line?</p>
            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-3 rounded-md bg-neutral-900 text-white font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20" />
    </div>
  );
}

