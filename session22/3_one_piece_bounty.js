/*
 * One Piece Bounty Calculator – Return Values
 * 
 * Story:
 * Luffy just defeated a powerful enemy, and the World Government has increased his bounty!
 * But he's too busy eating meat to do the calculations. Can you help him figure out his new bounty?
 */

function calculateBounty(currentBounty, increase) {
  return currentBounty + increase;
}

console.log(calculateBounty(1_500_000_000, 500_000_000));