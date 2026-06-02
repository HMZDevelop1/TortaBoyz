"use client";

import { MapPin } from "lucide-react";
import Container from "./ui/Container";
import UberEatsIcon from "./ui/UberEatsIcon";
import DoorDashIcon from "./ui/DoorDashIcon";
import DeliveryCard from "./ui/DeliveryCard";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/3RXk52pvpFtfBMbk7";
const UBER_EATS_URL = "https://www.ubereats.com/ca/store/torta-boyz/uV2CrrhcXP-wbVKS09-wyA";
const DOORDASH_URL = "https://www.doordash.com/business/taco-boyz-11187188?srsltid=AfmBOop7O0EGWAuhARCURqfibSWstO5oLp7choxtOTY_kqF_2xf5n5lx";

const businessHours = [
  { day: "Mon", hours: "11:00 AM – 10:00 PM" },
  { day: "Tue", hours: "11:00 AM – 10:00 PM" },
  { day: "Wed", hours: "11:00 AM – 10:00 PM" },
  { day: "Thu", hours: "11:00 AM – 10:00 PM" },
  { day: "Fri", hours: "11:00 AM – 12:00 AM" },
  { day: "Sat", hours: "10:00 AM – 12:00 AM" },
  { day: "Sun", hours: "10:00 AM – 9:00 PM" },
];

function getTodayIndex(): number {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
}

export default function Footer() {
  const todayIdx = getTodayIndex();

  return (
    <footer className="relative bg-torta-black border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-[0.03]" />

      <Container className="relative z-10 py-14 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-torta-black font-black text-sm tracking-tight">TB</span>
              </div>
              <span className="text-sm font-bold text-torta-white tracking-tight">
                Torta Boyz
              </span>
            </div>
            <p className="text-xs text-torta-white/40 leading-relaxed max-w-xs">
              Authentic Mexican street food in Ottawa&rsquo;s Little Italy.
              Handcrafted tortas, tacos, and cocktails made fresh daily.
            </p>
          </div>

          <div className="md:col-start-2">
            <h4 className="text-xs font-bold text-torta-white uppercase tracking-wider mb-3">
              Hours
            </h4>
            <table className="w-full text-xs">
              <tbody>
                {businessHours.map(({ day, hours }) => {
                  const isToday = businessHours.indexOf({ day, hours }) === todayIdx;
                  return (
                    <tr key={day}>
                      <td
                        className={`py-1 pr-3 font-medium ${
                          isToday ? "text-torta-white" : "text-torta-white/40"
                        }`}
                      >
                        {day}
                      </td>
                      <td
                        className={`py-1 text-right ${
                          isToday ? "text-torta-white font-medium" : "text-torta-white/30"
                        }`}
                      >
                        {hours}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div>
            <h4 className="text-xs font-bold text-torta-white uppercase tracking-wider mb-3">
              Location
            </h4>
            <div className="space-y-3 text-xs text-torta-white/40">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 group cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-torta-white/30 group-hover:text-torta-white transition-colors duration-300" />
                <span className="group-hover:text-torta-white transition-colors duration-300">
                  354A Preston Street
                  <br />
                  Ottawa, ON K1S 3J2
                </span>
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-torta-white/50 hover:text-torta-white transition-colors duration-300 group"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Get Directions</span>
                <svg
                  className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9-9M9 8h8v8" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-torta-white uppercase tracking-wider mb-3">
              Order Now
            </h4>
            <div className="space-y-1.5">
              <DeliveryCard
                icon={<UberEatsIcon className="w-full h-full" />}
                brandName="Uber Eats"
                href={UBER_EATS_URL}
                accentColor="#06C167"
                variant="footer"
              />
              <DeliveryCard
                icon={<DoorDashIcon className="w-full h-full" />}
                brandName="DoorDash"
                href={DOORDASH_URL}
                accentColor="#FF3008"
                variant="footer"
              />
              <DeliveryCard
                icon={
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                }
                brandName="OpenTable"
                href="https://www.opentable.com/"
                accentColor="#FFFFFF"
                variant="footer"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/5">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-torta-white/20">
              &copy; {new Date().getFullYear()} Torta Boyz. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.ubereats.com/"
                target="_blank"
                className="text-torta-white/20 hover:text-[#06C167] transition-colors duration-300"
                aria-label="Uber Eats"
              >
                <UberEatsIcon className="w-4 h-4" />
              </a>
              <a
                href={DOORDASH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-torta-white/20 hover:text-[#FF3008] transition-colors duration-300"
                aria-label="DoorDash"
              >
                <DoorDashIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="text-torta-white/20 hover:text-torta-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.opentable.com/"
                target="_blank"
                className="text-torta-white/20 hover:text-torta-white transition-colors duration-300"
                aria-label="OpenTable"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </a>

            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
