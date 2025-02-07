import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Linkedin } from "lucide-react"
import { Speaker } from "@/data/speakers"

interface SpeakerModalProps {
  speaker: Speaker
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SpeakerModal({ speaker, open, onOpenChange }: SpeakerModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-20 h-20 rounded-full"
            />
            <div className="flex-1">
              <DialogTitle className="text-xl mb-2">{speaker.name}</DialogTitle>
              <p className="text-sm text-muted-foreground">{speaker.role}</p>
            </div>
            <img 
              src={speaker.companyLogo} 
              alt="Company Logo"
              className="h-8 object-contain"
            />
          </div>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm leading-relaxed whitespace-pre-line">{speaker.bio}</p>
          <div className="flex gap-4 mt-6">
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
