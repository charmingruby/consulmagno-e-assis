interface ContentHeadingProps {
  heading: string
  margin?: boolean
}

export function ContentHeading({
  heading,
  margin = true,
}: ContentHeadingProps) {
  return (
    <h2
      className={`${
        margin ? 'mb-8' : 'mb-0'
      } w-full font-semibold text-3xl text-primary-main`}
    >
      {heading}
    </h2>
  )
}
