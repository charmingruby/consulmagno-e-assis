import { Button } from '../ui/button'

export function ButtonGroup() {
  return (
    <div className="items-center gap-2 hidden lg:flex lg:items-center ">
      <Button size="sm" color="secondary">
        Blog
      </Button>
      <Button size="sm">Entre em contato</Button>
    </div>
  )
}
