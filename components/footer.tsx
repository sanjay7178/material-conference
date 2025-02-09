import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative flex items-center justify-center bg-gray-100 py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">About</h3>
            <ul className="space-y-2 text-sm md:text-base">
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
          
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
              Explore Past Events
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
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
          
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Event Resources</h3>
            <ul className="space-y-2 text-sm md:text-base">
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
          
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Subscribe</h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              No spam, only the latest news and updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                placeholder="Your email" 
                type="email"
                className="min-h-[40px] text-base"
              />
              <Button className="w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8 mb-6">
          <a
            href="https://linkedin.com/company/nullvja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/nullvja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-black transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/NullChapter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-600 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t text-center text-xs md:text-sm text-muted-foreground">
          <p className="mb-2">&copy; 2025 Null VJA. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Made with{" "}
            <span className="text-red-500 animate-pulse" role="img" aria-label="love">
              ❤️
            </span>{" "}
            and{" "}
            <a
              href="https://github.com/sanjay7178/LLM-Bootcamp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 underline"
            >
              Open Source
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

