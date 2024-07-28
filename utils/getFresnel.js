function getFresnel(distance, freq) {
    return (Math.sqrt((distance / freq))) * 8.656;
}
export default getFresnel;
