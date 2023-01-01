function distributeGifts(packOfGifts, reindeers) {
  const carry = reindeers.reduce((acc, rein) => acc + rein.length * 2, 0);
  const weights = packOfGifts.reduce((acc, gift) => acc + gift.length, 0);
  return Math.floor(carry / weights);
}
