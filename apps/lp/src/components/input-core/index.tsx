import tw from 'tailwind-styled-components'

const colorClass =
  'text-gray-900 dark:text-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 dark:focus:border-green-500'

//export const InputCore = tw.input`relative w-full peer flex h-10 focus:outline-none appearance-none border border-gray-300 rounded-full outline-none transition pl-4 pr-6 group-hover:border-green-500 focus:border-green-500 cursor-pointer`
export const InputCore = tw.input`appearance-none border rounded-xl w-full outline-none pl-4 pr-6 focus:outline-none focus:ring-0 h-10 ${() =>
  colorClass}`
