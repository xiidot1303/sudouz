import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">404</h1>
      <p className="text-muted-foreground">This page could not be found.</p>
      <Link href="/" className="text-sm underline underline-offset-4">
        Go home
      </Link>
    </Container>
  );
}
