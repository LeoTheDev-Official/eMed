import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MessageSquare, FileText, User, Clock, ChevronRight, Syringe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f6fafe] border-b border-[#e0e4ea]">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#151b26] sm:text-5xl mb-4">
              Sistem Cabinet Medical
            </h1>
            <p className="text-xl text-[#6e7781] mb-8">
              Accesați serviciile medicale, programările și fișele medicale într-un singur loc
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/dashboard">
                <Button className="bg-[#1373e6] hover:bg-[#0058d2] text-white px-6 py-2 rounded-md">
                  Mergi la Panou de Control
                </Button>
              </Link>
              <Link href="/dashboard/appointments">
                <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6] px-6 py-2 rounded-md">
                  Programează Consultație
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#151b26] text-center mb-8">Funcționalități Principale</h2>
          <p className="text-center text-[#6e7781] max-w-2xl mx-auto mb-12">
            Accesați rapid serviciile medicale esențiale prin intermediul platformei noastre intuitive
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-[#e1edfb] flex items-center justify-center mb-6 shadow-md transform transition-transform hover:scale-110">
                <CalendarDays className="h-12 w-12 text-[#1373e6]" />
              </div>
              <h3 className="text-xl font-semibold text-[#151b26] mb-3 text-center">Programare Consultații</h3>
              <p className="text-[#6e7781] text-center mb-5">
                Programați, reprogramați sau anulați cu ușurință consultațiile cu medicii dumneavoastră.
              </p>
              <Link href="/dashboard/appointments/new">
                <Button className="bg-[#1373e6] hover:bg-[#0058d2] w-full">Programează Acum</Button>
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-[#e1edfb] flex items-center justify-center mb-6 shadow-md transform transition-transform hover:scale-110">
                <MessageSquare className="h-12 w-12 text-[#1373e6]" />
              </div>
              <h3 className="text-xl font-semibold text-[#151b26] mb-3 text-center">Mesagerie Securizată</h3>
              <p className="text-[#6e7781] text-center mb-5">
                Comunicați direct cu medicii și personalul medical prin platforma noastră securizată.
              </p>
              <Link href="/dashboard/chat">
                <Button className="bg-[#1373e6] hover:bg-[#0058d2] w-full">Trimite Mesaj</Button>
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-[#e1edfb] flex items-center justify-center mb-6 shadow-md transform transition-transform hover:scale-110">
                <FileText className="h-12 w-12 text-[#1373e6]" />
              </div>
              <h3 className="text-xl font-semibold text-[#151b26] mb-3 text-center">Fișe Medicale</h3>
              <p className="text-[#6e7781] text-center mb-5">
                Accesați istoricul medical complet, rezultatele testelor și rețetele oricând.
              </p>
              <Link href="/dashboard/medical-records">
                <Button className="bg-[#1373e6] hover:bg-[#0058d2] w-full">Vezi Fișele Tale</Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/dashboard">
              <Button variant="outline" className="border-[#1373e6] text-[#1373e6] hover:bg-[#e1edfb]">
                Explorează Toate Funcționalitățile
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-[#f6fafe]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#151b26] text-center mb-12">Acces Rapid</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuickAccessCard
                icon={<User className="h-6 w-6 text-[#1373e6]" />}
                title="Panou Pacient"
                description="Vizualizați programările viitoare, mesajele și fișele medicale."
                link="/dashboard"
              />
              <QuickAccessCard
                icon={<CalendarDays className="h-6 w-6 text-[#1373e6]" />}
                title="Programare Nouă"
                description="Programați o nouă consultație cu medicul preferat."
                link="/dashboard/appointments/new"
              />
              <QuickAccessCard
                icon={<MessageSquare className="h-6 w-6 text-[#1373e6]" />}
                title="Mesagerie"
                description="Comunicați în siguranță cu furnizorii de servicii medicale."
                link="/dashboard/chat"
              />
              <QuickAccessCard
                icon={<FileText className="h-6 w-6 text-[#1373e6]" />}
                title="Fișe Medicale"
                description="Accesați și gestionați istoricul medical și rezultatele testelor."
                link="/dashboard/medical-records/new"
              />
              <QuickAccessCard
                icon={<Syringe className="h-6 w-6 text-[#1373e6]" />}
                title="Istoric Vaccinări"
                description="Vizualizați și actualizați istoricul vaccinărilor."
                link="/dashboard/vaccinations"
              />
              <QuickAccessCard
                icon={<Clock className="h-6 w-6 text-[#1373e6]" />}
                title="Confirmare Programare"
                description="Vizualizați detaliile programărilor confirmate."
                link="/dashboard/appointments/confirmation"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <Card className="shadow-sm border-[#e0e4ea] h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-[#151b26] mb-2">{title}</h3>
        <p className="text-[#6e7781] mb-4 flex-1">{description}</p>
        <Link href={link} className="text-[#1373e6] font-medium hover:underline mt-auto inline-flex items-center">
          Află mai multe <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  )
}

function QuickAccessCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <Link href={link}>
      <Card className="shadow-sm border-[#e0e4ea] hover:border-[#bddbfd] hover:bg-white transition-colors p-4 flex items-start space-x-4">
        <div className="p-2 bg-[#f6fafe] rounded-md border border-[#e0e4ea]">{icon}</div>
        <div>
          <h3 className="font-medium text-[#151b26]">{title}</h3>
          <p className="text-sm text-[#6e7781]">{description}</p>
        </div>
      </Card>
    </Link>
  )
}
