"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState("doctor-1")
  const [message, setMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // In a real app, this would come from your database
  const chats = [
    {
      id: "doctor-1",
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      status: "online",
      avatar: "/placeholder.svg?height=40&width=40",
      unread: 0,
      messages: [
        { sender: "doctor", text: "Hello! How can I help you today?", time: "10:30 AM" },
        { sender: "user", text: "I've been experiencing some chest pain recently.", time: "10:32 AM" },
        {
          sender: "doctor",
          text: "I'm sorry to hear that. Can you describe the pain? Is it sharp, dull, or pressure-like?",
          time: "10:33 AM",
        },
        { sender: "user", text: "It's more like a pressure, especially when I exert myself.", time: "10:35 AM" },
        {
          sender: "doctor",
          text: "How long does the pain typically last? And does it radiate to other areas like your arm or jaw?",
          time: "10:36 AM",
        },
      ],
    },
    {
      id: "doctor-2",
      name: "Dr. Michael Chen",
      role: "General Practitioner",
      status: "offline",
      avatar: "/placeholder.svg?height=40&width=40",
      unread: 2,
      messages: [
        { sender: "doctor", text: "Your test results look good. Your blood pressure is normal.", time: "Yesterday" },
        { sender: "user", text: "That's great news! What about my cholesterol levels?", time: "Yesterday" },
        {
          sender: "doctor",
          text: "Your cholesterol is slightly elevated. I'd recommend some dietary changes.",
          time: "Yesterday",
        },
        {
          sender: "doctor",
          text: "I've sent some diet recommendations to your email. Let me know if you have questions.",
          time: "9:15 AM",
        },
        {
          sender: "doctor",
          text: "Also, remember to schedule your follow-up appointment in 3 months.",
          time: "9:16 AM",
        },
      ],
    },
    {
      id: "receptionist",
      name: "Front Desk",
      role: "Receptionist",
      status: "online",
      avatar: "/placeholder.svg?height=40&width=40",
      unread: 0,
      messages: [
        { sender: "doctor", text: "Good morning! How can I assist you today?", time: "8:45 AM" },
        { sender: "user", text: "I need to reschedule my appointment with Dr. Johnson.", time: "8:47 AM" },
        {
          sender: "doctor",
          text: "Of course! Dr. Johnson has availability on Thursday at 2:00 PM or Friday at 10:30 AM. Would either of those work for you?",
          time: "8:50 AM",
        },
      ],
    },
    {
      id: "assistant",
      name: "AI Consultant",
      role: "",
      status: "online",
      avatar: "/placeholder.svg?height=40&width=40",
      unread: 0,
      messages: [
        { sender: "doctor", text: "Good morning! How can I assist you today?", time: "8:45 AM" },
        { sender: "user", text: "I need to reschedule my appointment with Dr. Johnson.", time: "8:47 AM" },
        {
          sender: "doctor",
          text: "Of course! Dr. Johnson has availability on Thursday at 2:00 PM or Friday at 10:30 AM. Would either of those work for you?",
          time: "8:50 AM",
        },
      ],
    },
  ]

  const handleSendMessage = () => {
    if (!message.trim()) return

    // In a real app, you would send this to your backend
    // For now, we'll just update the UI
    const updatedChats = chats.map((chat) => {
      if (chat.id === activeChat) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            {
              sender: "user",
              text: message,
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
          ],
        }
      }
      return chat
    })

    // Update the chats state
    // In a real app, this would be handled by your state management
    setMessage("")

    // Simulate doctor response
    setTimeout(() => {
      const responseText = "Thank you for your message. I'll review this information and get back to you shortly."
      const updatedChatsWithResponse = updatedChats.map((chat) => {
        if (chat.id === activeChat) {
          return {
            ...chat,
            messages: [
              ...chat.messages,
              {
                sender: "doctor",
                text: responseText,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              },
            ],
          }
        }
        return chat
      })

      // Update the chats state with the response
      // In a real app, this would be handled by your state management
    }, 2000)
  }

  // Scroll to bottom of messages when they change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [activeChat, chats])

  const activeChats = chats.filter((chat) => chat.id === activeChat)[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Messages</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card className="h-[calc(80vh-100px)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <CardDescription>Chat with your healthcare providers</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="recent" className="w-full">
                <div className="px-4">
                  <TabsList className="grid grid-cols-2 mb-4 w-full">
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="all">All</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="recent" className="m-0">
                  <div className="space-y-1">
                    {chats.map((chat) => (
                      <button
                        key={chat.id}
                        className={`w-full flex items-center space-x-3 p-3 hover:bg-slate-100 transition-colors ${
                          activeChat === chat.id ? "bg-slate-100" : ""
                        }`}
                        onClick={() => setActiveChat(chat.id)}
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                            <AvatarFallback>
                              {chat.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {chat.status === "online" && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center justify-between">
                            <p className="font-medium truncate">{chat.name}</p>
                            {chat.unread > 0 && <Badge className="ml-2 bg-red-500">{chat.unread}</Badge>}
                          </div>
                          <p className="text-sm text-slate-500 truncate">{chat.role}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="all" className="m-0">
                  <div className="p-4 text-center text-slate-500">
                    <p>All conversations will be shown here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="h-[calc(80vh-100px)] flex flex-col">
            <CardHeader className="pb-2 border-b">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={activeChats.avatar || "/placeholder.svg"} alt={activeChats.name} />
                  <AvatarFallback>
                    {activeChats.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{activeChats.name}</CardTitle>
                  <CardDescription>{activeChats.role}</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {activeChats.messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.sender === "user" ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-teal-100" : "text-slate-500"}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            <CardFooter className="border-t p-4">
              <div className="flex w-full space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage}>Send</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
