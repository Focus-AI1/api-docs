'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden w-full border-b p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent position="left" className="w-64">
          <DocsSidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r h-screen sticky top-0">
        <DocsSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 lg:p-8">
        {children}
      </main>
    </div>
  )
}

function DocsSidebar() {
  return (
    <ScrollArea className="h-full py-6 px-4">
      <div className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Getting Started</h4>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/docs/introduction">Introduction</a>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/docs/quickstart">Quick Start</a>
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}