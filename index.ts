import calculator from "./components/calculator/calculator.js"

function main() {
  const main = document.getElementById('main')
  
  if (!main) { throw new Error('missing main div') }


  const calc = calculator()

  main.appendChild(calc)

}

main()