import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative  flex items-center justify-center bg-gray-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://null.community/chapters/28-vijayawada" className="text-muted-foreground hover:text-primary">
                  Null Vijayawada
                </a>
              </li>
              <li>
                <a href="/team" className="text-muted-foreground hover:text-primary">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="https://null.community/chapters/28-vijayawada" className="text-muted-foreground hover:text-primary">
                  Past Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Explore Past Null Vijaywada Community Events</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://null.community/chapters/28-vijayawada" className="text-muted-foreground hover:text-primary">
                  Monthly Meetups
                </a>
              </li>
              <li>
                <a href="https://null.community/chapters/28-vijayawada" className="text-muted-foreground hover:text-primary">
                  Humla Session
                </a>
              </li>
              <li>
                <a href="https://null.community/chapters/28-vijayawada" className="text-muted-foreground hover:text-primary">
                  CTF 
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Event Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Partnership Proposition
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Media Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">No spam, only the latest news and updates!</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 GDG Lviv. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

