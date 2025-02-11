import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Linkedin, X } from "lucide-react"
import { Speaker } from "@/data/speakers"

interface SpeakerModalProps {
  speaker: Speaker
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SpeakerModal({ speaker, open, onOpenChange }: SpeakerModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95vw] md:max-w-2xl max-h-[90vh] overflow-y-auto bg-background p-6 sm:px-8 shadow-lg z-[9999] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-lg">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <DialogHeader>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full"
            />
            <div className="flex-1 text-center md:text-left">
              <DialogTitle className="text-xl mb-2">{speaker.name}</DialogTitle>
              <p className="text-sm text-muted-foreground">{speaker.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{speaker.topic}</p>
            </div>
            <img 
              src={speaker.companyLogo} 
              alt="Company Logo"
              className="h-5 md:h-6 object-contain mt-2 md:mt-0"
            />
          </div>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm leading-relaxed whitespace-pre-line px-2 md:px-0">{speaker.bio}</p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {speaker.social.linkedin && (
              <a 
                href={speaker.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
