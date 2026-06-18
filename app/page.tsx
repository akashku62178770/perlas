// import { Hero } from "@/components/sections/Hero";
// import { Manifesto } from "@/components/sections/Manifesto";
// import { Continuum } from "@/components/sections/Continuum";
// import { Triad } from "@/components/sections/Triad";
// import { Economics } from "@/components/sections/Economics";
// import { AuditShield } from "@/components/sections/AuditShield";
// import { Footer } from "@/components/sections/Footer";

import { AuditShield } from "../components/sections/AuditShield";
import { Continuum } from "../components/sections/Continuum";
import { Economics } from "../components/sections/Economics";
import { Footer } from "../components/sections/Footer";
import { Hero } from "../components/sections/Hero";
import { Manifesto } from "../components/sections/Manifesto";
import { SectorsOfExpertise } from "../components/sections/SectorsofExpertise";
import { Triad } from "../components/sections/Triad";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Continuum />
      <Triad />
      <SectorsOfExpertise />
      {/* <Economics /> */}
      {/* <AuditShield /> */}
      <Footer />
    </main>
  );
}
