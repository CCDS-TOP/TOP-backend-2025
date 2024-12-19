type Suit = 'Spades' | 'Hearts' | 'Diamonds' | 'Clubs';
type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King' | 'Ace';

type PokerCard = `${Rank} of ${Suit}`;

interface OGType {
    ogName: string;
    subOGs: SubOGType[];
}

interface SubOGType {
    subOGName: string;
    parentOG: string;
    cards: PokerCard[];  // Array of cards assigned to Sub-OG
    lastCardEarnedAt: Date;
}

interface LeaderboardType {
    subOGs: SubOGType[];  // List of Sub-OGs, sorted by rank or other criteria
}


// Mock data

const ace1: SubOGType = {
    subOGName: "...",
    parentOG: "...",
    cards: ["Ace of Spades", "2 of Hearts", "3 of Diamonds"],
    lastCardEarnedAt: new Date("2024-12-19T10:00:00Z")
};

const ace2: SubOGType = {
    subOGName: "...",
    parentOG: "...",
    cards: ["King of Clubs", "Ace of Hearts"],
    lastCardEarnedAt: new Date("2024-12-18T15:00:00Z")
};

// Example of mock OG data
const og1: OGType = {
    ogName: "OG1",
    subOGs: [ace1, ace2]
};

const leaderboard: LeaderboardType = {
    subOGs: [ace1, ace2]  // Example leaderboard sorted by rank
};