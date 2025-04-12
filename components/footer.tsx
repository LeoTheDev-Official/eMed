import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#f6fafe] border-t border-[#e0e4ea]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-[#151b26] mb-3">eMed</h3>
            <p className="text-[#6e7781] text-sm">
              Oferim soluții medicale accesibile pentru pacienți și profesioniști din domeniul medical.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#151b26] mb-3">Link-uri Rapide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dashboard" className="text-[#6e7781] hover:text-[#1373e6]">
                  Panou de Control
                </Link>
              </li>
              <li>
                <Link href="/dashboard/appointments/new" className="text-[#6e7781] hover:text-[#1373e6]">
                  Programare Consultație
                </Link>
              </li>
              <li>
                <Link href="/dashboard/medical-records" className="text-[#6e7781] hover:text-[#1373e6]">
                  Fișe Medicale
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#151b26] mb-3">Suport</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-[#6e7781] hover:text-[#1373e6]">
                  Întrebări Frecvente
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#6e7781] hover:text-[#1373e6]">
                  Contactați-ne
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-[#6e7781] hover:text-[#1373e6]">
                  Centru de Ajutor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#151b26] mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-[#6e7781] hover:text-[#1373e6]">
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#6e7781] hover:text-[#1373e6]">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-[#6e7781] hover:text-[#1373e6]">
                  Accesibilitate
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#e0e4ea] mt-8 pt-6 text-center text-sm text-[#6e7781]">
          <p>© {new Date().getFullYear()} MedConnect. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
