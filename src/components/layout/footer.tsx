export function Footer() {
  return (
    <footer className="mt-auto border-t backdrop-blur-md transition-all duration-300 border-border/40 bg-background/80">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col items-center text-center sm:text-left text-sm space-y-4">
          <div className="text-muted-foreground">
            {new Date().getFullYear()} &copy; Fanaticated.com | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
