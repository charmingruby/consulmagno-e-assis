interface PageTitleProps {
  title: string
}

export function PageTitle({ title }: PageTitleProps) {
  return <h2 className="text-4xl font-semibold text-primary-main">{title}</h2>
}
