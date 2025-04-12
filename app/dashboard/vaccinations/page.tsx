"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Plus, MessageSquare } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function VaccinationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" className="text-[#6e7781]" onClick={() => window.history.back()}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Înapoi
        </Button>
        <h1 className="text-2xl font-bold text-[#151b26] ml-2">Istoricul Vaccinărilor</h1>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-[#6e7781]">Vizualizați și gestionați istoricul vaccinărilor dumneavoastră</p>
        <Button className="bg-[#1373e6] hover:bg-[#0058d2]">
          <Plus className="h-4 w-4 mr-2" />
          Adăugare Vaccin
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-md mb-6">
          <TabsTrigger value="all" className="text-sm">
            Toate
          </TabsTrigger>
          <TabsTrigger value="completed" className="text-sm">
            Completate
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="text-sm">
            Programate
          </TabsTrigger>
          <TabsTrigger value="recommended" className="text-sm">
            Recomandate
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#151b26]">Toate Vaccinările</CardTitle>
              <CardDescription className="text-[#6e7781]">
                Istoricul complet al vaccinărilor dumneavoastră
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vaccin</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Doză</TableHead>
                    <TableHead>Locație</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Acțiuni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Vaccin Antigripal</TableCell>
                    <TableCell>10 Octombrie 2024</TableCell>
                    <TableCell>Anuală</TableCell>
                    <TableCell>Clinica MedPlus</TableCell>
                    <TableCell>
                      <Badge className="bg-[#16bf78] text-white">Complet</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Detalii
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">COVID-19 Booster</TableCell>
                    <TableCell>5 Ianuarie 2025</TableCell>
                    <TableCell>Booster</TableCell>
                    <TableCell>Spitalul Municipal</TableCell>
                    <TableCell>
                      <Badge className="bg-[#16bf78] text-white">Complet</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Detalii
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Hepatita B</TableCell>
                    <TableCell>15 Decembrie 2024</TableCell>
                    <TableCell>Doza 2 din 3</TableCell>
                    <TableCell>Centrul Medical Sanador</TableCell>
                    <TableCell>
                      <Badge className="bg-[#ffd100] text-[#151b26]">În progres</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Detalii
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Hepatita B</TableCell>
                    <TableCell>15 Mai 2025</TableCell>
                    <TableCell>Doza 3 din 3</TableCell>
                    <TableCell>Centrul Medical Sanador</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[#6e7781] border-[#e0e4ea]">
                        Programat
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Detalii
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tetanos</TableCell>
                    <TableCell>3 Iunie 2020</TableCell>
                    <TableCell>Rapel (10 ani)</TableCell>
                    <TableCell>Clinica MedPlus</TableCell>
                    <TableCell>
                      <Badge className="bg-[#16bf78] text-white">Complet</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Detalii
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#151b26]">Vaccinări Completate</CardTitle>
              <CardDescription className="text-[#6e7781]">Vaccinări care au fost administrate complet</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vaccin</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Doză</TableHead>
                    <TableHead>Locație</TableHead>
                    <TableHead>Acțiuni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Vaccin Antigripal</TableCell>
                    <TableCell>10 Octombrie 2024</TableCell>
                    <TableCell>Anuală</TableCell>
                    <TableCell>Clinica MedPlus</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Detalii
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">COVID-19 Booster</TableCell>
                    <TableCell>5 Ianuarie 2025</TableCell>
                    <TableCell>Booster</TableCell>
                    <TableCell>Spitalul Municipal</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Detalii
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tetanos</TableCell>
                    <TableCell>3 Iunie 2020</TableCell>
                    <TableCell>Rapel (10 ani)</TableCell>
                    <TableCell>Clinica MedPlus</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Detalii
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#151b26]">Vaccinări Programate</CardTitle>
              <CardDescription className="text-[#6e7781]">Vaccinări care sunt programate pentru viitor</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vaccin</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Doză</TableHead>
                    <TableHead>Locație</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Acțiuni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Hepatita B</TableCell>
                    <TableCell>15 Mai 2025</TableCell>
                    <TableCell>Doza 3 din 3</TableCell>
                    <TableCell>Centrul Medical Sanador</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[#6e7781] border-[#e0e4ea]">
                        Programat
                      </Badge>
                    </TableCell>
                    <TableCell className="flex space-x-2">
                      <Button variant="outline" size="sm" className="text-[#d02746] border-[#e0e4ea]">
                        Anulare
                      </Button>
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Detalii
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommended">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#151b26]">Vaccinări Recomandate</CardTitle>
              <CardDescription className="text-[#6e7781]">
                Vaccinări recomandate în funcție de vârstă și istoric medical
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vaccin</TableHead>
                    <TableHead>Recomandat Pentru</TableHead>
                    <TableHead>Frecvență</TableHead>
                    <TableHead>Acțiuni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Vaccin Antigripal</TableCell>
                    <TableCell>Octombrie 2025</TableCell>
                    <TableCell>Anual</TableCell>
                    <TableCell>
                      <Button size="sm" className="bg-[#1373e6] hover:bg-[#0058d2]">
                        Programare
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tetanos</TableCell>
                    <TableCell>Iunie 2030</TableCell>
                    <TableCell>La fiecare 10 ani</TableCell>
                    <TableCell>
                      <Button size="sm" className="bg-[#1373e6] hover:bg-[#0058d2]">
                        Programare
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg text-[#151b26]">Informații Despre Vaccinări</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-[#6e7781]">
                Vaccinarea este una dintre cele mai eficiente metode de prevenire a bolilor infecțioase. Vaccinurile
                stimulează sistemul imunitar să producă anticorpi, la fel cum ar face dacă ați fi expus la boală, dar
                fără a provoca boala sau a vă expune la complicațiile acesteia.
              </p>
              <p className="text-[#6e7781]">
                Este important să vă mențineți la zi cu vaccinările recomandate pentru a vă proteja pe dumneavoastră și
                pe cei din jurul dumneavoastră de boli care pot fi prevenite prin vaccinare.
              </p>
              <div className="bg-[#f6fafe] p-4 rounded-md border border-[#bddbfd]">
                <h3 className="font-medium text-[#151b26] mb-2">Aveți nevoie de ajutor?</h3>
                <p className="text-[#6e7781] text-sm mb-3">
                  Dacă aveți întrebări despre vaccinuri sau programul de vaccinare, contactați medicul dumneavoastră sau
                  utilizați funcția de chat pentru a discuta cu un profesionist medical.
                </p>
                <Button variant="outline" className="text-[#1373e6] border-[#bddbfd]">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Discutați cu un Medic
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
function VaccinationEntry(props : {vaccin : any, data : any, doza : any, locatie : any, status : any})
{
  return (<TableRow>
  <TableCell className="font-medium">{props.vaccin}</TableCell>
  <TableCell>{props.data}</TableCell>
  <TableCell>{props.doza}</TableCell>
  <TableCell>{props.locatie}</TableCell>
  <TableCell>
    <Badge variant="outline" className="text-[#6e7781] border-[#e0e4ea]">
      {props.status}
    </Badge>
  </TableCell>
  <TableCell>
    <Button variant="ghost" size="sm" className="text-[#1373e6]">
      Detalii
    </Button>
  </TableCell>
</TableRow>);
}