interface SectionDescriptorProps {
  primary?: boolean
  label: string
}

export function SectionDescriptor({
  label,
  primary = true,
}: SectionDescriptorProps) {
  return (
    <small
      className={`${
        primary ? 'text-primary-main' : 'text-secondary-main'
      } font-semibold text-base uppercase block`}
    >
      {label}
    </small>
  )
}
