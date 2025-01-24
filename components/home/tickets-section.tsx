import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const tickets = [
  {
    name: "EDU",
    price: 80,
    dates: "Feb 7 - Oct 13",
    description: "Requires valid student/lecturer ID",
    available: true,
  },
  {
    name: "Pre Early Bird",
    price: 100,
    dates: "Feb 7 - Mar 31",
    description: "Or first 50 tickets",
    available: false,
    status: "YOU MISSED IT!",
  },
  {
    name: "Early Bird",
    price: 120,
    dates: "Feb 7 - Jun 30",
    description: "Or first 200 tickets",
    available: true,
    featured: true,
    saveText: "Save 25% today",
  },
  {
    name: "Regular",
    price: 160,
    dates: "Jul 1 - Sep 30",
    description: "Or first 350 tickets",
    available: false,
  },
  {
    name: "I Love DFUA",
    price: 280,
    dates: "Any time",
    description: "Money worth nothing when you love it",
    available: true,
  },
]

export function TicketsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Tickets</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tickets.map((ticket) => (
            <Card key={ticket.name} className={`relative ${ticket.featured ? "border-purple-600 shadow-lg" : ""}`}>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-medium mb-4">{ticket.name}</h3>
                <div className="text-4xl font-bold mb-4">
                  <span className="text-2xl">$</span>
                  {ticket.price}
                </div>
                {ticket.saveText && <div className="text-red-500 text-sm mb-4">{ticket.saveText}</div>}
                <div className="text-sm text-muted-foreground mb-6">
                  <div>{ticket.dates}</div>
                  <div>{ticket.description}</div>
                </div>
                {ticket.available ? (
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">BUY TICKET</Button>
                ) : (
                  <div className="text-muted-foreground font-medium">{ticket.status || "SOLD OUT"}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Tickets grant access to all conference sections, coffee breaks, lunch and party. Accommodation is NOT
          included in the ticket price.
        </p>
      </div>
    </section>
  )
}

