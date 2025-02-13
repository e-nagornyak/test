import { Text } from "@/components/ui/text"
import { Title } from "@/components/ui/title"

export default async function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center p-6 text-center">
      <Title weight={"semibold"} size={"2xl"}>
        Congratulations on my site!
      </Title>
      <Text size={"lg"} className="mt-4">
        Here you will find interesting information and opportunities.
      </Text>
    </main>
  )
}
