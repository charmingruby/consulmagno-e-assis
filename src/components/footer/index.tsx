import { ChevronUp } from 'lucide-react'
import { Container } from '../ui/container'

export function Footer() {
  return (
    <footer className="">
      <div className="border-t border-gray-200 py-12 bg-gray-75">
        <Container>
          {/* Top */}
          <div className="grid grid-cols-2">
            <div>
              <div className="">
                {/* Name + Description */}
                <div>
                  <h2 className="font-semibold mb-1">Marca</h2>
                  <h3 className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem nostrum molestias sed adipisci temporibus aliquid
                    omnis laboriosam, nam quos distinctio accusantium!
                    Recusandae, eos maxime a aspernatur veniam porro esse
                    similique?{' '}
                  </h3>
                </div>

                {/* Links */}
                <div>links</div>
              </div>
            </div>

            {/* Stay Updated */}
            <div className="flex justify-end">stay updated</div>
          </div>
        </Container>
      </div>

      <div className="border-t border-gray-200 py-4 bg-gray-75">
        <Container>
          {/* Bottom */}
          <div className="flex justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © Copyright 2023, Marca. Todos direitos reservados.
            </div>

            {/* Back to top button */}
            <div className="p-2 shadow-md hover:bg-primary-main/90 cursor-pointer transition-colors bg-primary-main rounded-md">
              <ChevronUp className="text-gray-50" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
