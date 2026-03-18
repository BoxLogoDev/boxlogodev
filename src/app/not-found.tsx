import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 font-serif text-6xl font-semibold text-foreground sm:text-8xl">
        404
      </p>
      <p className="mb-2 text-base text-foreground">
        페이지를 찾을 수 없어요
      </p>
      <p className="mb-8 text-sm text-foreground-muted">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있어요.
      </p>
      <Button href="/" size="lg">
        홈으로 돌아가기
      </Button>
    </div>
  );
}
