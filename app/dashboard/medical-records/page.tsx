"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft } from "lucide-react"

export default function NewMedicalRecordPage() {
  const router = useRouter()
  const [recordType, setRecordType] = useState("regular")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard/medical-records")
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" className="text-[#6e7781]" onClick={() => router.back()}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Înapoi
          </Button>
          <h1 className="text-2xl font-bold text-[#151b26] ml-2">Fișă Medicală Nouă</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#151b26]">Informații Pacient</CardTitle>
                <CardDescription className="text-[#6e7781]">
                  Introduceți informațiile de bază ale pacientului
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patientId" className="text-[#151b26]">
                      ID Pacient
                    </Label>
                    <Input id="patientId" placeholder="Introduceți ID-ul pacientului" className="border-[#e0e4ea]" />
                    <Button type="button" variant="link" className="p-0 h-auto text-[#1373e6]">
                      Căutare Pacient
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="visitDate" className="text-[#151b26]">
                      Data Vizitei
                    </Label>
                    <Input
                      id="visitDate"
                      type="date"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      className="border-[#e0e4ea]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#151b26]">
                      Prenume
                    </Label>
                    <Input id="firstName" placeholder="Prenume" className="border-[#e0e4ea]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#151b26]">
                      Nume
                    </Label>
                    <Input id="lastName" placeholder="Nume" className="border-[#e0e4ea]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-[#151b26]">
                      Data Nașterii
                    </Label>
                    <Input id="dateOfBirth" type="date" className="border-[#e0e4ea]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="insuranceType" className="text-[#151b26]">
                      Tip Asigurare
                    </Label>
                    <Select>
                      <SelectTrigger id="insuranceType" className="border-[#e0e4ea]">
                        <SelectValue placeholder="Selectați tipul de asigurare" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="state">Asigurare de Stat</SelectItem>
                        <SelectItem value="private">Asigurare Privată</SelectItem>
                        <SelectItem value="none">Fără Asigurare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#151b26]">Detalii Fișă Medicală</CardTitle>
                <CardDescription className="text-[#6e7781]">Introduceți detaliile vizitei medicale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-[#151b26]">Tip Vizită</Label>
                  <RadioGroup
                    defaultValue={recordType}
                    onValueChange={setRecordType}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="regular" id="visit-regular" />
                      <Label htmlFor="visit-regular" className="text-[#151b26]">
                        Consultație Regulată
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sick" id="visit-sick" />
                      <Label htmlFor="visit-sick" className="text-[#151b26]">
                        Vizită pentru Boală
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="followup" id="visit-followup" />
                      <Label htmlFor="visit-followup" className="text-[#151b26]">
                        Control Medical
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="emergency" id="visit-emergency" />
                      <Label htmlFor="visit-emergency" className="text-[#151b26]">
                        Urgență
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vaccination" id="visit-vaccination" />
                      <Label htmlFor="visit-vaccination" className="text-[#151b26]">
                        Vaccinare
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Tabs defaultValue="examination" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="examination">Examinare</TabsTrigger>
                    <TabsTrigger value="diagnosis">Diagnostic</TabsTrigger>
                    <TabsTrigger value="treatment">Tratament</TabsTrigger>
                    <TabsTrigger value="vaccination">Vaccinare</TabsTrigger>
                  </TabsList>

                  <TabsContent value="examination" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="vitalSigns" className="text-[#151b26]">
                        Semne Vitale
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-1">
                          <Label htmlFor="temperature" className="text-sm text-[#6e7781]">
                            Temperatură (°C)
                          </Label>
                          <Input id="temperature" placeholder="36.6" className="border-[#e0e4ea]" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="heartRate" className="text-sm text-[#6e7781]">
                            Ritm Cardiac (bpm)
                          </Label>
                          <Input id="heartRate" placeholder="75" className="border-[#e0e4ea]" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="bloodPressure" className="text-sm text-[#6e7781]">
                            Tensiune Arterială
                          </Label>
                          <Input id="bloodPressure" placeholder="120/80" className="border-[#e0e4ea]" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="respiratoryRate" className="text-sm text-[#6e7781]">
                            Frecvență Respiratorie
                          </Label>
                          <Input id="respiratoryRate" placeholder="16" className="border-[#e0e4ea]" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptoms" className="text-[#151b26]">
                        Simptome
                      </Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Simptomele raportate de pacient"
                        className="border-[#e0e4ea]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="examination" className="text-[#151b26]">
                        Examinare Fizică
                      </Label>
                      <Textarea
                        id="examination"
                        placeholder="Constatări din examinarea fizică"
                        className="border-[#e0e4ea]"
                      />
                      <div className="pt-2">
                        <Button
                          type="button"
                          variant="outline"
                          className="text-sm border-[#e0e4ea]"
                          onClick={() => {
                            const textarea = document.getElementById("examination") as HTMLTextAreaElement
                            if (textarea) {
                              textarea.value =
                                "General: Pacient alert și orientat x3, fără suferință acută.\nCardiovascular: Ritm regulat, fără sufluri, galop sau frecături.\nRespirator: Clar la auscultație bilateral, fără wheezing, raluri sau ronhusuri.\nAbdomen: Moale, nedureros, nedistendat, zgomote intestinale normale.\nExtremități: Fără edeme, amplitudine normală de mișcare."
                            }
                          }}
                        >
                          Utilizare Șablon
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="diagnosis" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="diagnosis" className="text-[#151b26]">
                        Diagnostic
                      </Label>
                      <Textarea
                        id="diagnosis"
                        placeholder="Diagnostice primare și secundare"
                        className="border-[#e0e4ea]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="icdCode" className="text-[#151b26]">
                        Cod ICD-10
                      </Label>
                      <Input id="icdCode" placeholder="ex., I10, E11.9" className="border-[#e0e4ea]" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="differentialDiagnosis" className="text-[#151b26]">
                        Diagnostic Diferențial
                      </Label>
                      <Textarea
                        id="differentialDiagnosis"
                        placeholder="Alte diagnostice posibile luate în considerare"
                        className="border-[#e0e4ea]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[#151b26]">Severitate</Label>
                      <RadioGroup defaultValue="mild">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mild" id="severity-mild" />
                          <Label htmlFor="severity-mild" className="text-[#151b26]">
                            Ușoară
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="severity-moderate" />
                          <Label htmlFor="severity-moderate" className="text-[#151b26]">
                            Moderată
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="severe" id="severity-severe" />
                          <Label htmlFor="severity-severe" className="text-[#151b26]">
                            Severă
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>

                  <TabsContent value="treatment" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="treatment" className="text-[#151b26]">
                        Plan de Tratament
                      </Label>
                      <Textarea
                        id="treatment"
                        placeholder="Tratament prescris și recomandări"
                        className="border-[#e0e4ea]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medications" className="text-[#151b26]">
                        Medicație
                      </Label>
                      <Textarea
                        id="medications"
                        placeholder="Medicamente prescrise, dozaj și frecvență"
                        className="border-[#e0e4ea]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="procedures" className="text-[#151b26]">
                        Proceduri Efectuate
                      </Label>
                      <Textarea
                        id="procedures"
                        placeholder="Orice proceduri efectuate în timpul vizitei"
                        className="border-[#e0e4ea]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[#151b26]">Spitalizare Necesară</Label>
                      <RadioGroup defaultValue="no">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="hospitalization-yes" />
                          <Label htmlFor="hospitalization-yes" className="text-[#151b26]">
                            Da
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="hospitalization-no" />
                          <Label htmlFor="hospitalization-no" className="text-[#151b26]">
                            Nu
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="followUp" className="text-[#151b26]">
                        Instrucțiuni de Urmărire
                      </Label>
                      <Textarea
                        id="followUp"
                        placeholder="Recomandări și calendar de urmărire"
                        className="border-[#e0e4ea]"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="vaccination" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="vaccineType" className="text-[#151b26]">
                        Tip Vaccin
                      </Label>
                      <Select>
                        <SelectTrigger id="vaccineType" className="border-[#e0e4ea]">
                          <SelectValue placeholder="Selectați tipul de vaccin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flu">Vaccin Antigripal</SelectItem>
                          <SelectItem value="covid">COVID-19</SelectItem>
                          <SelectItem value="hepb">Hepatita B</SelectItem>
                          <SelectItem value="tetanus">Tetanos</SelectItem>
                          <SelectItem value="mmr">ROR (Rujeolă, Oreion, Rubeolă)</SelectItem>
                          <SelectItem value="pneumo">Pneumococic</SelectItem>
                          <SelectItem value="other">Altul</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vaccineBatch" className="text-[#151b26]">
                        Lot Vaccin
                      </Label>
                      <Input id="vaccineBatch" placeholder="Număr lot vaccin" className="border-[#e0e4ea]" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vaccineManufacturer" className="text-[#151b26]">
                        Producător
                      </Label>
                      <Input
                        id="vaccineManufacturer"
                        placeholder="Producătorul vaccinului"
                        className="border-[#e0e4ea]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="doseNumber" className="text-[#151b26]">
                        Număr Doză
                      </Label>
                      <Select>
                        <SelectTrigger id="doseNumber" className="border-[#e0e4ea]">
                          <SelectValue placeholder="Selectați numărul dozei" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Prima doză</SelectItem>
                          <SelectItem value="2">A doua doză</SelectItem>
                          <SelectItem value="3">A treia doză</SelectItem>
                          <SelectItem value="booster">Booster</SelectItem>
                          <SelectItem value="annual">Anual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="administrationSite" className="text-[#151b26]">
                        Locul Administrării
                      </Label>
                      <Select>
                        <SelectTrigger id="administrationSite" className="border-[#e0e4ea]">
                          <SelectValue placeholder="Selectați locul administrării" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="leftArm">Braț stâng</SelectItem>
                          <SelectItem value="rightArm">Braț drept</SelectItem>
                          <SelectItem value="leftThigh">Coapsă stângă</SelectItem>
                          <SelectItem value="rightThigh">Coapsă dreaptă</SelectItem>
                          <SelectItem value="other">Alt loc</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vaccineReactions" className="text-[#151b26]">
                        Reacții Post-Vaccinare
                      </Label>
                      <Textarea
                        id="vaccineReactions"
                        placeholder="Orice reacții observate după vaccinare"
                        className="border-[#e0e4ea]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nextDoseDate" className="text-[#151b26]">
                        Data Următoarei Doze (dacă este cazul)
                      </Label>
                      <Input id="nextDoseDate" type="date" className="border-[#e0e4ea]" />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes" className="text-[#151b26]">
                    Note Adiționale
                  </Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder="Orice informații sau observații suplimentare"
                    className="border-[#e0e4ea]"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[#151b26]">Atașamente</Label>
                  <div className="border border-[#e0e4ea] rounded-md p-4">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="fileUpload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-[#f9f9f9] hover:bg-[#f6fafe] border-[#e0e4ea]"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 mb-3 text-[#6e7781]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-[#6e7781]">
                            <span className="font-semibold">Click pentru încărcare</span> sau trage și plasează
                          </p>
                          <p className="text-xs text-[#6e7781]">
                            Scanări RMN, rezultate de laborator sau alte documente
                          </p>
                        </div>
                        <input id="fileUpload" type="file" className="hidden" multiple />
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#151b26]">Finalizare Fișă</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="confirm" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="confirm" className="text-sm font-medium leading-none text-[#151b26]">
                      Confirm că informațiile furnizate sunt corecte și complete
                    </Label>
                    <p className="text-sm text-[#6e7781]">
                      Această fișă medicală va fi stocată în dosarul electronic de sănătate al pacientului
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => router.back()}
                  className="border-[#e0e4ea] text-[#6e7781]"
                >
                  Anulare
                </Button>
                <Button type="submit" disabled={isSubmitting} className="bg-[#1373e6] hover:bg-[#0058d2]">
                  {isSubmitting ? "Se salvează..." : "Salvare Fișă Medicală"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </form>
      </div>
    </div>
  )
}
