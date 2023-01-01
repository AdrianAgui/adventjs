function wrapping(gifts) {
  return gifts.map((gift) => {
    const wrappedGift = `*${gift}*`;
    const size = wrappedGift.length;
    return `${'*'.repeat(size)}\n${wrappedGift}\n${'*'.repeat(size)}`;
  });
}
