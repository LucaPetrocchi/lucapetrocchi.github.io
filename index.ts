import calculator from "./components/calculator/calculator.js"
import tutorial from "./components/tutorial/tutorial.js"
import appendListToNode from "./utils/appendListToNode.js"

function main() {
  const main = document.getElementById('main')
  
  if (!main) { throw new Error('missing main div') }

  main.classList.add('w-[100vw]', 'h-full', 'bg-gradient-to-b',
    'from-slate-500', 'to-slate-white', 'flex', 'p-10', 
    'justify-center'
  )

  const container = document.createElement('div')
  container.classList.add('bg-white', 'border', 'border-gray-600',
    'rounded-xl', 'p-5', 'flex', 'flex-col', 'w-11/12', 'h-full'
  )

  const calc = calculator()

  const hr = document.createElement('hr')
  hr.classList.add('my-5', 'border-gray-400')

  const tut = tutorial()

  appendListToNode([
    calc,
    hr,
    tut
  ], container)

  main.appendChild(container)

}

main()