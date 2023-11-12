import { Box } from '@/components/ui/box'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import exampleUser from '@/assets/images/lawyer.jpg'
import exampleImage from '@/assets/images/lawyers.png'

export function RecentPostsList() {
  const exampleDate = new Date().toDateString()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Box className="p-0">
        <div className="relative">
          <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
          <Image
            src={exampleImage}
            alt="Foto de exemplo"
            className="rounded-t-sm"
          />
          <div className="absolute top-0 p-4">
            <div className="p-2 border border-gray-50 text-gray-50 font-medium">
              Direito civil
            </div>
          </div>
        </div>

        <div className="px-6 py-3">
          {/* Title */}
          <strong className="text-2xl block mb-4">
            Novidades na advocacia
          </strong>

          {/* Details */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={exampleUser}
              alt="Foto de exemplo"
              className="rounded-full h-8 w-8"
            />

            <strong className="font-medium">Paulo Renato</strong>

            <div className="h-px flex-1 bg-gray-200" />

            <small className="text-gray-400 text-xs">{exampleDate}</small>
          </div>

          {/* Excerpt */}
          <div className="mb-8">
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              magnam error eos, rem amet aperiam. Nulla nostrum voluptate,
              praesentium possimus ullam saepe asperiores similique at deserunt,
              earum explicabo laborum corrupti?
            </p>
          </div>

          <Link prefetch={false} href="/" className="flex items-center gap-1">
            <span className="font-medium text-sm">Ver post</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Box>
      <Box className="p-0">
        <div className="relative">
          <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
          <Image
            src={exampleImage}
            alt="Foto de exemplo"
            className="rounded-t-sm"
          />
          <div className="absolute top-0 p-4">
            <div className="p-2 border border-gray-50 text-gray-50 font-medium">
              Direito civil
            </div>
          </div>
        </div>

        <div className="px-6 py-3">
          {/* Title */}
          <strong className="text-2xl block mb-4">
            Novidades na advocacia
          </strong>

          {/* Details */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={exampleUser}
              alt="Foto de exemplo"
              className="rounded-full h-8 w-8"
            />

            <strong className="font-medium">Paulo Renato</strong>

            <div className="h-px flex-1 bg-gray-200" />

            <small className="text-gray-400 text-xs">{exampleDate}</small>
          </div>

          {/* Excerpt */}
          <div className="mb-8">
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              magnam error eos, rem amet aperiam. Nulla nostrum voluptate,
              praesentium possimus ullam saepe asperiores similique at deserunt,
              earum explicabo laborum corrupti?
            </p>
          </div>

          <Link prefetch={false} href="/" className="flex items-center gap-1">
            <span className="font-medium text-sm">Ver post</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Box>{' '}
      <Box className="p-0">
        <div className="relative">
          <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
          <Image
            src={exampleImage}
            alt="Foto de exemplo"
            className="rounded-t-sm"
          />
          <div className="absolute top-0 p-4">
            <div className="p-2 border border-gray-50 text-gray-50 font-medium">
              Direito civil
            </div>
          </div>
        </div>

        <div className="px-6 py-3">
          {/* Title */}
          <strong className="text-2xl block mb-4">
            Novidades na advocacia
          </strong>

          {/* Details */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={exampleUser}
              alt="Foto de exemplo"
              className="rounded-full h-8 w-8"
            />

            <strong className="font-medium">Paulo Renato</strong>

            <div className="h-px flex-1 bg-gray-200" />

            <small className="text-gray-400 text-xs">{exampleDate}</small>
          </div>

          {/* Excerpt */}
          <div className="mb-8">
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              magnam error eos, rem amet aperiam. Nulla nostrum voluptate,
              praesentium possimus ullam saepe asperiores similique at deserunt,
              earum explicabo laborum corrupti?
            </p>
          </div>

          <Link prefetch={false} href="/" className="flex items-center gap-1">
            <span className="font-medium text-sm">Ver post</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Box>{' '}
      <Box className="p-0">
        <div className="relative">
          <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
          <Image
            src={exampleImage}
            alt="Foto de exemplo"
            className="rounded-t-sm"
          />
          <div className="absolute top-0 p-4">
            <div className="p-2 border border-gray-50 text-gray-50 font-medium">
              Direito civil
            </div>
          </div>
        </div>

        <div className="px-6 py-3">
          {/* Title */}
          <strong className="text-2xl block mb-4">
            Novidades na advocacia
          </strong>

          {/* Details */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={exampleUser}
              alt="Foto de exemplo"
              className="rounded-full h-8 w-8"
            />

            <strong className="font-medium">Paulo Renato</strong>

            <div className="h-px flex-1 bg-gray-200" />

            <small className="text-gray-400 text-xs">{exampleDate}</small>
          </div>

          {/* Excerpt */}
          <div className="mb-8">
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              magnam error eos, rem amet aperiam. Nulla nostrum voluptate,
              praesentium possimus ullam saepe asperiores similique at deserunt,
              earum explicabo laborum corrupti?
            </p>
          </div>

          <Link prefetch={false} href="/" className="flex items-center gap-1">
            <span className="font-medium text-sm">Ver post</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Box>
      <Box className="p-0">
        <div className="relative">
          <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
          <Image
            src={exampleImage}
            alt="Foto de exemplo"
            className="rounded-t-sm"
          />
          <div className="absolute top-0 p-4">
            <div className="p-2 border border-gray-50 text-gray-50 font-medium">
              Direito civil
            </div>
          </div>
        </div>

        <div className="px-6 py-3">
          {/* Title */}
          <strong className="text-2xl block mb-4">
            Novidades na advocacia
          </strong>

          {/* Details */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={exampleUser}
              alt="Foto de exemplo"
              className="rounded-full h-8 w-8"
            />

            <strong className="font-medium">Paulo Renato</strong>

            <div className="h-px flex-1 bg-gray-200" />

            <small className="text-gray-400 text-xs">{exampleDate}</small>
          </div>

          {/* Excerpt */}
          <div className="mb-8">
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              magnam error eos, rem amet aperiam. Nulla nostrum voluptate,
              praesentium possimus ullam saepe asperiores similique at deserunt,
              earum explicabo laborum corrupti?
            </p>
          </div>

          <Link prefetch={false} href="/" className="flex items-center gap-1">
            <span className="font-medium text-sm">Ver post</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Box>
    </div>
  )
}
