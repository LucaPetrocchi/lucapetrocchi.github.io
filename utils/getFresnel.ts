
function getFresnel(distance: number, freq: number) {
  return (Math.sqrt((distance / freq))) * 8.656
}

export default getFresnel