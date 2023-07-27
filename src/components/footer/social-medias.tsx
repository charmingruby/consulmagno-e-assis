import { LogoIcon } from './logo-icon'
import { SocialLinkList } from './social-link-list'

export function SocialMedias() {
  return (
    <div className="gap-8 flex md:flex-row md:items-center justify-start flex-col">
      <LogoIcon />

      {/* Social medias */}
      <div>
        {/* Heading */}
        <h3 className="font-medium mb-1.5">Esteja atualizado</h3>

        {/* Phrase */}
        <p className="text-gray-400 text-sm mb-4">
          Siga nossas redes sociais para novidades e atualizações.
        </p>

        <SocialLinkList />
      </div>
    </div>
  )
}
