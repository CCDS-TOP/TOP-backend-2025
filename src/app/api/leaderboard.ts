import { ICard, ILeaderboard, ISubOG } from "models/Interfaces"


// Function to assign a card to a Sub-OG
function assignCardToSubOG(subOG: ISubOG, card: ICard): void {
  // Logic to assign the card
  subOG.cards.push(card.myCard)

  // Rmb to update leaderboard (Sort leaderboard)
  // sortLeaderboard(leaderboard)

}

// Function to remove a card from a Sub-OG
function removeCardFromSubOG(subOG: ISubOG, card: ICard): void {
  // Logic to remove the card
  subOG.cards = subOG.cards.filter(ele => ele !== card.myCard)
  // Rmb to update leaderboard (Sort leaderboard)
  // sortLeaderboard(leaderboard)


}

// Function to update the leaderboard

// Returns a leaderboard object following the ILeaderboard interface pattern
const sortLeaderboard = (leaderboard: ILeaderboard): ILeaderboard => {
  const sortedSubOGs = leaderboard.allSubOGs.sort((a, b) => b.cards.length - a.cards.length)

  return {
    ...leaderboard,
    allSubOGs: sortedSubOGs
  }

}
