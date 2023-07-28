import { Button } from '../ui/button'

export function ButtonGroup() {
  return (
    <div className="items-center gap-2 hidden lg:flex lg:items-center ">
      <Button size="default" color="secondary">
        Blog
      </Button>
      <Button size="default">Entre em contato</Button>
    </div>
  )
}
