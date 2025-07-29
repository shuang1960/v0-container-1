import AppLayout from "@/components/app-layout"

export default function HomePage() {
  return (
    <AppLayout>
      <div className="w-full h-full p-6 bg-white">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="mt-4 text-muted-foreground">This is the Home page content area. Some extra text to ensure that we get wraparound in the UI so we can check right margin padding. Now is the time for all good men to come to the aid of the party. Now is the time for all good men to come to the aid of the party. Now is the time for all good men to come to the aid of the party.</p>
      </div>
    </AppLayout>
  )
}
